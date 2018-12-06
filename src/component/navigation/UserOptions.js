import React from 'react'
import { Dropdown, Icon } from 'semantic-ui-react'
import { Link }from  "react-router-dom";

const trigger = (
  <span>
    <Icon name='user' /> Hello, Bob
  </span>
);

const linkStyle = {color:"black"};

const options = [
  {
    key: 'user',
    text: (
      <span>
        Signed in as <strong>Bob Smith</strong>
      </span>
    ),
    disabled: true,
  },
  { key: 'profile', text: (<Link to={"/profile"} style={linkStyle}>Your Profile</Link>)},
  { key: 'control-panel', text: (<Link to={"/control-panel"} style={linkStyle}>Control Panel</Link>), href: "/portfolio" },
  { key: 'explore', text: 'Explore' },
  { key: 'integrations', text: 'Integrations' },
  { key: 'help', text: 'Help' },
  { key: 'settings', text: 'Settings' },
  { key: 'sign-out', text: 'Sign Out' },
];

const LoggedUserDropdown = () => <Dropdown trigger={trigger} options={options}/>;

export default LoggedUserDropdown