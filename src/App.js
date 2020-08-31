import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  //render method use for render something to screen
  render() {
    return (
      //className = add css class to element
      //Jsx must have 1 root element (now div is root element)
      <div className="App">
        <h1>Hi I'm a React App </h1>
        <p> This is really working!!</p>
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
