import React, { Component } from 'react'
import {DataContext} from './context'
import uuid from 'uuid'

import './Application.css'

class Tasks extends Component {

    constructor(props) {
        super(props)
        this.state = {
            pathname: props["location"].pathname
        }
    }

    static contextType = DataContext

    render() {
        let {retrieve, tasks, getSlug, removeUnderCase} = this.context
        let slug = getSlug(this.state.pathname, tasks)
        let task = retrieve(slug, tasks)
        return(
            <div className="tasks">
                <h1>Task Information</h1>
                {Object.keys(task).map(el => {
                    if (task[el]) {
                        return (<li key={uuid()}>{removeUnderCase(el)}: {task[el]}</li>)
                    }
                })}
            </div>
        )
    }
}

export default Tasks