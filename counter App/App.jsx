import React, { Component } from 'react'
import "./global.css"

export default class App extends Component {

    constructor(){
        super()
        this.state={
           count:0
        }
    }

     handelIncrement=()=>{
        this.setState({count : this.state.count+1})
    }

    handelDecrement=()=>{
        this.setState({count:this.state.count-1})
    }

    handelReset=()=>{
        this.setState({count:0})
    }
  render() {
    return (
        <div className='mainBlock'>
       <h1>{this.state.count}</h1>
      <div className='buttonBlock'>
        <button onClick={this.handelIncrement}>+ INCREMENT</button>
        <button onClick={this.handelDecrement}>- DECREMENT</button>
        <button onClick={this.handelReset}>RESET</button>
      </div>
      </div>
      
    )
  }
}

