import React ,{Component} from "react";

class App extends Component
{
state={
  userName:"M naresh",
  password:"1234"
}
  render(){
    console.log(this);
    return(
<>
     <h1>{this.state.userName}</h1>
     <h2>{this.state.password}</h2>
</>
    )
  }
}

export default App