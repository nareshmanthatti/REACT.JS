import React, { Component ,createRef } from 'react'

export default class App extends Component {
  constructor(){
    super()
    this.userRef=createRef()
    this.passRef=createRef()
   
  }

  handelchange=(e)=>{
       e.preventDefault()
    let username=this.userRef.current.value
    let password=this.passRef.current.value
    console.log({username,password});
  }
  render() {
    return (
      <form action="" onSubmit={this.handelchange}>
        <label htmlFor="username">USERNAME</label>
        <input type="text"  ref={this.userRef}/>
        <label htmlFor="password">PASSWORD</label>
        <input type="password" ref={this.passRef}/>
        <button>SUBMIT</button>
      </form>
    )
  }
}
