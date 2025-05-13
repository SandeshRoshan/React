import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name:null,
        country:null
      }
    }

    // nameChangeHandler = (event) => {
    //     console.log('Name ',event.target.value)
    // }

    // changeHandler = (event) =>{
    //     console.log('Selectbox ',event.target.value)
    // }


    submitHandler = (event) =>{
        event.preventDefault()
        console.log(this.state)
        const name = event.target.name.value;
        const country = event.target.country.value;
        this.setState({name,country},() =>{
            console.log(this.state)
            event.target.name.value = ''
            event.target.country.value = ''
        
        })
    }

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
            <label htmlFor="name">Name </label>
            <input autoComplete='true' type="text" name="name" id="name" /* onKeyUp={this.nameChangeHandler}*/ /><br /><br />
            <label htmlFor="country">Country  </label>
            <select autoComplete='true' name='country' id='country' /* onChange={this.changeHandler}*/ >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
            <br /><br />

            <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default Form