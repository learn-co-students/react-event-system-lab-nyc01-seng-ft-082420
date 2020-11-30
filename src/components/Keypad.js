// Code Keypad Component Here
import React, { Component } from 'react';

class Keypad extends Component {
    replyMessage = () => {
        return console.log("Entering password...")
    }
    render(){
        return(
            <div>
                <input onKeyUp={this.replyMessage} type="password" />
            </div>
        )
    }
}

export default Keypad;
