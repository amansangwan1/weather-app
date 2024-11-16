import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Weather from './components/Weather'

export default class App extends Component {
  constructor(){
    super()
    this.state={
      place:"haryana"
    }
  }

  handlePlace=(element)=>{
    this.setState({place:element})
  }

  render() {
    return (
      <div>
        <Navbar searchPlace={this.handlePlace}/>
        <Weather place={this.state.place}/>
      </div>
    )
  }
}

