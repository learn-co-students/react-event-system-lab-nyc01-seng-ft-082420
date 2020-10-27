import React from 'react';

class Keypad extends React.Component{
  inputT = () => {
    console.log('Entering password...')
  }

  render(){
    return <input onKeyUp={this.inputT} type="password" />
  }
}

export default Keypad;
