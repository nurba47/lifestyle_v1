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

      let children = referrals.map(r => ({ title: r.email }));
      this.referrals = [{ title: authCtrl.user.email, children }];
      this.ready = true;
    }
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
