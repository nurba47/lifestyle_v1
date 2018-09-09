import React from 'react';
import './login.css'
import RegisterForm from '../components/registration_form';

class RegisterScene extends React.Component {
    
    render() {
        return(
            <div style={{ backgroundColor: '#fff', padding: '50px 25px' }}>
                <RegisterForm/>
            </div>
       )
    }

    
}

export default RegisterScene