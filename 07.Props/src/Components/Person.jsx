import React, { Component } from "react";

class Person extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    console.log(typeof props);

    // Store your code as text
    this.myCode = `import Person from "./Components/Person.jsx";
import Intro from "./Components/intro.jsx";

// import Man from "./Components/Man.jsx"; //Unammed Export

import {Man} from "./Components/Man.jsx"; //Named Export

import './App.css';

function App() {

  return (
    <>
      <h1>What is Prop?</h1>
      <Intro></Intro>
      <h1>Demo</h1>
      <Person name="sr" age = '1882' />
      <Man salary= "110343" />
    </>
  )
}

export default App





import React,{Component} from "react";

class Person extends Component {
  constructor(props){
    super(props);
    console.log(props);
    console.log(typeof props);
  }

  render(){
    return (
      <div>
        <h3>Name: {this.props.name}</h3>
        <h3>Age: {this.props.age} years</h3>
      </div>
    );
  }
}

export default Person;
`;
  }

  render() {
    return (
      <div>
        <h3>Name: {this.props.name}</h3>
        <h3>Age: {this.props.age} years</h3>

        {/* Display your code as text */}
        <pre>
          <code>{this.myCode}</code>
        </pre>
      </div>
    );
  }
}

export default Person;
