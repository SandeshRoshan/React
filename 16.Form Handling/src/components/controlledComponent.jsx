import React, { Component } from 'react'

class controlledComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'rhrh'
      }
    }

    changeHandler = (event) =>{
        const name = event.target.name.value
        this.setState({name})
    }

  render() {
    return (
      <div>
        <form>
            <input autoComplete='true' type="text" name="name" id="name" value={this.state.name} onChange={this.changeHandler} />
        </form>
      </div>
    )
  }
}

export default controlledComponent