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
    if (!this.ready && authCtrl.user) {
      let referrals = await this.getReferrals();
      referrals = this.modifyTree(referrals);

      this.referrals = [{ title: authCtrl.user.email, children: referrals }];
      // this.ready = true;
    }
  }

  @action
  reset() {
    this.referrals = null;
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
      let response = await getReferrals();
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
