import React from "react";
import SignUpForm from "./signup/SignUpForm";
import {Divider, Grid, Segment} from "semantic-ui-react";
import LoginPage from "./LoginPage"


export default class Join extends React.Component {


  render() {
    return (
      <Segment placeholder>
        <Grid columns={2} relaxed='very' stackable>
          <Grid.Column>
            <LoginPage {...this.props}/>
          </Grid.Column>

          <Grid.Column verticalAlign='middle'>
            <SignUpForm/>
          </Grid.Column>
        </Grid>

        <Divider vertical>Or</Divider>
      </Segment>

    );
  }


}