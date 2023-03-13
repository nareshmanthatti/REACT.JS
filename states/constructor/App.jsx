import React ,{Component} from "react";

class App extends Component
{
constructor()
{
  super()
  this.state={userName:"naresh"}
}

  render(){
    console.log(this);
    return(
<>
     <h1>{this.state.userName}</h1>
</>
    )
  }
}

export default App