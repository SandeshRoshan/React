import React, { Component } from 'react'

export class Person extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
  render() {
    return (
      <div>
        <h1>
            Name: {this.props.name}
            <br />
            Age: {this.props.age}
        </h1>
      </div>
    )
  }
}

export default Person