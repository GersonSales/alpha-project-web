import React, {Component} from 'react';
import './App.css';
import NavBar from "./component/navigation/NavBar";
import MainComponent from "./component/MainComponent"

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <body>
        <MainComponent/>
        </body>
      </div>

    );
  }
}

export default App;
