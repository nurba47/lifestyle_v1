import React from "react";
import "./login.css";
import LoginForm from "../components/login_form";
import { inject } from "mobx-react";
import { Redirect } from "react-router-dom";

@inject("authCtrl")
class LoginScene extends React.Component {
  render() {
    let { profile } = this.props.authCtrl;
    if (profile) {
      return <Redirect to="/profile" />;
    }
    
    return (
      <div style={{ backgroundColor: "#fff", padding: "50px 25px" }}>
        <LoginForm />
      </div>
    );
  }
}

export default LoginScene;
