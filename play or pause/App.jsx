import React, { useState ,createRef} from 'react'
import VIDEO from "./videoplayback.mp4"

const App = () => {
  let [play,setplay]=useState(VIDEO)

  let[loading,setloading]=useState(true)

  let videoRef=createRef()

  let playrpause=()=>{
if(loading==true)
{
  setloading(false)
  videoRef.current.play()
}else{
  setloading(true)
  videoRef.current.pause()
}
  }
  return (
    <div>
      <video src={play} onClick={playrpause} ref={videoRef} height="200px" width="300px"></video>
    </div>
  )
}

export default App