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

  @observable
  extraData = {
    active: null,
    benefits: null,
    points: null,
    totalPoints: null
  };
  extraDataOriginal;

  constructor() {
    this.reset();
  }

  @action // loads data for USER
  async load() {
    let { user } = authCtrl;
    if (!this.ready && user) {
      let result = await rewardsApi.getForUser();

      let { rewards, active, benefits, points, totalPoints } = result;
      rewards.forEach(r => (r.date = formatDate(new Date(r.date))));
      rewards.sort((r1, r2) => r1.date < r2.date);

      this.rewards = rewards;
      this.extraData = { active, benefits, points, totalPoints };
      this.extraDataOriginal = { ...this.extraData };
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
    this.currentUserId = null;
    this.rewardsOriginal = this.rewards = [];
    this.extraData = {};
    this.ready = false;
  }

  @action.bound
  async getAllUsers() {
    return await getAllUsers();
  }

  @action.bound
  async getRewards() {
    let result = await rewardsApi.get(this.currentUserId);
    let { rewards, active, benefits, points, totalPoints } = result;
    rewards.forEach(r => (r.date = formatDate(new Date(r.date))));
    rewards.sort((r1, r2) => r1.date < r2.date);

    if (!rewards.length) rewards.push(this.getDefReward());

    this.rewards = rewards;
    this.rewardsOriginal = rewards.slice();
    this.extraData = { active, benefits, points, totalPoints };
    this.extraDataOriginal = { ...this.extraData };
  }

  @action.bound
  onUserSelect(userId) {
    this.currentUserId = userId;
    this.getRewards();
  }

  @action.bound
  onActiveToggle() {
    this.extraData.active = !this.extraData.active;
  }

  @action.bound
  onBenefitsToggle() {
    this.extraData.benefits = !this.extraData.benefits;
  }

  @action.bound
  onPointsSelect(value) {
    this.extraData.points = value;
  }

  @action.bound
  onTotalPointsChange(event) {
    this.extraData.totalPoints = event.target.value;
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
    this.extraData = { ...this.extraDataOriginal };
  }

  @action.bound
  async onSaveRewards() {
    if (!this.validateRewards()) {
      alert("Данные некорректны");
      return;
    }
    let toCreate = this.rewards.filter(r => !r._id);

    let toUpdate = {};
    toUpdate.rewards = this.rewards.filter(r => {
      if (r._id) {
        let found = this.rewardsOriginal.find(ro => ro._id === r._id);
        return found && !_.isEqual(found, r);
      }
      return false;
    });

    if (this.extraData.active !== this.extraDataOriginal.active)
      toUpdate.active = this.extraData.active;

    if (this.extraData.benefits !== this.extraDataOriginal.benefits)
      toUpdate.benefits = this.extraData.benefits;

    if (this.extraData.points !== this.extraDataOriginal.points)
      toUpdate.points = this.extraData.points;

    if (this.extraData.totalPoints !== this.extraDataOriginal.totalPoints)
      toUpdate.totalPoints = this.extraData.totalPoints;

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

      if (Object.keys(toUpdate).length > 0)
        await rewardsApi.update({ user_id: this.currentUserId, ...toUpdate });

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
