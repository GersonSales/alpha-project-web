import React, {Component} from 'react';
import './App.css';
import NavBar from "./component/navigation/NavBar";
import MainComponent from "./component/MainComponent"
import {BrowserRouter} from "react-router-dom";
import {instanceOf} from "prop-types";
import {withCookies, Cookies} from 'react-cookie';


class App extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  constructor(props) {
    super(props);
    const {cookies} = props;
    this.state = {
      logged_in: cookies.get("logged_in") || "no",
      token: cookies.get("token") || null
    };

    if (this.state.token) {
      cookies.set("logged_in", "yes", {path: "/"});
    }else {
      cookies.set("logged_in", "no", {path: "/"});
    }

  }

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

export default withCookies(App);
