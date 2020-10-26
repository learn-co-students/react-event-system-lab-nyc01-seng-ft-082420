// Code Keypad Component Here
import React from 'react'

class Keypad extends React.Component {

  enterPasswordEvent = () => {
    console.log('Entering password...')
  }
  
  render () {
    return (
      <div>
        <input 
          type="password" 
          onKeyUp={this.enterPasswordEvent}
        />
      </div>
    ) 
  }
}

export default Keypad;