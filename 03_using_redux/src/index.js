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
