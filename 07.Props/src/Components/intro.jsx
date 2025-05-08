//intro by class Component

import { Component } from "react";

class Intro extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <h3>
                <ol>
                    <li>React is a component based library which divides the UI into little reusable pieces</li>

                    <li>props help us to send data to components which need to communicate</li>

                    <li>Props is a special keyword in React which mean Properties and it is used to passing data from parent to child component</li>

                    <li>child cant change data of props</li>
                </ol>
                </h3>
            </div>
        );
    }
}

export default Intro;