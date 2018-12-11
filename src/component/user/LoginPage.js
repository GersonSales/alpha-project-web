import React from 'react'
import {Button, Form, Grid, Header, Image, Message, Segment} from 'semantic-ui-react'
import axios from "axios";
import {Link, Route} from "react-router-dom";

import {instanceOf} from 'prop-types';
import {Cookies, withCookies} from 'react-cookie';
import HelloComponent from "../HelloComponent";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    const {cookies} = props;
    this.state = {
      logged_in: cookies.get("logged_in") || "no",
      handler: this.props.handler,
      loading: false,
      user: {email: "", password: ""},
      token: cookies.get("token") || null
    };
  }

  attemptToLogin = (event) => {
    this.setState({loading: true});
    event.preventDefault();
    const user = this.state;

    axios.post("http://localhost:3030/auth/", user)
      .then((res) => {
        if (res.status === 200) {
          const {cookies} = this.props;
          cookies.set("token", res.data.token, {path: "/"});
          cookies.set("user_id", res.data.user_id, {path: "/"});
          cookies.set("logged_in", "yes", {path: "/"});
          this.setState({loading: false});
          this.state.handler();
        }

      }).catch(error => {

      this.setState({loading: false});
      console.log(error);

    });
  };

  handleFieldUpdate = (event) => {
    this.setState({[event.target.name]: event.target.value});
  };

  isUserLogged = () => {
    return this.state.logged_in === "yes";
  };


  render() {
    if (this.isUserLogged()) {
      this.props.history.push("/");
      return (<HelloComponent />);
    } else {
      return (
        <div className='login-form'>
          <Grid textAlign='center' style={{height: '100%'}} verticalAlign='middle'>
            <Grid.Column style={{maxWidth: 450}}>
              <Header as='h2' color='teal' textAlign='center'>
                <Image src='/logo.png'/> Log-in to your account
              </Header>
              <Form size='large' loading={this.state.loading}>
                <Segment stacked>
                  <Form.Input fluid icon='user'
                              iconPosition='left'
                              name="email"
                              placeholder='E-mail address'
                              value={this.state.user.email}
                              onChange={this.handleFieldUpdate}/>
                  <Form.Input
                    fluid
                    icon='lock'
                    name="password"
                    iconPosition='left'
                    placeholder='Password'
                    type='password'
                    value={this.state.user.password}
                    onChange={this.handleFieldUpdate}
                  />

                  <Button color='teal' fluid size='large' onClick={this.attemptToLogin}>
                    Login
                  </Button>
                </Segment>
              </Form>
              <Message>
                New to us? <a href='#'>Sign Up</a>
              </Message>
            </Grid.Column>
          </Grid>
        </div>);
    }
  }

}

export default withCookies(LoginPage);