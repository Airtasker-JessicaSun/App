import React, { Component } from 'react'
import { FaArrowLeft } from 'react-icons/fa';
import {DataContext} from './context'
import uuid from 'uuid'
import './Application.css'

class AllUsers extends Component {

    static contextType = DataContext

    render() {
        let {users} = this.context
        return(
            <div className="all-users">
                <h1>All Users</h1>
                <div className="users-list">
                <ul>
                    {users.map(el => {
                        return(
                        <div className="user-list" key={uuid()}>
                            <li key={uuid()}>{el["first_name"]}</li>
                            <br></br>
                            <li key={uuid()}>User Id: {el["id"]}</li>
                        </div>
                        )
                    })}
                </ul>
                </div>
            </div>
        )
    }
}

export default AllUsers