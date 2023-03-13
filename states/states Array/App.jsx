import React ,{Component} from "react";

class App extends Component
{
state={
  subject:"reactjs",
  skills:["html","css","js"]
}

  render(){
    console.log(this);
    return(
<>
    <h1>{this.state.subject}</h1>
    <ol>
      {this.state.skills.map((x)=>{
        return <li>{x}</li>
      })}
    </ol>
</>
    )
  }
}

export default App