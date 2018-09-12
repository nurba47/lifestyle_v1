import React from "react";
import avatar from "../images/user.png";
import { Redirect } from "react-router";
import { inject, observer } from "mobx-react";
import Tree from "../components/Tree";
import { Row, Col } from "react-bootstrap";
import RewardsTable from "../components/RewardsTable";
import RewardsTableAdmin from "../components/RewardsTableAdmin";

@inject("authCtrl", "profileCtrl")
@observer
class Profile extends React.Component {
  componentDidMount() {
    this.props.profileCtrl.load();
  }

  componentWillUnmount() {
    this.props.profileCtrl.reset();
  }

  render() {
    let { user } = this.props.authCtrl;
    if (!user) {
      return <Redirect to="/login" />;
    }

    let { referrals, onReferralsChange } = this.props.profileCtrl;
    // if (!ready) return null;

    return (
      <div className="card" style={{ padding: "20px 15px" }}>
        <Row>
          <Col md={6}>
            <img
              className="card-img-top"
              style={{ marginLeft: "20px", width: "100px" }}
              src={avatar}
              alt=""
            />

            <h5 className="card-title">Пользователь: {user.email}</h5>
            <h5 className="card-text">Реферальный код: {user.referralCode}</h5>
            <h5 className="card-text">Дата регистрации: {user.registrationDate}</h5>
            <select className="option">
              <option>100 - Льгота</option>
              <option>250 - Льгота</option>
              <option>400 - Льгота</option>
            </select>
            {user.isAdmin && <RewardsTableAdmin />}
            {!user.isAdmin && <RewardsTable />}
          </Col>
          <Col md={6}>
            {referrals && <Tree data={referrals} onChange={onReferralsChange} />}
          </Col>
        </Row>
      </div>
    );
  }
}

export default Profile;
