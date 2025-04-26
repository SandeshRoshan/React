import React,{Component} from "react";

class Person extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <h3>Name: Sandesh</h3>
                <h3>Age: 11 years</h3>
            </div>
        );
    }
}

export default Person;