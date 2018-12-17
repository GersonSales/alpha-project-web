import React from "react";
import SignUpForm from "./signup/SignUpForm";
import {Segment, Image} from "semantic-ui-react";
import joinUsImg from "./../../joinUs.png"


export default class SignUp extends React.Component {


  render() {
    return (
      <Segment clearing compact style={{
        margin: "auto",
        width: "50%",
        padding: "5px"
      }}>
        <SignUpForm/>
        <Image src={joinUsImg} size={"tiny"} floated={"right"} style={{
          margin: "auto",
          marginTop:"25%",
          width: "40%",
          padding: "5px"
        }}/>
      </Segment>
    );
  }


}