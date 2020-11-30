// Code EyesOnMe Component Here
import React, { Component } from 'react';

class EyesOnMe extends Component {
    blurMessage = () => {
        console.log("Hey! Eyes on me!")
    }
    focusMessage = () => {
        console.log("Good!")
    }
    render(){
        return(
            <div>
                <button onFocus={this.focusMessage} onBlur={this.blurMessage}>Button</button>
            </div>
        )
    }
}

export default EyesOnMe;