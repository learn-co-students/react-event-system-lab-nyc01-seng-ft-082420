// Code EyesOnMe Component Here
import React from 'react';

export default function EyesOnMe(props) {
    return (
        <button onFocus={e=>console.log("Good!")} onBlur={e=>console.log('Hey! Eyes on me!')}>Button</button>
    )
}