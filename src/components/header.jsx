import React from "react";
import { action } from "mobx";
import { observer, inject } from "mobx-react";
import {NavLink} from "react-router-dom"

@inject("authCtrl") @observer
class Header extends React.Component {
  
  render() {
    let { profile, logout } = this.props.authCtrl;
    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
        id="ftco-navbar"
      >
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <i className="flaticon-pharmacy" />
            <span>AROMA</span>
            ECO
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="oi oi-menu" /> Menu
          </button>

          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <NavLink to="/" className="nav-link">
                  Главная
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about_products" className="nav-link">
                  О продукции
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/documents" className="nav-link">
                  Документы
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/marketing" className="nav-link">
                  Маркетинг план
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">
                  О проекте
                </NavLink>
              </li>
              <li className="nav-item cta">
                <NavLink to="/login" className="nav-link">
                  <span>Личный Кабинет</span>
                </NavLink>
              </li>
              {profile && (
                <li className="nav-item cta">
                  <NavLink to="/" className="nav-link" onClick={logout}>
                    <span>Выйти</span>
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    );
  }

  onLoginFormShow = action(() => {
    this.isLoginFormOpen = !this.isLoginFormOpen;
  });
}

export default Header;
