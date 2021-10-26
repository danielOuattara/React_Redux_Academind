import React from 'react';
import { connect } from 'react-redux';
import Main from "./Main";
import User from "./User";

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "Max" 
    };
    this.changeUsername = this.changeUsername.bind(this);
  }
  
  changeUsername (newName) {
  }

  render() {
    return (
      <div className="container">
        <Main changeUsername= {this.changeUsername} />
        <User username={this.props.user.name} />
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
    }
  };
};

connect(mapStateToProps, mapDispatchToProps)