import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person.js";

class App extends Component {
  // state is variables in class
  state = {
    persons: [
      { id: 0, name: "Max", age: 28 },
      { id: 1, name: "Manu", age: 29 },
      { id: 2, name: "Stephanie", age: 26 },
    ],
  };

  nameChangeHandler = (event , id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // create new obj that look like state person
    const person = {
      ...this.state.persons[personIndex]
    };
    // or using
    // const person = Object.assign(newEmptyObj, value inside);
    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons});
  };

  // splice() function use for delete element array by index 
  deletePersonHandler = (personIndex) => {
    // we shouldn't fix state directly, because it may has mistake
    // we should create new array that look like array in state
    // by using slice() 
    // const persons = this.state.persons.slice();    -----> old jvs
    // ================================//
    // const persons = this.state.persons;   ----> it work but not good
    // ================================//
    // spread element (ES6)
    const persons = [...this.state.persons];

    //remove person from array
    persons.splice(personIndex, 1);
    // and update state
    this.setState({persons: persons})
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
          {this.state.persons.map((person, index) => {
            return <Person
            click={() => this.deletePersonHandler(index)}
            name={person.name}
            age={person.age} 
            key={person.id}
            changed={(event) => this.nameChangeHandler(event, person.id)}/>
          })}
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
