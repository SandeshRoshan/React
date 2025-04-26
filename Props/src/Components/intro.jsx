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
                    <li>JSX is extention to javascript language syntax</li>
                    <li>JSX = javascript + xml</li>
                    <li>Jsx also contain all the html like attributes</li>
                </ol>
                </h3>
            </div>
        );
    }
}

export default Intro;