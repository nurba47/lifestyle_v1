import React from 'react';
import './login.css'
import { LOGIN } from '../pathes';

class LoginForm extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }

        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.onFormSubmit = this.onFormSubmit.bind(this)
    }
    

    render() {
        return(
            <div className="container">
                <form className="login_form">
                <button type="button" className="close close_btn" onClick={this.props.onClose} aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                    <div className="form-group" style={{ width: '500px', margin: '0 auto', padding: "15px 0" }}>
                        <label htmlFor="email">Email</label>
                        <input type="email" 
                            className="form-control"
                            style={{ borderRadius: '10px' }}
                            name="email"
                            id="email" 
                            placeholder="введите email"
                            value={this.state.email} 
                            onChange={e => this.handleEmailChange(e)}/>
                    </div>
                    <div className="form-group align-self-center" style={{ width: '500px',margin: '0 auto', padding: "15px 0" }}>
                        <label htmlFor="password">Пароль</label>
                        <input type="password" 
                            style={{ borderRadius: '10px' }}
                            className="form-control" 
                            id="password" 
                            name="password"
                            placeholder="пароль"
                            value={this.state.password} 
                            onChange={e => this.handlePasswordChange(e)}/>
                    </div>
                    <div style={{width: '500px', margin: '0 auto', padding: "15px 0" }}>
                        <button type="button" className="btn btn-primary" style={{ borderRadius: '8px' }}  onClick={this.onFormSubmit}>Войти</button>
                    </div>
            </form>   
            </div>
       )
    }

    handleEmailChange(e) {
        this.setState({email: e.target.value});
    }
    handlePasswordChange(e) {
        this.setState({password: e.target.value});
    }

    onFormSubmit = async(event) => {
        event.preventDefault()
        
        const rawResponse = await fetch(LOGIN, {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({user: this.state})
        });
        const content = await rawResponse.json();
        
        console.log(content);
        
    }
}

export default LoginForm