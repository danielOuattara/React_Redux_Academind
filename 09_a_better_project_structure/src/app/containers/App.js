
import { Component } from "react";
import { connect } from "react-redux";
import { setName } from "./../actions/userAction";
import { Main } from "./../components/Main";
import { User } from "./../components/User";

class App extends Component {
  render() {
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
      dispatch(setName(name))
    },

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
