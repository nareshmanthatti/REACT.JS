import React from "react";
import "./student details/global.css"
import JSON from "./student details/student.json";
import Studentdetails from './student details/StudentDetails';



const App=()=>{
    return(
        <div>
           <Studentdetails data={JSON}/>
        </div>
    )
}
export default  App