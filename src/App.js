  /* useState is the hook that allows us to manage state in a functional
   - useState can pass all types like objects, numbers, strings etc.
   - useState always return 2 arrays 
   - The first is current state and the second always be a function that allow to update state

  // ******* important ******* //
   useState will be replace new state to the old state 
   example : 
     - before changing state
             persons: [
              {name: 'Max', age: 28},
              {name: 'Manu', age: 29},
              {name: 'Stephanie', age: 26}
            ],
            otherState: 'hi'
            });
    - after changing state
          persons: [
            {name: 'Maximilian', age: 28},
            {name: 'Manu', age: 29},
            {name: 'Stephanie', age: 27}
          ]
          });
    otherState will be lost.

    So to manage state we can create another useState function to manage otherState seperate with personsState

    ** setState function will merge data between old state and new state so state will not lost
  */

import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  // state is variables in class
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 26}
    ]
  }

  switchNameHandler = (newName) => {
    //Don't do this ---> this.state.persons[0].name = 'Maximilian';

    // setState allows us to update state property
    // get attribute type object
    this.setState({
      persons: [
      {name: newName, age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 27}
    ]
    })
  }
  render(){
  return (
    <div className="App">
      <h1>Hi I'm a React App </h1>
      <p> This is really working!!</p>
        <button onClick={() => this.switchNameHandler('Maximilion')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Max!!!')}>My Hobbies: Racing</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
    </div>
    );
  }
}

export default App;

