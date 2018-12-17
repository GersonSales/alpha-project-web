import React from "react";
import UserCardGroup from "./UserCardGroup"

export default class UserControlPanel extends React.Component {
  render() {
    return (
      <div>
        <h1>User Panel Control</h1>
        <UserCardGroup/>
      </div>
    );
  }
}