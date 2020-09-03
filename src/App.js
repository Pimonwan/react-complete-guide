import React, { Component } from "react";
import "./App.css";
import Radium, { StyleRoot } from "radium";
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

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    // create new obj that look like state person
    const person = {
      ...this.state.persons[personIndex],
    };
    // or using
    // const person = Object.assign(newEmptyObj, value inside);
    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
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
    this.setState({ persons: persons });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };
  // use bind is better!
  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1x solid blue",
      padding: "8px",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black",
      },
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangeHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      //change button color to red
      style.backgroundColor = "red";
      style[":hover"] = {
        backgroundColor: "salmon",
        color: "black",
      };
    }

    // Dynamic styles
    // let classes = ["red", "bold"].join(" "); // ----> result will be "red bold"
    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red"); // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold"); // classes = ['red', 'bold' ]
    }

/* If use Media Queries (Radium) must use <StyleRoot> to wrap entire application in the root app */
    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi I'm a React App </h1>
          <p className={classes.join(" ")}> This is really working!!</p>
          <button style={style} onClick={() => this.togglePersonHandler()}>
            Toggle Persons
          </button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);

/* Radium is a popular package for react with allows us to use inline styles 
with pseudo selectors and media queries. */
