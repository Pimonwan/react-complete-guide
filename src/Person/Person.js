//No need to import Component because we not using class that use component
import React from 'react';

// React get all attributes by getting object name 'props'
const person = (props) => {
    // Want to show text "I'm a Person! and I am X years old!"
    // X is a random number
    // { javascript code } = will not just string

    // return <p> I'm a Person! and I am {Math.floor(Math.random() * 30)} years old!</p>

    // =========================================== //
    // get value from props
    // return <p> I'm a {props.name}! and I am {props.age} years old!</p>
    
    // =========================================== //
    // get value from props and children
    // if in return function has elements more than 1 then keep everything in ()
    return (
        <div>
            <p> I'm a {props.name}! and I am {props.age} years old!</p>
            <p>{props.children}</p>
        </div>
    )
    // =========================================== //

}

export default person;