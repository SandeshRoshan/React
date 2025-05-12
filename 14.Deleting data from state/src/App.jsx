import './App.css'
import Person from './components/person/person.jsx'

import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       persons:[
          {id:0, name:"Ws cube tech", age:11},
          {id:1, name:'Sandesh Roshan', age:24},
          {id:2, name:'Bhagirath Giri', age:44},
          {id:3, name:'John', age:20},
          {id:4, name:'test', age:220},
        ],
    }
  }

  clickHandler = ()=>{
    this.setState({isShow:!this.state.isShow})
  }

  removeHandler(indexx){
    const persons = this.state.persons
    persons.splice(indexx, 1)
    this.setState({persons})
  }
  

  render() {
      let person = this.state.persons.map((p,index)=>{
      return <Person key={index} id={index} name={p.name} age={p.age} remove={() => this.removeHandler(index)} />
    })
    
    

    return (
      <div>
        {person}

      </div>
    )
  }
}


export default App
