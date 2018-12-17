import React from "react";
import LoginPage from "./LoginPage"
import {withCookies} from 'react-cookie';
import HelloComponent from "./../HelloComponent";


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