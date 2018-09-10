import { observable, action } from "mobx";
import {register, login} from "../api/auth"

class Auth {
  PROFILE = "profile";

  @observable profile;
  @observable ready;

  loadProfile() {
    let profile = window.localStorage.getItem(this.PROFILE);
    profile = JSON.parse(profile);
    
    if (profile && profile.user) this.profile = profile;
    else this.profile = null;

    this.ready = true;
  }

  @action.bound
  async login(user) {
    try {
      const response = await login(user);
      if (!response.ok) {
        return Promise.reject();
      }

      let data = await response.json();
      window.localStorage.setItem(this.PROFILE, JSON.stringify(data));

      this.loadProfile();

      return Promise.resolve();
    } catch (error) {
      alert("Server error has occured", error);

      return Promise.reject();
    }
  }

  @action.bound
  async register(user) {
    try {
      const response = await register(user)
      if (!response.ok) {
        return Promise.reject();
      }

      let data = await response.json();
      window.localStorage.setItem(this.PROFILE, JSON.stringify(data));

      this.loadProfile();

      return Promise.resolve();
    } catch (error) {
      alert("Server error has occured", error);

      return Promise.reject(error);
    }
  }

  @action.bound
  logout() {
    window.localStorage.removeItem(this.PROFILE);
    this.profile = null;
  }
}

export default new Auth();
