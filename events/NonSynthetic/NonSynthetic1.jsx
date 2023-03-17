import React, { Component } from 'react'

export default class NonSynthetic1 extends Component {
  constructor(){
    super()
    this.state={
      username:" "
    }
  }

  componentDidMount(){
    let input=document.querySelector("input")
    input.addEventListener("keypress",(e)=>{
      this.setState({username:e.target.value})
    })
  }
  render() {
    return (
      <div>
           <input type="text"  />
        <h1>
               {this.state.username}
        </h1>
     </div>
    )
  }
}
