import React, { Component } from 'react';
import './App.css';
import AlphaNavBar from "./component/AlphaNavbar";
import MainComponent from "./component/MainComponent"

class App extends Component {
  render() {
    return (
      <div className="App">
        <AlphaNavBar/>
        <body>
          <MainComponent/>
        </body>
      </div>
    );
  }
}

export default App;
