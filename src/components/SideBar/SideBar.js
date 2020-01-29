import React from 'react'

import './SideBar.css'

class SideBar extends React.Component {
    render() {

        let sideClasses = 'sidebar'

        if (this.props.show) {
            sideClasses = 'sidebar open'
        }

        return(
            <nav className={sideClasses}>
                <ul>
                    <li><a href="/activity-feed">Activity</a></li>
                    <li><a href="/users">Users</a></li>
                    <li><a href="/tasks">Tasks</a></li>
                    <li><a href="/settings">Settings</a></li>
                </ul>
            </nav>
        )
    }
}

export default SideBar