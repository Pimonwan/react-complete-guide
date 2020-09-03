import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person.js";

class App extends Component {
  // state is variables in class
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 },
    ],
  };

  switchNameHandler = (newName) => {
    //Don't do this ---> this.state.persons[0].name = 'Maximilian';

    // setState allows us to update state property
    // get attribute type object
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Manu", age: 29 },
        { name: "Stephanie", age: 27 },
      ],
      showPersons: false,
    });
  };

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: "Max", age: 28 },
        { name: event.target.value, age: 29 },
        { name: "Stephanie", age: 26 },
      ],
    });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };
  // use bind is better!
  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1x solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, "Max!!!")}
            changed={this.nameChangeHandler}
          >
            My Hobbies: Racing
          </Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          />
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi I'm a React App </h1>
        <p> This is really working!!</p>
        <button style={style} onClick={() => this.togglePersonHandler()}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;

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

/* 
  In jsx we can write javascript code in {} in render function.
  additional we can write element {<div>...</div>}

        {
          this.state.showPersons ?       -----> check if showPersons is true will render <div>
            <div>
              ...
            </div> : null    -----> this is else case
        }
 */
