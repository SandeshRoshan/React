import './App.css'
import React, { Component } from 'react'
import Greet from './components/Greet.jsx';
import Register from './components/Register.jsx';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
        isRegister:false,
        name:null,
        email:null,
        password:null,
        showPassword:false,
    }
  }

  registrationHandler= (event) =>{
    const name = event.target.name.value
    const email = event.target.email.value
    const password = event.target.password.value
    this.setState({name,email,password, isRegister:true})
    event.preventDefault()

  }

  passwordHandler = () =>{
    // console.log(this.state)
    this.setState({showPassword: !this.state.showPassword}, () =>console.log(this.state))
  }

  render() {
    
    return (
      <div>
        {this.state.isRegister?<Greet name={this.state.name} email={this.state.email} />:<Register submit = {this.registrationHandler} showPassword = {this.state.showPassword} click={this.passwordHandler} />}
      </div>
    )
  }
}

export default App
