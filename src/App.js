import React, {Component} from 'react';
import './App.css';
import NavBar from "./component/navigation/NavBar";
import MainComponent from "./component/MainComponent"
import {BrowserRouter} from "react-router-dom";
import {instanceOf} from "prop-types";
import {withCookies, Cookies} from 'react-cookie';
import axios from "axios";
import jwtDecode from "jsonwebtoken";

import {getUserInfo} from "./component/auth/Service"


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <NavBar/>
            <MainComponent {...this.props}/>
          </div>
        </BrowserRouter>
      </div>


    );
  }
}

export default withCookies(App);
