import { observable, action, computed } from "mobx";
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

  @action
  async load() {
    if (!this.ready && authCtrl.user) {
      let users = await this.getAllUsers();
      this.users = users;
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

    if (!rewards.length) rewards.push(this.getDefReward())

    this.rewardsOriginal = this.rewards = rewards;
  }

  @action.bound
  onUserSelect(userId) {
    this.currentUserId = userId;
    this.getRewards();
  }

  @action.bound
  onNewRewardAdd() {
    this.rewards.unshift(this.getDefReward());
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

  getDefReward() {
    return { date: formatDate(), income: 0, withdraw: 0 };
  }
}

export default new Rewards();
