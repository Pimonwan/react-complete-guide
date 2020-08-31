import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import component from person file
import Person from './Person/Person.js';

class App extends Component {
  //render method use for render something to screen
  render() {
    return (
      //className = add css class to element
      //Jsx must have 1 root element (now div is root element)
      //Person is component that can reuse.

      // in html we can pass attributes in <elements attributes>
      <div className="App">
        <h1>Hi I'm a React App </h1>
        <p> This is really working!!</p>
        <Person name='Max' age='28'/>
        <Person name='Manu' age='29'>My Hobbies: Racing</Person>
        <Person name='Stephanie' age='26'/>
      </div>
    );

    //==============================//
    //Another way to write screen
    //Use function createElement that need at least 3 arguments

    // 1 element to render
    // 2 configuration like styles
    // 3 children in element (mean what inside div)

    // return React.createElement(
    //   'div', 
    //   {className: 'App'}, 
    //   React.createElement('h1', null, 'Hi I\'m a React App!!')
    // );
     //==============================//
  }
}

export default App;
