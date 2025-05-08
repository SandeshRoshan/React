import Person from "./Components/Person.jsx";
import Intro from "./Components/intro.jsx";

// import Man from "./Components/Man.jsx"; //Unammed Export

import {Man} from "./Components/Man.jsx"; //Named Export

import './App.css';

function App() {

  return (
    <>
      <h1>Introduction to jsx</h1>
      <Intro></Intro>
      <Person/>
      <Man/>
    </>
  )
}

export default App
