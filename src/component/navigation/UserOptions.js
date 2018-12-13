import React from 'react'
import {Dropdown, Icon} from 'semantic-ui-react'
import {Link} from "react-router-dom";
import {withCookies} from 'react-cookie';
import {getUserInfo} from "../auth/Service";

class UserOptions extends React.Component {

  constructor(props) {
    super(props);
    const {cookies} = props;
    this.state = {logged_in: "no"};

    const token = cookies.get("token");
    if (token !== null && token !== undefined) {
      getUserInfo(token).then((data) => {
        this.setState(data);
        console.log("UserOption: " + JSON.stringify(this.state));
      }).catch((error) => {
        console.log("UserOption: " + error);
      })
    }

  }

  getUserInfo = () => {
    const linkStyle = {color: "black"};
    console.log("HERE: "+ JSON.stringify(this.state));
    const { firstName, lastName } = this.state;

    if (firstName !== null && firstName !== undefined) {
      return ([
        {
          key: 'user',
          text: (
            <span>
            Signed in as <strong>{firstName + " " + lastName}</strong>
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
        {key: 'sign-out', text: (<Link to={"/sign-out"} style={linkStyle}>Sign Out</Link>)},
      ]);
    } else {
      return ([
        {
          key: 'user', text: (
            <span>
        Join <strong>us</strong>!
      </span>
          ),
          disabled: true,
        },
        {key: 'login', text: (<Link to={"/login"} style={linkStyle}>Login</Link>)},
        {key: 'signUp', text: (<Link to={"/sign-up"} style={linkStyle}>Sign Up</Link>)},


      ]);
    }
  };

  getTrigger = () => {
    const { firstName } = this.state;
    return (
      <span>
        <Icon name='user'/> {`Hello, ${firstName ? firstName : "visitant"}`}
      </span>
    );
  };

  render() {



    return (<Dropdown trigger={this.getTrigger()} options={this.getUserInfo()}/>);
  }

}

export default withCookies(UserOptions);