import React, { useState, useEffect } from "react";
import classes from "./Cockpit.module.css";

const Cockpit = (props) => {

  // useEffect if array is [] it will run 1 times after rendering
  // [props.Person] it will run when persons have changed.
  // if need componentDidMount, you would use useEffect with an empty array passed as a second.


  // ***  cleanup work in useEffect  ---> run BEFORE the main useEffect function runs, but AFTER the first render cycle
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    //HTTP Request... 
    setTimeout(() => {
      alert('Save data to cloud!!')
    }, 1000);
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect');
    }}, []);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect');
    };
  })

  const assignedClasses = [];
  let btnClasses = "";
  if (props.showPersons) {
    btnClasses = classes.Red;
  }
  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red', 'bold' ]
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}> This is really working!!</p>
      <button className={btnClasses} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default React.memo(Cockpit);

// React memo ===> React จะจำ snapshot ไว้ถ้ามีการเปลี่ยนแปลงจะทำการ rerender