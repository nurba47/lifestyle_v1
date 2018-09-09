import React from 'react'
import { observable } from 'mobx';
import avatar from '../images/user.png'
import {Redirect} from 'react-router'

class Profile extends React.Component {

    @observable 
    profile = JSON.parse(window.localStorage.getItem('profile')) || ''

    render() {

        if(window.localStorage.profile){
            return <Redirect to="/login" />
        }

        return(
          <div>
              <div className="card" style={{ padding: '20px 15px' }}>
                <img className="card-img-top" style={{ marginLeft: "20px", width: "100px" }} src={avatar} alt=""/>
                <div className="card-body">
                    <h5 className="card-title">Пользователь: {this.profile ? this.profile.user.email : 'User'}</h5>
                    <h5 className="card-text">Реферальный код: {this.profile ? this.profile.user.referralCode : 0}</h5>
                </div>
                </div>
          </div>
        )
    }

}  



export default Profile