import React, { Component } from "react";

export default class User extends Component {
  render() {
    return (
      <div>
        <h2>User page: </h2>
        <p>
          Username: {this.props.username}, {this.props.age}
        </p>
      </div>
    );
  }
}
