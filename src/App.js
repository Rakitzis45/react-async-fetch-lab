import React from 'react'

export default class App extends React.Component {
    constructor(){
        super()
        this.state = {

        }
    }
    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
    }

    render(){
        return <h1>Im Here</h1>
    }
}