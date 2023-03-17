import React from 'react'
import {ToastContainer,toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const App = () => {
  let handelSubmit1=()=>{
    toast.success("successfull",{position:toast.POSITION.TOP_CENTER})
    console.log(handelSubmit1);
  }
  const handelSubmit2=()=>{
    toast.error("error",{position:toast.POSITION.TOP_RIGHT})
  } 

  const handelSubmit3=()=>{
    toast.warning("warning",{position:toast.POSITION.TOP_LEFT})
  }
  
  const handelSubmit4=()=>{
    toast.loading("loading",{position:toast.POSITION.BOTTOM_CENTER})
  }

  const handelSubmit5=()=>{
    toast.info("information",{position:toast.POSITION.BOTTOM_RIGHT})
  }
  return (
    <div><ToastContainer/>
    <button onClick={handelSubmit1}>CHANGE1</button>
    <button onClick={handelSubmit2}>CHANGE2</button>
    <button onClick={handelSubmit3}>CHANGE3</button>
    <button onClick={handelSubmit4}>CHANGE4</button>
    <button onClick={handelSubmit5}>CHANGE5</button>
    </div>
  )
}

export default App