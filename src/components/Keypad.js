// Code Keypad Component Here
import React from 'react';

export default function Keypad(props) {
    return (
        <input onKeyUp={e => console.log("Entering password...")} type="password" />
    )
}