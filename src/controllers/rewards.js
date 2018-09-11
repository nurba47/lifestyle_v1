import authCtrl from "./auth";
import { observable, action, computed } from "mobx";

class Rewards {
  @observable
  ready = false;

  @observable
  rewards;

  @action
  async load() {
    if (!this.ready && authCtrl.user) {
      let rewards = await this.getRewards();
      this.rewards = rewards;
      this.ready = true;
    }
  }

  @action
  reset() {
    this.rewards = null;
    this.ready = false;
  }

  @action.bound
  async getRewards() {
    // TODO:
    return [];
  }

  @action.bound
  onNewRewardAdd() {
    this.rewards.push({ date: new Date().toString(), income: 0, withdraw: 0 });
  }

  @action.bound
  onRowValueChange(index, field, value) {
    this.rewards[index][field] = value;
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
}

export default new Rewards();
