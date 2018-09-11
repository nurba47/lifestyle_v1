import { getReferrals } from "../api/profile";
import authCtrl from "./auth";
import { observable, action } from "mobx";

class Profile {
  @observable
  referrals;

  @observable
  ready = false;

  @observable
  rewards;

  @action
  async load() {
    if (!this.ready) {
      let [referrals] = await Promise.all([this.getReferrals()]);
      referrals = this.modifyTree(referrals);

      this.referrals = [{ title: authCtrl.user.email, children: referrals }];
      this.rewards = [];
      this.ready = true;
    }
  }

  @action
  reset() {
    this.referrals = null;
    this.rewards = null;
    this.ready = false;
  }

  modifyTree(treeLike) {
    let stack = [...treeLike];

    while (stack.length > 0) {
      var currentNode = stack.pop();
      currentNode.title = currentNode.email;
      delete currentNode.email;

      var grandChildren = this.modifyTree(currentNode.children);
      currentNode.children = grandChildren;
    }

    return treeLike;
  }

  @action.bound
  async getReferrals() {
    let { user } = authCtrl;
    if (user) {
      let response = await getReferrals(user.token);
      return response.children;
    }
    return Promise.reject();
  }

  @action.bound
  onReferralsChange(referrals) {
    this.referrals = referrals;
  }

  @action.bound
  onNewRewardAdd() {
    this.rewards.push({ date: new Date().toString(), income: 0, withdrow: 0 });
  }

  @action.bound
  onRowValueChange(index, field, value) {
    this.rewards[index][field] = value;
  }
}

export default new Profile();
