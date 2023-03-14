import React from 'react'

const Student = (props) => {
    let data=props.data
  return (
    <div>
        <table border="2px" style={{textAlign:"center",fontWeight:"bolder"}}>
            <tr>
                <td>STUDENT NAME</td>
                <td>GENDER</td>
                <td>CLASS</td>
                <td>SECTION</td>
                <td>ADDRESS</td>
                <td>PHONE NUMBER</td>
                <td>PHOTO</td>
            </tr>
            {data.map((x)=>{
                return(
                    <tr>
                        <td>{x.studentName}</td>
                        <td>{x.gender}</td>
                        <td>{x.class}</td>
                        <td>{x.section}</td>
                        <td>{x.address}</td>
                        <td><ol>
                            {x.phoneNumber.map((x)=>{
                                return <li>{x}</li>
                            })}</ol></td>
                        <td><img src={x.photo} alt="" style={{height:"100px" , width:"100px"}} /></td>
                    </tr>

                )
            })}

        </table>
    </div>
  )
}

export default Student