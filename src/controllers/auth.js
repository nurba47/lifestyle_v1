import { observable, action } from "mobx";
import { register, login } from "../api/auth";
import { formatDate } from "../helpers";

class Auth {
  PROFILE = "profile";

  @observable
  user;
  @observable
  ready;

  loadProfile() {
    let profile = window.localStorage.getItem(this.PROFILE);
    profile = JSON.parse(profile);

    if (profile && profile.user) this.user = profile.user;
    else this.user = null;
    this.ready = true;
  }

  @action.bound
  async auth(isLogin, user) {
    try {
      let func = isLogin ? login : register;
      const response = await func(user);

      user = response.user;
      user.registrationDate = formatDate(new Date(user.registrationDate));

      window.localStorage.setItem(this.PROFILE, JSON.stringify({ user }));

      this.loadProfile();

      return Promise.resolve();
    } catch (error) {
      alert("Server error has occured", error);

      return Promise.reject();
    }
  }

  @action.bound
  logout() {
    window.localStorage.removeItem(this.PROFILE);
    this.user = null;
    this.ready = false;
  }
}

export default new Auth();
