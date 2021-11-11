// import React from 'react';
// import { connect } from 'react-redux';
// import Main from "./Main";
// import User from "./User";

// class App extends React.Component {
//   render() {
//     return (
//       <div className="container">
//         <Main changeUsername= {() =>this.props.setName("Gaia")} />
//         <User username={this.props.name} age={this.props.age}/>
//       </div>
//     );
//   }
// }

/* CASE 1 
-----------*/

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


//--------------------------------------------------------------------------------


import React from 'react';
import { connect } from 'react-redux';
import Main from "./Main";
import User from "./User";

class App extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div className="container">
        <Main changeUsername= {() => this.props.setName("Julie")} />
        <User username={this.props.user.name} age={this.props.user.age}/>
      </div>
    );
  }
}

/* CASE 1 
-----------*/
const mapStateToProps = (state) => {
  return {
    user: state.userReducer,
    math: state.mathReducer
  };
};

/* CASE 2
-----------*/
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

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
