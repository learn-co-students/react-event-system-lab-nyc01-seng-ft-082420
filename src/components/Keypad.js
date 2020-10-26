import  React from 'react'


class Keypad extends React.Component{
    
    keyUp = ()=>{
        console.log("Entering password...")
    }
    render(){
        return(
            <input onClick={this.keyUp} type="password" />
        )

    }
}

export default Keypad