import React, { Component } from 'react'

export default class Synthetic extends Component {
    constructor(){
        super()
        this.state={username:" "}
        
    }
  render() {
    return (
      <div>
<input type="text" onChange={(e)=>{
    this.setState({username:e.target.value})
}} />
<h1>{this.state.username}</h1>
      </div>
    )
  }
}
