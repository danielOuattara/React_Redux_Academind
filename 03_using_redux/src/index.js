import { createStore } from "redux";

// 2
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      state = state + action.payload;
      break;

    case 'SUBSTRACT':
      state = state - action.payload;
      break;  
    default:
      return state;
  }
  return state; // ALWAYS return the new state 
}

// 1
const store = createStore( reducer , 1 /* 1 = initial state*/); 

// 4, normaly handled by react.js
store.subscribe( () => { //  fat arrow function get fired when the store is updated
  console.log("Store updated ", store.getState());
})

// 3
store.dispatch({  // we dispatch action as object
  type: 'ADD',
  payload: + 100
});

store.dispatch({
  type: 'ADD',
  payload: + 22
});

store.dispatch({
  type: 'SUBSTRACT',
  payload: 80
});
