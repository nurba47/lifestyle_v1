import React from "react";
import avatar from "../images/user.png";
import { Redirect } from "react-router";
import { inject } from "mobx-react";

@inject("authCtrl", "profileCtrl")
class Profile extends React.Component {
  componentDidMount = () => {
    this.props.profileCtrl.load();
  };

  render() {
    let { profile } = this.props.authCtrl;
    if (!profile) {
      return <Redirect to="/login" />;
    }

    let { ready, referrals } = this.props.profileCtrl;
    if (!ready) return null;

    console.log("REFERRALS", referrals);
    
    return (
      <div>
        <div className="card" style={{ padding: "20px 15px" }}>
          <img
            className="card-img-top"
            style={{ marginLeft: "20px", width: "100px" }}
            src={avatar}
            alt=""
          />
          <div className="card-body">
            <h5 className="card-title">Пользователь: {profile ? profile.user.email : "User"}</h5>
            <h5 className="card-text">
              Реферальный код: {profile ? profile.user.referralCode : 0}
            </h5>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
