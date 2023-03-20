import React from 'react'
import { useState  } from 'react'
import IMG from "./eye.png"

const App = () => {
  let[photo,setphoto]=useState(IMG)
  let [password,setpassword]=useState(true)

  let handelchange=()=>{
    if(password==true)
    {
      setpassword(false)
    }
    else{
      setpassword(true)
    }
  }
  return (
    <div>
      <input type={password?"text":"password"} />
    <img src={photo} alt="" height="20px" width="20px" style={{position:"relative",top:"5px",right:"25px"}}  onClick={handelchange}/>
    </div>
  )
}

export default App