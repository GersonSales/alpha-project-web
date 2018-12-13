import React from "react";
import { signOut } from "../auth/Service";

export default class SignOut extends React.Component {
  constructor(props) {
    super(props);
    signOut();
    props.history.push("/");
    window.location.reload()
  }

  render() {
    return null;
  }
}

