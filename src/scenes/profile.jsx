import React from "react";
import avatar from "../images/user.png";
import { Redirect } from "react-router";
import { inject, observer } from "mobx-react";
import Tree from "../components/Tree";
import { toJS } from "mobx";

@inject("authCtrl", "profileCtrl")
@observer
class Profile extends React.Component {
  componentDidMount = () => {
    let { user } = this.props.authCtrl;
    if (user) this.props.profileCtrl.load();
  };

  render() {
    let { user } = this.props.authCtrl;
    if (!user) {
      return <Redirect to="/login" />;
    }

    let { ready, referrals, onReferralsChange } = this.props.profileCtrl;
    if (!ready) return null;

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
            <h5 className="card-title">Пользователь: {user ? user.email : "User"}</h5>
            <h5 className="card-text">Реферальный код: {user ? user.referralCode : 0}</h5>
            <select className="option">
              <option>100 - Льгота</option>
              <option>250 - Льгота</option>
              <option>400 - Льгота</option>
            </select>
            <table border="1" cellPadding="8" cellSpacing="0">
              <caption>Список вознаграждений</caption>
              <tr>
                <th colSpan="5" bgcolor="#7fffd4" align="left">
                  Дата
                </th>
                <th>Поступления</th>
                <th>Снял</th>
              </tr>
              <tr onInput={1}>
                <td colSpan="5">10.10.2018</td>
                <td>44</td>
                <td>66</td>
              </tr>
              <tr>
                <td colSpan="5">10.10.2018</td>
                <td>45</td>
                <td>55</td>
              </tr>
              <tr>
                <td colSpan="5">10.10.2018</td>
                <td>33</td>
                <td>22</td>
              </tr>
              <tr>
                <td colSpan="5">10.10.2018</td>
                <td>44</td>
                <td>34</td>
              </tr>
            </table>
          </div>
        </div>
        <Tree data={toJS(referrals)} onChange={onReferralsChange} />
      </div>
    );
  }
}

export default Profile;
