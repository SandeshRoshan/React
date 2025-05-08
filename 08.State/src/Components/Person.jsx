import React,{Component} from "react";

class Person extends Component{
    constructor(props){
        super(props)
        this.props = props
        this.state = {
            name : "Sandesh",
            age :20,
        }
    }

    namechangeHandler(){
        console.log(this.state)
        this.setState({name:"Raman"})
    }

    render(){
        return(
            <div>
                <h1>
                    <i>Dear {this.state.name}, {this.state.age} years,
                        welcome to ws cube tech
                    </i>
                    <br />
                    <button onClick={this.namechangeHandler.bind(this)}>Click Me</button>
                </h1>
            </div>
        )
    }

}

export default Person