import React, { Component } from 'react'


export default class GratefulLog extends Component {
    constructor(props) {
        super(props)

        this.state = {
            logs: []
        }
    }

    componentWillMount() {
        this.retrieveList()
    }

    renderList(logs) {
        return logs.map((log, index) => {
            return <li key={index}>{log.date}</li>
        })
    }


    retrieveList() {
         this.setState({
             logs: [{
                 date: '2019-01-21',
                 items: [
                     'Grateful for you',
                     'Grateful for Laura',
                     'Grateful for this app'
                 ]
             }]
         })
    }

    render() {
        return (
            <ul>
                {this.renderList(this.state.logs)}
            </ul>
        )
    }
}