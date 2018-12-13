import React from "react";
import {Form, Container, Button, Segment} from 'semantic-ui-react'


export default class SignUpForm extends React.Component {


  render() {
    return (
      <Container style={{marginTop:50}}>
        <Segment compact>
          <Form >
            <Form.Input  fluid label='First name' placeholder='First name' error/>
            <Form.Input fluid label='Last name' placeholder='Last name'/>
            <Form.Input  fluid label='Phone' placeholder='ex.: (99) 99999-9999'/>
            <Form.Input  fluid label='E-mail' placeholder='ex.: user@mail.com'/>

            <Form.Group widths={"equal"}>
              <Form.Input  fluid label='Password' placeholder='********'/>
              <Form.Input  fluid label='Confirmation' placeholder='********'/>
            </Form.Group>
            <Form.Checkbox label='I agree to the Terms and Conditions' error/>
          </Form>
          <br/>
          <Button>Create account</Button>
        </Segment>
      </Container>);
  }


}