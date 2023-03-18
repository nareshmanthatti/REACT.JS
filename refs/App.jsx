import React, { Component } from 'react'
import { createRef } from 'react'

export default class App extends Component {
  constructor()
  {
    super()
    this.state={name:"QSPIDER"}
    this.spanRef=createRef()
    this.btnRef=createRef()
  }
  
  render() {
    return (
      <div>
        <span ref={this.spanRef}>{this.state.name}</span>
        <br />
        <button ref={this.btnRef} onClick={()=>{
          this.setState({name:"JSPIDER"})
          this.spanRef.current.style.color="red"
          this.spanRef.current.style.backgroundColor="aqua"
          this.spanRef.current.style.padding="20px"
          this.spanRef.current.style.margin=" 350px"
          this.spanRef.current.style.alignIteam="center"
          this.btnRef.current.style.margin="30px 370px"
          this.btnRef.current.style.padding="3px"
          this.btnRef.current.style.backgroundColor="grey"
          this.btnRef.current.style.borderRadius="25%"
          this.btnRef.current.style.color="aqua"

        }}>
   CHANGE
        </button>
      </div>
    )
  }
}
