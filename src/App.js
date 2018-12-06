import React, {Component} from 'react';
import './App.css';
import NavBar from "./component/navigation/NavBar";
import MainComponent from "./component/MainComponent"
import {BrowserRouter} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <NavBar/>
            <body>
            <MainComponent/>
            </body>
          </div>
        </BrowserRouter>
      </div>


    );
  }
}

export default App;
