import React from 'react'

const App = () => {
  return (
    <form action="">
      <label htmlFor="username">USERNAME</label> <br />
      <input type="text" name="" id="username" /><br />
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

export default App