import React from 'react';
import { USERS } from '../pathes';

class RegisterForm extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            referralCode: ''
        }

        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleCodeChange = this.handleCodeChange.bind(this)

        this.onFormSubmit = this.onFormSubmit.bind(this)
    }
    

    render() {
        return(
            <div className="container">
                <form className="shadow p-3 mb-5 bg-white rounded" style={{ width: '600px', margin: '0 auto' }}>
                    <div className="form-group" style={{ width: '100%', padding: "15px 20px" }}>
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
                    <div className="form-group align-self-center" style={{ width: '100%', padding: "15px 20px" }}>
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
                    <div className="form-group align-self-center" style={{ width: '100%', padding: "15px 20px" }}>
                        <label htmlFor="referralCode">Реферальный код</label>
                        <input type="text" 
                            style={{ borderRadius: '10px' }}
                            className="form-control" 
                            id="referralCode" 
                            name="referralCode"
                            placeholder="реферальный код"
                            value={this.state.referralCode} 
                            onChange={e => this.handleCodeChange(e)}/>
                    </div>
                    <div style={{width: '100%', padding: "15px 20px" }}>
                        <button type="button" className="btn btn-primary" style={{ borderRadius: '8px', marginRight: '15px' }}  onClick={this.onFormSubmit}>Зарегистрироваться</button>
                        <a href="/login" className="btn btn-primary" style={{ borderRadius: '8px' }}>Авторизация</a>

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
    handleCodeChange(e) {
        this.setState({referralCode: e.target.value})
    }

    onFormSubmit = async(event) => {
        event.preventDefault()
        
        const rawResponse = await fetch(USERS, {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({user: this.state})
        }).catch(error => alert('Server error has occured', error))
        const content = await rawResponse.json();
        
        console.log(content);
        
    }
}

export default RegisterForm