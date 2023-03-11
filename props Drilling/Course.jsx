import React from 'react'

const Course = (props) => {
    
    if(props.courseDetails.courseAvail == true)
    {
        return(
            <>
            <h1>{props.courseDetails.courseName}</h1>
            <h2>{props.courseDetails.courseDuration}</h2>
            <button style={{color:"red"}}>AVIALABLE</button>
            </>
        )
    }
    else
    {
        return(
            <>
            <h1>{props.courseDetails.courseName}</h1>
            <h2>{props.courseDetails.courseDuration}</h2>
            <button style={{color:"green"}}> NOT AVIALABLE</button>
            </>
        )
    }

}

export default Course
