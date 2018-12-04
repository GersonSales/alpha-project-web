import React from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from "react-bootstrap"
import {BrowserRouter as Router, Link, Route} from "react-router-dom";

class AlphaNavbar extends React.Component {
  render() {
    return (
      <Router forceRefresh={true}>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to={"/"}>
                Alpha-Project
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle/>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1}>
                <Link to={"/dishes"} replace>
                  Dishes
                </Link>
              </NavItem>
              <NavItem eventKey={2}>
                <Link to={"/portfolio"}>
                  Portfolio
                </Link>
              </NavItem>
            </Nav>
            <Nav pullRight>
              <NavDropdown eventKey={3} title="User" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>
                  <Link to={"/user"}>Profile</Link>
                </MenuItem>
                <MenuItem eventKey={3.2}>Settings</MenuItem>
                <MenuItem divider/>
                <MenuItem eventKey={3.3}>Log out</MenuItem>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Router>


    )
  };
}

export default AlphaNavbar;