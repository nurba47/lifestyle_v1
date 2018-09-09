import React from 'react';
import './login.css'
import LoginForm from '../components/login_form';

class LoginScene extends React.Component {
    
    render() {
        return(
            <div style={{ backgroundColor: '#fff', padding: '50px 25px' }}>
                <LoginForm/>
            </div>
       )
    }

    
}

export default LoginScene