import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person.js';

const app = props => {
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
  const [ personsState, setPersonsState ] = useState({
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 26}
    ],
    otherState: 'hi'
    });

  const [otherState, setOtherState] = useState('some other value');
  console.log(personsState, otherState);

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
      {name: 'Maximilian', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 27}
    ]
    });
  }
  return (
    <div className="App">
      <h1>Hi I'm a React App </h1>
      <p> This is really working!!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person 
        name={personsState.persons[0].name} 
        age={personsState.persons[0].age}/>
      <Person 
        name={personsState.persons[1].name} 
        age={personsState.persons[1].age}>My Hobbies: Racing</Person>
      <Person 
        name={personsState.persons[2].name} 
        age={personsState.persons[2].age}/>
    </div>
    );
}

export default app;
