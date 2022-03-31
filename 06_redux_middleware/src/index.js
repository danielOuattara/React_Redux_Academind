
import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";

const mathInitialState = {
  result: 1, 
  lastValues: [] 
};

const mathReducer = ( state = mathInitialState, action) => {
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

const userInitialState = {
  name: "Daniel", 
  age: 37 
};

const userReducer = ( state = userInitialState, action) => {

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

// const myLogger = (store) => (next) => (action) => {
//   console.log("Logged Action: ", action);
//   next(action);
// };

const store = createStore( 
    combineReducers( {mathReducer, userReducer} ),
    {}, 
    applyMiddleware(/* myLogger, */ logger)
); 

// store.subscribe( () => { //  fat arrow function get fired when the store is updated
//   console.log("Store updated ", store.getState());
// })

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