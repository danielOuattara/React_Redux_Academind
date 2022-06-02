import { Component, StrictMode } from "react";
import { render } from "react-dom";
import Main from "./Main";
import User from "./User";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Max",
    };
    this.changeUsername = this.changeUsername.bind(this);
  }

  changeUsername(newName) {
    this.setState({
      username: newName,
    });
  }

  render() {
    return (
      <div className="container">
        <Main changeUsername={this.changeUsername} />
        <User username={this.state.username} />
      </div>
    );
  }
}

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
