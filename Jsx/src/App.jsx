import Person from "./Components/Person.jsx";

// import Man from "./Components/Man.jsx"; //Unammed Export

import {Man} from "./Components/Man.jsx"; //Named Export

import './App.css';

function App() {

  return (
    <>
      <h1>Function Based Components</h1>
      <Person/>
      <Man/>
    </>
  )
}

export default App
