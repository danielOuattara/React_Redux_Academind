// import React from 'react';
// import {render} from 'react-dom';
// import Main from "./Main";
// import User from "./User";

// class App extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       username: "Max" 
//     };
//     this.changeUsername = this.changeUsername.bind(this);
//   }
  
//   changeUsername (newName) {
//     this.setState({
//       username: newName
//     });
//   }

//   render() {
//     return (
//       <div className="container">
//         <Main changeUsername= {this.changeUsername} />
//         <User username={this.state.username} />
//       </div>
//     );
//   }
// }

// render(
//   // <React.StrictMode>
//      <App />
//   // </React.StrictMode>,
//   ,document.getElementById('root')
// );

//=================================================================

import {createStore, combineReducers} from "redux";


const mathReducer = ( state = {result: 1, lastValues: [] }, action) => {
  switch (action.type) {
    case 'ADD':
      state = {
        ...state,  // spread operator ES6
        result: state.result + action.payload, // modifying result in the new state
        lastValues: [...state.lastValues, action.payload], // modifying result in the new state,
      };
      break;

    case 'SUBSTRACT':

      state = {
        ...state, // spread operator ES6
        result: state.result + action.payload, // modifying result in the new state
        lastValues: [...state.lastValues, action.payload], // modifying result in the new state
      }
      break;  
    
    default:
        return state;
  }
  return state; // return the new state 
}


const userReducer = ( state = {name: "Daniel", age: 37 }, action) => {

  switch (action.type) {
    case 'SET_NAME':
      state = {
        ...state,  // spread operator ES6
        name: action.payload
      };
      break;

    case 'SET_AGE':
      state = {
        ...state, // spread operator ES6
        age: action.payload,
      };
      break;  
    
    default:
        return state;
  }
  return state; // return the new state 
}

const store = createStore( combineReducers({mathReducer, userReducer})); // reducer holds himself the initial state, see Ligne: 43

store.subscribe( () => { //  fat arrow function get fired when the store is updated
  console.log("Store updated ", store.getState());
})

store.dispatch({
  type: 'ADD',
  payload: + 100
});

store.dispatch({
  type: 'ADD',
  payload: + 22
});

store.dispatch({
  type: 'SUBSTRACT',
  payload: -80
});

//---------------------------

store.dispatch({
  type: 'SET_NAME',
  payload: "Julie"
});

store.dispatch({
  type: 'SET_AGE',
  payload: 36
});