// import React from 'react';
// import { connect } from 'react-redux';
// import Main from "./Main";
// import User from "./User";

// class App extends React.Component {
//   constructor(props) {
//     super(props)
//     this.changeUsername = this.changeUsername.bind(this);
//   }
  
//   changeUsername (newName) {
//   }

//   render() {
//     console.log(this.props)
//     return (
//       <div className="container">
//         {/* <Main changeUsername= {this.changeUsername} /> */}
//         <User username={this.props.name} age={this.props.age}/>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => {  // CAHNGED BELLOW
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



import React from 'react';
import { connect } from 'react-redux';
import Main from "./Main";
import User from "./User";

class App extends React.Component {
  render() {

    console.log(this.props);
    return (
      <div className="container">
        <Main changeUsername= {() => this.props.setName("Julie")} />
        <User username={this.props.user.name} age={this.props.user.age}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer,
    math: state.mathReducer
  };
};

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
