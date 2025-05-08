import './App.css'

import React, { Component } from 'react'
import Person from './Components/Person.jsx'
export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      DEMO:"TESTING",
    }

    this.buttonClickHandler = this.buttonClickHandler.bind(this)
  
  }

  //1. ARROW FUNCTION BASED EVENT BINDING
  // buttonClickHandler = () =>{
  //   console.log(this)
  //   console.log(this.props)
  // }

  //2. INLINE ARROW FUNCTION USED WITH NORMAL FUNCTION EVENT BINDING
  // buttonClickHandler() {
  //   console.log(this)
  //   console.log(this.state)
  // }

  //3.NORMAL FUNCTION USE INLINE BINDING
  buttonClickHandler() {
    console.log(this)
    console.log(this.state)
  }
  //4.NORMAL FUNCTION EVENT BINDING IN CONSTRUCTURE
  buttonClickHandler() {
    console.log(this)
    console.log(this.state)
  }



  render() {
    return (
      <div>
        <Person name="Jhon" age="11" />
        {/* 1.ARROW FUNCTION USE IN EVENT HANDLING */}
        {/* <button onClick={this.buttonClickHandler}>Click Me</button> */}

        {/* 2.INLINE ARROW FUNCTION USED WITH NORMAL FUNCTION */}
        {/* <button onClick={()=>this.buttonClickHandler()}>Click Me</button> */}

        {/* 3.NORMAL FUNCTION USE INLINE BINDING IN JSX */}
        {/* <button onClick={this.buttonClickHandler.bind(this)}>Click Me</button> */}

        {/*4.NORMAL FUNCTION EVENT BINDING IN CONSTRUCTURE  */}
        <button onClick={this.buttonClickHandler}>Click Me</button>

      </div>
    )
  }
}


export default App
