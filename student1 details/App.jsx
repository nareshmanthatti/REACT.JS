import React, { Component } from 'react'
import Student from './student1 details/Student.jsx';
import JSON from "./student1 details/student.json"

export default class App extends Component {
    constructor(){
        super()
        this.state={
            json:JSON
        }
    }
  render() {

    return (
      <div>
        <Student data={this.state.json} />
      </div>
    )
  }
}
