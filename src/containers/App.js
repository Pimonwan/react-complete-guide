import React, { Component } from "react";
import classes from "./App.module.css";
import Persons from "../components/Persons/Persons.js";
import Cockpit from "../components/Cockpit/Cockpit.js";
import withClass from "../hoc/withClass.js";
import Aux from '../hoc/Aux.js';
class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }

  state = {
    persons: [
      { id: 0, name: "Max", age: 28 },
      { id: 1, name: "Manu", age: 29 },
      { id: 2, name: "Stephanie", age: 26 },
    ],
    showPersons: false,
    showCockpit: true
  };

  // static getDerivedStateFromProps(props, state) {
  //   console.log('[App.js] getDerivedStateFromProps(props, state)');
  //   return state;
  // }

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount()');
  // }

  componentDidMount() {
    // fetching new data from server
    console.log("[App.js] componentDidMount()");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js] shouldComponentUpdate()");
    // if falue it will not be update when rendered
    return true;
  }

  componentDidUpdate() {
    // fetching new data from server
    console.log("[App.js] componentDidUpdate()");
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };
  render() {
    console.log("[App.js] render");
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}
          />
        </div>
      );
    }
    return (
      <Aux>
        <button
          onClick={() => {
            this.setState({ showCockpit: false });
          }}
        >Remove Cockpit
        </button>
        { (this.state.showCockpit) ? (
          <Cockpit
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonHandler}
          />
        ) : null }
        {persons}
      </Aux>
    );
  }
}

export default withClass(App, classes.App);

/* 
 Component Lifecycle - Creation
 จะได้แค่เฉพาะ  class base เท่านั้น
    - constructor(props) 
      -> Call super(props)
      -> Do: Set state
    
    - getDerivedStateFromProps(props, state)
      -> Sync state
    
    - render()
      -> prepare & structure your jsx code เป็นส่วยเตรียมการแสดงผล
    
    - Render Child Components
      -> ส่วนที่จะ render component ขึ้นมา
    
    - componentDidMount()
      -> จะติดต่อกับ http
      -> ไม่ควรอัพเดต state ที่ขึ้นนี้

*/
