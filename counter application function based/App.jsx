import React ,{useState}from 'react'
import "./global.css"

const App = () => {
  const [count, setCount] = useState(0);

  const onClicked=()=>{
    setCount(count+1)
  }

  const onClicked1=()=>{
    setCount(count-1)
  }

  const onClicked2=()=>{
    setCount(0)
  }
  return (
    <div className='mainBlock'>
<h1 >{count}</h1>
<div className='buttonBlock'>
  <button onClick={onClicked}>+Incremented</button>
  <button onClick={onClicked1}>-decremented</button>
  <button onClick={onClicked2}>reset</button>
</div>
    </div>
  )
}

export default App