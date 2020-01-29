import React, { Component } from 'react'
import uuid from 'uuid'
import {DataContext} from './context'
import './Application.css'

class AllTasks extends Component {

    static contextType = DataContext

    render() {
        let {tasks} = this.context
        console.log(tasks)
        return(
            <div className="all-tasks">
                <h1>All Tasks</h1>
                <div className="users-list">
                <ul>
                    {tasks.map(el => {
                        return(
                        <div className="user-list" key={uuid()}>
                            <li key={uuid()}>{el["name"]}</li>
                            <br></br>
                            <li key={uuid()}>Task Id: {el["id"]}</li>
                        </div>
                        )
                    })}
                </ul>
                </div>
                
                <ul></ul>
            </div>
        )
    }
}

export default AllTasks