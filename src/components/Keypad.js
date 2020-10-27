import React from 'react'

export default class Keypad extends React.Component {

    keyUpHandler = (e) => {
        console.log('Entering password...')
    }

    render(){
        return(
            <input 
                onKeyUp={this.keyUpHandler}
                type="password" 
            />
        )
    }
}