import React from 'react'

import logo from '../../img/airtasker-logo.png'
import './ToggleButton.css'

class ToggleButton extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const loggedIn = this.props.loggedIn
        if (loggedIn) {
            return(
                <button className="toggle-button" onClick={this.props.click}>
                    <div className="toggle-button-line"></div>
                    <div className="toggle-button-line"></div>
                    <div className="toggle-button-line"></div>
                </button>
            ) 
        } else {
            return (
                <div className="navbar-logo">
                    <a href="/"><img src={logo} alt="airtasker-logo"  style={{display:'block'}}></img></a>
                </div>   
            )
        }
    }
}

export default ToggleButton