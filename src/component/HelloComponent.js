import React from "react";

export default class HelloComponent extends React.Component {
  constructor(props) {
    super(props);
    props.history.push("/");
  }

  render() {
    // this.props.router.push("/");
    return(
      <div>HelloComponent</div>
    );
  }
};