import { render } from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from "redux";
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

// /* OK FOR VERSION1 & VERSION2 - CASE1
// -----------------------------------------*/
const store = createStore (  
    combineReducers( {mathReducer, userReducer} ),
    {}, 
    applyMiddleware(logger)
); 


/* OK FOR VERSION2 CASE2
-----------------------------------------*/
// const store = createStore ( 
//     combineReducers( {
//       math: mathReducer, 
//       user: userReducer
//     }),
//     {}, 
//     applyMiddleware(logger)
// ); 
  

render( <Provider store={store}>
          <App />
        </Provider>, document.getElementById('root') 
);
