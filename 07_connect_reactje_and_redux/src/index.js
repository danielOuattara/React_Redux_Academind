import React from 'react';
import {createStore, combineReducers, applyMiddleware} from "redux";
import {render} from 'react-dom';
import App from "./components/App";
import logger from "redux-logger";
import { Provider } from 'react-redux';

const mathReducer = ( state = {result: 1, lastValues: [] }, action) => {
  switch (action.type) {
    case 'ADD':
      state = {
        ...state,  
        result: state.result + action.payload, 
        lastValues: [...state.lastValues, action.payload],
      };
      break;
      
      case 'SUBSTRACT':
        
        state = {
        ...state, 
        result: state.result + action.payload, 
        lastValues: [...state.lastValues, action.payload], 
      }
      break;  
      
      default:
        return state;
  }
  return state; 
}


const userReducer = ( state = {name: "Daniel", age: 37 }, action) => {
  
  switch (action.type) {
    case 'SET_NAME':
      state = {
        ...state,  
        name: action.payload
      };
      break;

      case 'SET_AGE':
      state = {
        ...state, 
        age: action.payload,
      };
      break;  
    
      default:
        return state;
      }
      return state; 
    }

    const myLogger =(state) => (next) => (action) => {
      console.log("Logged Action: ", action);
  next(action);
};

const store = createStore ( 
  combineReducers( {mathReducer, userReducer} ),
  {}, 
  applyMiddleware(myLogger, logger)
  ); 
  
  store.subscribe( () => { //  fat arrow function get fired when the store is updated
    // console.log("Store updated ", store.getState());
  })
  

render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>, 
 document.getElementById('root') );
