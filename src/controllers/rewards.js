import { observable, action, computed } from "mobx";
import _ from "lodash";
import authCtrl from "./auth";
import * as rewardsApi from "../api/rewards";
import { getAllUsers } from "../api/auth";
import { formatDate } from "../helpers";

class Rewards {
  @observable
  ready = false;

  @observable
  users;

  @observable
  rewards;
  rewardsOriginal;

  @observable
  currentUserId;

  constructor() {
    this.reset();
  }

  @action // loads data for USER
  async load() {
    let { user } = authCtrl;
    if (!this.ready && user) {
      let result = await rewardsApi.getForUser();

      let { rewards } = result;
      rewards.forEach(r => (r.date = formatDate(new Date(r.date))));
      rewards.sort((r1, r2) => r1.date < r2.date);

      this.rewards = rewards;
      this.ready = true;
    }
  }

  @action // loads data for ADMIN
  async loadForAdmin() {
    let { user } = authCtrl;
    if (!this.ready && user) {
      let users = await this.getAllUsers();
      this.users = users;

      this.currentUserId = users[0]._id;
      this.getRewards();

      this.ready = true;
    }
  }

  @action
  reset() {
    this.users = null;
    this.rewards = [];
    this.currentUserId = null;
    this.ready = false;
  }

  @action.bound
  async getAllUsers() {
    return await getAllUsers();
  }

  @action.bound
  async getRewards() {
    let result = await rewardsApi.get(this.currentUserId);
    let { rewards } = result;
    rewards.forEach(r => (r.date = formatDate(new Date(r.date))));
    rewards.sort((r1, r2) => r1.date < r2.date);

    if (!rewards.length) rewards.push(this.getDefReward());

    this.rewards = rewards;
    this.rewardsOriginal = rewards.slice();
  }

  @action.bound
  onUserSelect(userId) {
    this.currentUserId = userId;
    this.getRewards();
  }

  @action.bound
  onRowValueChange(index, field, value) {
    this.rewards[index][field] = value;
  }

  @action.bound
  onRowRemove(index) {
    this.rewards.splice(index, 1);
  }

  @computed
  get computedResult() {
    let result = 0;
    if (this.rewards)
      result = this.rewards.reduce((total, { income, withdraw }) => {
        return total + (income - withdraw);
      }, 0);
    return result;
  }

  @action.bound
  onNewRewardAdd() {
    this.rewards.unshift(this.getDefReward());
  }

  @action.bound
  onCancelRewards() {
    this.rewards = (this.rewardsOriginal && this.rewardsOriginal.slice()) || [];
  }

  @action.bound
  async onSaveRewards() {
    if (!this.validateRewards()) {
      alert("Данные некорректны");
      return;
    }
    let toCreate = this.rewards.filter(r => !r._id);

    let toUpdate = this.rewards.filter(r => {
      if (r._id) {
        let found = this.rewardsOriginal.find(ro => ro._id === r._id);
        return found && !_.isEqual(found, r);
      }
      return false;
    });

    let toDelete = this.rewardsOriginal.reduce((deleted, ro) => {
      let found = this.rewards.find(r => r._id === ro._id);
      if (!found) {
        deleted.push(ro._id);
      }
      return deleted;
    }, []);

    try {
      if (toCreate.length)
        await rewardsApi.create({ user_id: this.currentUserId, rewards: toCreate });

      if (toUpdate.length)
        await rewardsApi.update({ user_id: this.currentUserId, rewards: toUpdate });

      if (toDelete.length)
        await rewardsApi.remove({ user_id: this.currentUserId, reward_ids: toDelete });
    } catch (error) {
      alert("Ошибка при сохранении");
      console.log(error);
    }
  }

  getDefReward() {
    return { date: formatDate(), income: 0, withdraw: 0 };
  }

  validateRewards() {
    return this.rewards.every(r => r.date && r.income >= 0 && r.withdraw >= 0);
  }
}

export default new Rewards();
