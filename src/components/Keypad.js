// Code Keypad Component Here
import React, { Component } from 'react';

class Keypad extends Component {

  HandleKeyUp = (e) => {
    console.log('Entering password...')
  }
  render () {
    return (
      <input onKeyUp={this.HandleKeyUp} type="password" />
    )
  }
}
export default Keypad