import React from 'react'
import { observable, action } from 'mobx';
import {observer} from 'mobx-react'
import LoginForm from './login_form';

@observer
class Header extends React.Component {

    @observable
    isLoginFormOpen = false

    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                <div className="container">
                    <a className="navbar-brand" href="/"><i className="flaticon-pharmacy"/><span>AROMA</span>ECO</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="oi oi-menu"/> Menu
                    </button>

                    <div className="collapse navbar-collapse" id="ftco-nav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active"><a href="/" className="nav-link">Главная</a></li>
                            <li className="nav-item"><a href="/about_products" className="nav-link">О продукции</a></li>
                            <li className="nav-item"><a href="/documents" className="nav-link" >Документы</a></li>
                            <li className="nav-item"><a href="/marketing" className="nav-link">Маркетинг план</a></li>
                            <li className="nav-item"><a href="/about" className="nav-link">О проекте</a></li>
                            <li className="nav-item cta"><a href="!#" className="nav-link" onClick={this.onLoginFormShow} data-toggle="modal" data-target="#login_form"><span>Личный Кабинет</span></a></li>
                        </ul>
                    </div>
                </div>
                {this.isLoginFormOpen && <LoginForm onClose={this.onLoginFormShow} />}
            </nav>
        )
    }

    onLoginFormShow = action(() => {
        this.isLoginFormOpen = !this.isLoginFormOpen
    })

}  



export default Header