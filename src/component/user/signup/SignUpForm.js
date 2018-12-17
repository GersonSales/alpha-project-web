import React from "react";
import {Form, Container, Button, Segment} from 'semantic-ui-react'
import { PostUser } from "./../../auth/Router";


export default class SignUpForm extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      phone: "",
      password:"",
      passwordConf:"",
      email: "",
      role: "CLIENT"

    };
  }

  handleSignUp = () => {
    PostUser(this.state);

  };

  handleFormUpdate = (event) => {
    this.setState({[event.target.name]: event.target.value});
  };

  render() {
    return (
      <Segment compact floated={"left"}>
        <Form>
          <Form.Input fluid name="firstName" label='First name' placeholder='First name' value={this.state.firstName} onChange={this.handleFormUpdate}/>
          <Form.Input fluid name="lastName" label='Last name' placeholder='Last name' value={this.state.lastName} onChange={this.handleFormUpdate}/>
          <Form.Input fluid name="phone" label='Phone' placeholder='ex.: (99) 99999-9999'value={this.state.phone} onChange={this.handleFormUpdate}/>
          <Form.Input fluid name="email" label='E-mail' placeholder='ex.: user@mail.com' value={this.state.email} onChange={this.handleFormUpdate}/>

          <Form.Group widths={"equal"}>
            <Form.Input fluid name="password" label='Password' placeholder='********' value={this.state.password} onChange={this.handleFormUpdate}/>
            <Form.Input fluid name="passwordConf" label='Confirmation' placeholder='********' value={this.state.passwordConf} onChange={this.handleFormUpdate}/>
          </Form.Group>
          <Form.Checkbox label='I agree to the Terms and Conditions'/>
        </Form>
        <br/>
        <Button onClick={this.handleSignUp}>Create account</Button>
      </Segment>
    );
  }


}