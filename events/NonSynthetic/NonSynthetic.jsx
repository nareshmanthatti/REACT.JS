import React, { Component } from 'react'

export default class NonSynthetic extends Component {
  constructor(){
    super()
    this.state={username:"naresh"}
  }

  componentDidMount(){
    let btn=document.querySelector("button")
    btn.addEventListener("click",()=>{
      this.setState({username:this.state.username="mani"})
    })
  }
  render() {
    return (
      <div>
        <h1>{this.state.username}</h1>
        <button>change</button>
      </div>
    )
  }
}
