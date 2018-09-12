import React from "react";
import { inject } from "mobx-react";
import { NavLink, withRouter } from "react-router-dom";

@withRouter @inject("authCtrl")
class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  render() {
    return (
      <div className="container-fluid">
        <form
          className="shadow p-3 mb-5 bg-white rounded"
          style={{ width: "600px", margin: "0 auto" }}
        >
          <div className="form-group" style={{ width: "100%", padding: "15px 20px" }}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              style={{ borderRadius: "10px" }}
              name="email"
              id="email"
              placeholder="введите email"
              value={this.state.email}
              onChange={e => this.handleEmailChange(e)}
            />
          </div>
          <div
            className="form-group align-self-center"
            style={{ width: "100%", padding: "15px 20px" }}
          >
            <label htmlFor="password">Пароль</label>
            <input
              type="password"
              style={{ borderRadius: "10px" }}
              className="form-control"
              id="password"
              name="password"
              placeholder="пароль"
              value={this.state.password}
              onChange={e => this.handlePasswordChange(e)}
            />
          </div>
          <div style={{ width: "100%", padding: "15px 20px" }}>
            <button
              type="button"
              className="btn btn-primary"
              style={{ borderRadius: "8px", marginRight: "15px" }}
              onClick={this.onFormSubmit}
            >
              Войти
            </button>
            <NavLink to="/registration" className="btn btn-primary" style={{ borderRadius: "8px" }}>
              Регистрация
            </NavLink>
          </div>
        </form>
      </div>
    );
  }

  handleEmailChange = e => {
    this.setState({ email: e.target.value });
  };

  handlePasswordChange = e => {
    this.setState({ password: e.target.value });
  };

  onFormSubmit = () => {
    this.props.authCtrl
      .auth(true, this.state)
      .then(() => this.props.history.replace("/"))
      .catch(error => console.log(error));
  };
}

export default LoginForm;
