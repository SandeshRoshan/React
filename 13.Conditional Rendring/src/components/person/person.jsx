import React, { Component } from 'react'
import './person.css'
export class Person extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        
      }
    }
    
  render() {
    //Inline css
    const styl = {
      fontSize:'30px',
      color:'red'
    }

    return (
      <div className='personBox'>
        <h1 style={styl}>
            Name: {this.props.name} 
        </h1>
        {/* Inline type2 css is used here */} 

         <h2 style={{color:'blue'}}>Age: {this.props.age}</h2>

        <h3 className='Box'>{this.props.id}</h3>
      </div>
    )
  }
}

export default Person