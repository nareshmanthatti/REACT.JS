import React from "react";
import Course from './props Drilling/Course';

const App=()=>{
    return(
        <div>
        <Course courseDetails={{
            courseName:"java full stack",
            courseAvail: false,
            courseDuration:"2 months"
        }} />
        </div>
    )
}
export default  App