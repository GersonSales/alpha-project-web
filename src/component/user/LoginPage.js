import React from 'react'
import {Button, Form, Grid, Segment} from 'semantic-ui-react'
import axios from "axios";
import {withCookies} from 'react-cookie';
import HelloComponent from "../HelloComponent";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      email: "", password: "",
    };
  }

  attemptToLogin = (event) => {
    this.setState({loading: true, email: "", password: ""});
    event.preventDefault();
    const user = this.state;

    axios.post("https://alpha-project-api.herokuapp.com/auth/", user)
      .then((res) => {
        if (res.status === 200) {
          const {cookies} = this.props;
          cookies.set("token", res.data.token, {path: "/"});
          this.setState({loading: false});
          this.props.history.push("/");
          window.location.reload();
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
      return (<HelloComponent/>);
    } else {
      return (
        <div className='login-form '>
          <Grid textAlign='center' style={{height: '100%'}} verticalAlign='middle'>
            <Grid.Column style={{maxWidth: 450}}>
              <Form size='large' loading={this.state.loading}>
                <Segment>
                  <Form.Input fluid icon='user'
                              iconPosition='left'
                              name="email"
                              placeholder='E-mail address'
                              value={this.state.email}
                              onChange={this.handleFieldUpdate}/>
                  <Form.Input
                    fluid
                    icon='lock'
                    name="password"
                    iconPosition='left'
                    placeholder='Password'
                    type='password'
                    value={this.state.password}
                    onChange={this.handleFieldUpdate}
                  />

                  <Button primary fluid size='large' onClick={this.attemptToLogin}>
                    Login
                  </Button>
                </Segment>
              </Form>
            </Grid.Column>
          </Grid>
        </div>);
    }
  }

}

export default withCookies(LoginPage);