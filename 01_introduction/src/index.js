import {render} from 'react-dom';
import Main from "./Main";
import User from "./User";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "Max" 
    };
    this.changeUsername = this.changeUsername.bind(this);
  }
  
  changeUsername (newName) {
    this.setState({
      username: newName
    });
  }

  render() {
    return (
      <div className="container">
        <Main changeUsername= {this.changeUsername} />
        <User username={this.state.username} />
      </div>
    );
  }
}

render(<React.StrictMode> <App /> </React.StrictMode>,document.getElementById('root'));


