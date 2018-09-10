import { observable, action } from "mobx";
import { LOGIN } from "../pathes";

class Auth {
  @observable profile;
  @observable ready;

  loadProfile() {
    let profile = window.localStorage.getItem("profile");
    this.profile = profile && profile != "undefined" ? profile : null;
    this.ready = true;
  }

  @action.bound
  async onFormSubmit(user) {
    const rawResponse = await fetch(LOGIN, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ user })
    })
      .then(data => data.json())
      .catch(error => alert("Server error has occured", error));
    debugger;
    const storage = window.localStorage;
    storage.setItem("profile", JSON.stringify(rawResponse));
  }
}

export default new Auth();
