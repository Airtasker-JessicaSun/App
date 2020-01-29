import React from 'react'
import {Link} from 'react-router-dom'

import './Application.css'
import {DataContext} from './context'
import login from '../img/login.jpg'

class LogIn extends React.Component {
    static contextType = DataContext
    render() {
        const {setLoggedIn} = this.context
        return(
            <div className="login">
                <div className="left-grid">
                    <h1>Welcome Back</h1>
                    <div className="login-img">
                        <img src={login} alt="avatar"></img>
                    </div>
                </div>
                <div className="spacer">
                </div>
                <div className="login-form">
                    <form noValidate>
                        <div className="username">
                            <label htmlFor="userName">User Name</label>
                            <input 
                                    type="text" 
                                    placeholder="User Name"
                                    name="userName" 
                                    noValidate
                                />
                        </div>
                        <div className="password-login">
                        <label htmlFor="password">Password</label>
                            <input 
                                    type="password" 
                                    placeholder="Password"
                                    name="password" 
                                    noValidate
                                />
                        </div>
                    </form>
                <div className="signin">
                    <Link to="/activity_feed">
                        <button href="/activity_feed" onClick={setLoggedIn}>Sign In</button>
                    </Link>
                </div>
                </div>
                
            </div>
        )
    }
}

export default LogIn