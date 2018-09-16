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
  active;
  activeOriginal;

  @observable
  benefits;
  benefitsOriginal;

  @observable
  points;
  pointsOriginal;

  @observable
  totalPoints;
  totalPointsOriginal;

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
      this.activeOriginal = this.active = active;
      this.benefitsOriginal = this.benefits = benefits;
      this.pointsOriginal = this.points = points;
      this.totalPointsOriginal = this.totalPoints = totalPoints;
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
    this.activeOriginal = this.active = null;
    this.benefitsOriginal = this.benefits = null;
    this.pointsOriginal = this.points = null;
    this.totalPointsOriginal = this.totalPoints = null;
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
    this.activeOriginal = this.active = active;
    this.benefitsOriginal = this.benefits = benefits;
    this.pointsOriginal = this.points = points;
    this.totalPointsOriginal = this.totalPoints = totalPoints;
  }

  @action.bound
  onUserSelect(userId) {
    this.currentUserId = userId;
    this.getRewards();
  }

  @action.bound
  onActiveToggle() {
    this.active = !this.active;
  }

  @action.bound
  onBenefitsToggle() {
    this.benefits = !this.benefits;
  }

  @action.bound
  onPointsSelect(value) {
    this.points = value;
  }

  @action.bound
  onTotalPointsChange(event) {
    this.totalPoints = event.target.value;
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
    this.active = this.activeOriginal;
    this.benefits = this.benefitsOriginal;
    this.points = this.pointsOriginal;
    this.totalPoints = this.totalPointsOriginal;
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

    if (this.active !== this.activeOriginal) toUpdate.active = this.active;

    if (this.benefits !== this.benefitsOriginal) toUpdate.benefits = this.benefits;

    if (this.points !== this.pointsOriginal) toUpdate.points = this.points;

    if (this.totalPoints !== this.totalPointsOriginal) toUpdate.totalPoints = this.totalPoints;

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
