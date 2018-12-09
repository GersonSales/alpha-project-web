import React from "react";
import LoginPage from "./LoginPage"
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';


class SignInUpPage extends React.Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };
  constructor(props) {
    super(props);
    this.state = {logged_in: true};

    const { cookies } = props;
    this.state = {
      logged_in: cookies.get("logged_in") || false
    };

    cookies.set("logged_in", this.state.logged_in, {path:"/"});
  }


  render() {
    console.log(this.state.logged_in);
    if (Boolean(this.state.logged_in)) {
      return (<div> SignUp </div>);
    } else {
      return (<LoginPage />);
    }
  }
}

export default withCookies(SignInUpPage);