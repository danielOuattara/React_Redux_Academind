import {createStore} from "redux";

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      state = state + action.payload;
      break;

    case 'SUBSTRACT':
      state = state - action.payload;
      break;  
  }
  return state; // return the new state 
}

const store = createStore( reducer , 1 /* = initial state*/); 

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
  payload: 80
});
