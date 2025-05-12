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
        ]
    }
  }
  render() {
    /* Array Map Method - Automaticaly handling data */

    let person ;
    person = this.state.persons.map((p,index)=>{
      return <Person key={index} id={index} name={p.name} age={p.age} />
    })

    console.log(person)
    return (
      <div>
        {/* Mannually rendring data */}

        {/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[3].name} age={this.state.persons[3].age} /> */}

        {/* Array Map Method - Automaticaly handling data */}
        {person}

      </div>
    )
  }
}


export default App
