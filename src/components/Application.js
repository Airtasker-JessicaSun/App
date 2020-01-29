import React, { Component } from 'react'
import Users from './Users'
import {Link} from 'react-router-dom'
import data from '../activity_feed.json'
import {DataContext} from './context'
import PropTypes from 'prop-types'
import './Application.css'
import uuid from "uuid";

class Application extends Component {

    static contextType = DataContext

    render() {
        // Get each data from each category
        let {users, tasks, location, activity_feed, loading, find, format} = this.context
        if (loading) {
            return <div>loading...</div>
        } else {
            return(
                <div className="application">
                    <h1>Activity Feed</h1>
                    {activity_feed.map(el => {
                        let str = format(el)
                        let user = find(el.profile_ids[0], users)
                        let task = find(el.task_id, tasks)
                        if (task === undefined) {
                            task = ""
                        } 
                        return(
                            <div key={uuid()} className="list-grid">
                                <li key={uuid()} className="list-item">
                                    <Link to={`/users/${user["slug"]}`} className="text-link">
                                        {user["abbreviated_name"]}
                                    </Link>
                                    {str.toUpperCase()}
                                    <Link className="text-link" to={{
                                        pathname: `/tasks/${task["slug"]}`,
                                        state: {
                                            taskId: task["id"]
                                        }
                                        }}>
                                    {task === "" ? "" : task["name"]}
                                    </Link>
                                </li>
                            </div>
                        )
                    })}
                </div>
            )
        }
    }
}

export default Application