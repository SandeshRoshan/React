import Person from "./Components/Person.jsx";
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

