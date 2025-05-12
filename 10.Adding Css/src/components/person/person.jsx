import React, { Component } from 'react'
import personStyle from './person.module.css'

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

    console.log(personStyle)
    return (
      <div className={personStyle.personBox}>
        <h1 style={styl}>
            Name: {this.props.name}
        </h1>
        {/* Inline type2 css is used here */} 

         <h2 style={{color:'blue'}}>Age: {this.props.age}</h2>

        {/*Module css  */}
        <h3 className='Box'>This cant be clicked</h3>
      </div>
    )
  }
}

export default Person