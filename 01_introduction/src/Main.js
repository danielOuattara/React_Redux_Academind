import { Component } from "react";
export default class Main extends Component {
  render() {
    return (
      <div>
        <h2>Main Page : </h2>
        <button onClick={() => this.props.changeUsername("Anna")}>
          Change Username
        </button>
      </div>
    );
  }
}
