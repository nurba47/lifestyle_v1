import { getReferrals } from "../api/profile";
import auth from "./auth";
import { observable, action } from "mobx";

class Profile {
  @observable referrals = [];
  @observable ready = false;

  async load() {
    let [referrals] = await Promise.all([getReferrals()]);

    this.referrals = referrals;
    this.ready = true;
  }

  @action.bound
  async getReferrals() {
    let { user } = auth.user;
    if (user) {
      let response = await getReferrals(user.token);
      return response.children;
    }
    return Promise.reject();
  }
}

export default new Profile();
