import { getReferrals } from "../api/profile";
import authCtrl from "./auth";
import { observable, action } from "mobx";

class Profile {
  @observable
  referrals;

  @observable
  ready = false;

  @action
  async load() {
    if (!this.ready) {
      let [referrals] = await Promise.all([this.getReferrals()]);
      referrals = this.modifyTree(referrals);

      this.referrals = [{ title: authCtrl.user.email, children: referrals }];
      this.ready = true;
    }
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

  @action
  reset() {
    this.referrals = null;
    this.ready = true;
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
}

export default new Profile();
