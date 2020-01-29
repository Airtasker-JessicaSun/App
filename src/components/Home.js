import React from "react"
import {Link} from 'react-router-dom'

import './Application.css'
import background from '../img/background.jpg'

class Home extends React.Component {
    render() {
        return(
            <div>
                <div className ="landingPage">
                    <div className="background-img">
                        <img src={background} alt="community-background"></img>
                    </div>
                    <p>Better Manage Your Users</p>
                    <br></br>
                    <Link to="/login">
                        <button href="/login">Enter</button>
                    </Link>
                    <br></br>
                </div>
            </div>
        )
    }
}

export default Home