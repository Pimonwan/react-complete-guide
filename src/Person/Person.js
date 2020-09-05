import React from 'react';
import classes from './Person.module.css';

const person = (props) => {
    return (
        <div className={classes.Person}>
            <p onClick={props.click}> I'm a {props.name}! and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    );
};

export default person;

/*
<input type="text" onChange={props.changed} value={props.name}/>
 - element is text field
 - onChange is action when it changes
 - value is default value in text field

 ** if use 'value' without 'onchange' handler it will always show error in console
 */