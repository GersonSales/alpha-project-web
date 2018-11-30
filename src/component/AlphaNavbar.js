import React from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from "react-bootstrap"

class AlphaNavbar extends React.Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Alpha-Project</a>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">
              Dishes
            </NavItem>
            <NavItem eventKey={2} href="#">
              Portfolio
            </NavItem>
          </Nav>
          <Nav pullRight>
            <NavDropdown eventKey={3} title="User" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Profile</MenuItem>
              <MenuItem eventKey={3.2}>Settings</MenuItem>
              <MenuItem divider/>
              <MenuItem eventKey={3.3}>Log out</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  };
}

export default AlphaNavbar;