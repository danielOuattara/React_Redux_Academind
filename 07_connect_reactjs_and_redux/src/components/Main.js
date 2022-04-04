import { Component } from "react";
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h2>Main Page : </h2>
        <button
          onClick={() => {
            this.props.changeUser("Gaïa");
            this.props.changeAge(4);
          }}
        >
          Change Username
        </button>
      </div>
    );
  }
}
