import React, { Component } from 'react'
import {DataContext} from './context'
import uuid from 'uuid'

import './Application.css'

class Users extends Component {

    constructor(props) {
        super(props)
        this.state = {
            pathname: props["location"].pathname
        }
    }

    static contextType = DataContext

    render() {
        let {retrieve, users, getSlug, removeUnderCase} = this.context
        let slug = getSlug(this.state.pathname, users)
        let user = retrieve(slug, users)
        return(
            <div className="users">
                <h1>User Information</h1>
                {Object.keys(user).map(el => {
                    if (user[el] && el !== "avatar") {
                        return (<li key={uuid()}>{removeUnderCase(el)}: {user[el]}</li>)
                    }
                })}
            </div>
        )
    }
}

export default Users