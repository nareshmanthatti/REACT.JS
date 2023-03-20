import React, { useState,createRef } from 'react'
import IMG from "./treee.jpg"
const App = () => {

  let[photo,setphoto]=useState(IMG)
  let[loading,setloading]=useState(true) 

  let imgRef=createRef()

  let handelchange=()=>{
    if(loading==false)
    {
      setloading(true)
      imgRef.current.style.border="2px solid red"
      imgRef.current.style.borderRadius="25%"
  
    }
    else{
      setloading(false)
      imgRef.current.style.border="none"
      imgRef.current.style.borderRadius="0"
  
    }
     }

  return (
    <div>
        <img src={photo} alt=""  ref={imgRef} height="200px" width="300px"/>
        <button onClick={handelchange}>{loading ? "ON":"OFF"}</button>
    </div>
  )
}

export default App