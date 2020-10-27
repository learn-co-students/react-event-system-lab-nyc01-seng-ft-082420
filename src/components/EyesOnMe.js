import React from 'react'

export default class EyesOnMe extends React.Component {

    focusHandler = (e) => {
        console.log("Good!")
    }

    handleBlur = (e) => {
        console.log("Hey! Eyes on me!")
    }

    render(){
        return(
            <button
                onFocus={this.focusHandler}
                onBlur={this.handleBlur}
            ></button>
        )
    }
}