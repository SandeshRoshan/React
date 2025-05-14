import './App.css';
import React, { Component } from 'react';
import Greet from './components/Greet.jsx';
import Register from './components/Register.jsx';
import {v4 as uuidv4} from 'uuid';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-KgxthxBBSSwACs2BLUNEBKlWeZRJ_lU",
  authDomain: "ws-suevey.firebaseapp.com",
  databaseURL: "https://ws-suevey-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ws-suevey",
  storageBucket: "ws-suevey.firebasestorage.app",
  messagingSenderId: "195960283408",
  appId: "1:195960283408:web:6ca10acd164d21c251c595"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app); // Get database instance once


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
        id:uuidv4(), 
        isRegister:false,
        name: null,
        email: null,
        showPassword: false, 
    }
  }

  
  registrationHandler = async (event) => {
    event.preventDefault(); 
    const name = event.target.name.value; 
    const email = event.target.email.value; 
    const password = event.target.password.value;
    const userId = this.state.id;

    try {
      await set(ref(database, 'users/' + userId), {
        username: name,
        email: email,
        password: password,
      });

      console.log("Data saved successfully!");
      this.setState({ name, email,password,isRegister: true });

    } catch (error) {
      console.error("The write failed:", error);
    }
    
  }

  passwordHandler = () =>{
    this.setState({showPassword: !this.state.showPassword})
  }

  render() {
    return (
      <div>
        {this.state.isRegister
          ? <Greet name={this.state.name} email={this.state.email} />
          : <Register
              submit={this.registrationHandler}
              showPassword={this.state.showPassword}
              click={this.passwordHandler}
            />
        }
      </div>
    )
  }
}

export default App;
