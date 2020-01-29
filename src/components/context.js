import React, { Component } from 'react'
import data from '../activity_feed.json'

const DataContext = React.createContext()

class DataProvider extends Component {
    state = {
        users: [],
        tasks: [],
        location: [],
        activity_feed: [],
        loading: true,            
        loggedIn: false,
    }

    setLoggedIn = () => {
        this.setState({loggedIn: true})
    }

    componentDidMount() {

        let formattedData = this.formatData()
        this.setState({
            tasks: formattedData[0], 
            location: formattedData[1], 
            users: formattedData[2],
            activity_feed: formattedData[3],
            loading: false,
        })
    }

    formatData() {
        let formattedData = []
        for (let category in data) {
            console.log(category)
            var temp = data[category].map(el => {
                if (category === "profiles") {
                    el["avatar"] = JSON.stringify(el["avatar"])
                }
                let element = {...el}
                return element
            })
            console.log(temp)
            formattedData.push(temp)
        }
       return formattedData
    }

    format(target) {
        let str = target.template
        str = str.replace(/{.*?}/g, "")
        return str
    }

    find(id, targets) {
        for (let target of targets) {
            if (target["id"] === id) {
                return target
            }
        }       
    }

    getSlug(pathName) {
        return pathName.substring(pathName.lastIndexOf('/') + 1)
    }

    removeUnderCase(name) {
        let frags = name.split('_');
        for (let i=0; i<frags.length; i++) {
          frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
        }
        return frags.join(' ');
    }

    retrieve(slug, targets) {
        for (let target of targets) {
            if (target["slug"] === slug) {
                return target
            }
        }  
        return {}
    }

    render() {
        return (
        <DataContext.Provider value={{...this.state,
            setLoggedIn:this.setLoggedIn, 
            retrieve: this.retrieve,
            find:this.find,
            format:this.format,
            getSlug:this.getSlug,
            removeUnderCase:this.removeUnderCase}} >
            {this.props.children}
        </DataContext.Provider>)
    }
}

const DataConsumer = DataContext.Consumer

export {DataProvider, DataConsumer, DataContext}