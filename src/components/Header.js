import React, {Component} from "react"
import { withRouter } from "react-router-dom";

import './Application.css'
import {DataContext} from './context'
import ToggleButton from './SideBar/ToggleButton'
import Backdrop from './Backdrop/Backdrop'
import SideBar from './SideBar/SideBar'
import logo from '../img/airtasker-logo.png'


class LogInHeader extends Component {
    render() {
        return(
            <header className="navbar">
                <div className="navbar-top"></div>
                <nav className="navbar-navigation">
                    <div className="navbar-toggle-button">
                        <ToggleButton loggedIn={true} click={this.props.clickHandler}/>
                    </div>
                    <div className="navbar-logo">
                        <a href="/"><img src={logo} alt="airtasker-logo"></img></a>
                    </div>
                    <div className="spacer-right"></div>
                    <div className="navbar-items">
                        <ul>
                            <li><a href="/activity_feed">Activity</a></li>
                            <li><a href="/users">Users</a></li>
                            <li><a href="/tasks">Tasks</a></li>
                            <li><a href="/settings">Settings</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}

class OtherHeader extends Component {
    render() {
        return(
            <header className="navbar">
                <div className="navbar-top"></div>
                <nav className="navbar-navigation">
                    <div className="navbar-toggle-button">
                        <ToggleButton loggedIn={false} />
                    </div>
                    <div className="navbar-logo">
                        <a href="/"><img src={logo} alt="airtasker-logo"></img></a>
                    </div>                    
                </nav>
            </header>
        )
    }
}

class Header extends Component {
    static contextType = DataContext
    constructor(props) {
        super(props)
        this.state = {
            sideBarOpen: false
        }
    }
  
    toggleClickHandler = () => {
      this.setState(prevState => {
        return {sideBarOpen: !prevState.sideBarOpen}
      });
    }

    backdropClickHandler = () => {
        this.setState({sideBarOpen: false})
    }

    render() {

        let path  = this.props.location.pathname.slice(1)
        let backdrop
        if (this.state.sideBarOpen) {
          backdrop = <Backdrop click={this.backdropClickHandler}/>
        }

        return (
            (path === "" || path === "login") ? 
            <OtherHeader /> : 
            (<div id="header">
                <LogInHeader clickHandler={this.toggleClickHandler}/>
                <SideBar show={this.state.sideBarOpen}/>
                {backdrop}
            </div>)
        )
    }
}
export default withRouter(Header);
