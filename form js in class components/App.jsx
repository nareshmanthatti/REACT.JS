import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <form action="">
        <label htmlFor="username">USERNAME</label> <br />
        <input type="text" id='username' /><br />
        <label htmlFor="password">PASSWORD</label><br />
        <input type="password" id='password' /><br />
        <button onClick={(e)=>{
          e.preventDefault()
          let username=document.querySelector("#username").value
          let password=document.querySelector("#password").value
          console.log({username,password});
        }}>SUBMIT</button>
      </form>
    )
  }
}
