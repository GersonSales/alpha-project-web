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
  config = {
    headers: {}
  };
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  constructor(props) {
    super(props);

  }


  getUserInfo2 = async (cookies) => {
    const token = cookies.get("token");
    if (token) {
      const user = await getUserInfo(token);
      if (user) {
        console.log("RESULT" + JSON.stringify(user));
        // this.setState({user: result})
        cookies.set("user", user, {path: "/"});
        console.log("Before: " + JSON.stringify(this.state.user));
        this.setState({user: cookies.get("user")});
        console.log("after: " + JSON.stringify(this.state.user));
      } else {
        console.log("ELSE");

      }


    }
  };

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <NavBar/>
            <body>
            <MainComponent {...this.props}/>
            </body>
          </div>
        </BrowserRouter>
      </div>


    );
  }
}

export default withCookies(App);
