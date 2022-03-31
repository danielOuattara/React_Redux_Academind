/* version 1 */

// import React from 'react';
// import { connect } from 'react-redux';
// import Main from "./Main";
// import User from "./User";

// class App extends React.Component {
//   render() {
//     return (
//       <div className="container">
//         <Main changeUsername= {(name) =>this.props.setName(name)} />
//         <User username={this.props.name} age={this.props.age}/>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => {  // CHANGED BELLOW
//   return { ...state.userReducer, ...state.mathReducer };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setName: (name) => {
//       dispatch({
//         type: "SET_NAME",
//         payload: name,
//       })
//     }
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(App);

//----------------------------------------------------------------

/* Version 2 
-------------*/

import React from 'react';
import { connect } from 'react-redux';
import Main from "./Main";
import User from "./User";

class App extends React.Component {

  // changeUser() {
  //     this.props.setName("Julie")
  //     this.props.setAge(number)
  // }
  

  render() {
    console.log(this.props)
    return (
      <div className="container">
        <Main 
          changeUser= {(newName) => this.props.setName(newName)} 
          changeAge= {(number) => this.props.setAge(number)} 
        />
        <User username={this.props.user.name} age={this.props.user.age}/>
      </div>
    );
  }
}


// VERSION2 - CASE 1 

const mapStateToProps = (state) => {
  return {
    user: state.userReducer,
    math: state.mathReducer
  };
};

// VERSION2 - CASE 2

// const mapStateToProps = (state) => {
//   return {
//     user: state.user,
//     math: state.math
//   };
// };

const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => {
      dispatch({
        type: "SET_NAME",
        payload: name,
      })
    },
    setAge: (number) => {
      dispatch({
        type: "SET_AGE",
        payload: number,
      })
    },

  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
