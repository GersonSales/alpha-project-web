import React from "react";
import LoginPage from "./LoginPage"
import {instanceOf} from 'prop-types';
import {withCookies, Cookies} from 'react-cookie';
import HelloComponent from "./../HelloComponent";
import {Route} from "react-router-dom";


class SignInUpPage extends React.Component {
  constructor(props) {
    super(props);
    const { cookies } = props;
    this.state = {
      logged_in: cookies.get("logged_in") || "no"
    };
  }


  isUserLogged = () => {
    return this.state.logged_in === "yes";
  };


  render() {
    if (this.isUserLogged()) {
      this.props.history.push("/");
      return (<HelloComponent/>);
    } else {
      return (<LoginPage {...this.props}/>);
    }
  }
}

export default withCookies(SignInUpPage);