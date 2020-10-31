import React from 'react'

class Keypad extends React.Component {

    onKeyHandler() {
        console.log('Entering password...')
    }

    render() {
        return(
            <div>
               <h1>Keypad</h1> 
               <input type="password" onKeyUp={this.onKeyHandler}/>
            </div>
        )
    }
}

export default Keypad