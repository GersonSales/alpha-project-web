import React from 'react'
import {Dropdown, Icon} from 'semantic-ui-react'
import {Link} from "react-router-dom";
import {instanceOf} from 'prop-types';
import {withCookies, Cookies} from 'react-cookie';
import axios from "axios";

class UserOptions extends React.Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  config = {
    headers: {}
  };

  constructor(props) {
    super(props);
    const {cookies} = props;
    this.config.headers = {token: cookies.get("token") || null};
    this.state = {
      user_id: cookies.get("user_id") || null,
    };

    if (this.state.user_id) {
      this.getUser();
    }

  }

  getUser = () => {
    axios.get(`http://localhost:3030/user/${this.state.user_id}`, this.config)
      .then(res => {
        this.setState({user: res.data});
      })
      .catch(error => {
        console.log(error);
      })
  };

  getUserInfo = () => {
    const linkStyle = {color: "black"};
    if (this.state.user) {
      return ([
        {
          key: 'user',
          text: (
            <span>
            Signed in as <strong>{this.state.user.firstName}</strong>
          </span>
          ),
          disabled: true,
        },
        {key: 'profile', text: (<Link to={"/profile"} style={linkStyle}>Your Profile</Link>)},
        {
          key: 'control-panel',
          text: (<Link to={"/control-panel"} style={linkStyle}>Control Panel</Link>),
          href: "/portfolio"
        },
        {key: 'explore', text: 'Explore'},
        {key: 'integrations', text: 'Integrations'},
        {key: 'help', text: 'Help'},
        {key: 'settings', text: 'Settings'},
        {key: 'sign-out', text: 'Sign Out'},
      ]);
    }else {
      return([
        {
          key: 'user', text: (
            <span>
        Join <strong>us</strong>!
      </span>
          ),
          disabled: true,
        },
        {key: 'login', text: (<Link to={"/login"} style={linkStyle}>Login</Link>)},


      ]);
    }
  };

  getTrigger = () => {
    return(
      <span>
        <Icon name='user'/> {`Hello, ${this.state.user? this.state.user.firstName : "visitant"}`}
      </span>
    );
  };

  render() {

    return (<Dropdown trigger={this.getTrigger()} options={this.getUserInfo()}/>);
  }

}

export default withCookies(UserOptions);