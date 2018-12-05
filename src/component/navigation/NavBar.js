import React, {Component} from 'react'
import {Input, Menu, Segment, Divider} from 'semantic-ui-react'
import DropdownTriggerExample from "./UserOptions";
import {BrowserRouter as Router, Link} from "react-router-dom";

export default class NavBar extends Component {
  state = {activeItem: 'home'};

  handleItemClick = (e, {name}) => {
    this.setState({activeItem: name})
  };

  render() {
    const {activeItem} = this.state;

    return (
      <Router forceRefresh >
        <Segment inverted style={{ marginBottom: 30 }}>
          <Menu inverted pointing secondary>
            <Menu.Item
              as={Link}
              to="/"
              name='home'
              active={activeItem === 'home'}
              onClick={this.handleItemClick}/>

            <Menu.Item
              as={Link}
              to="/dishes"
              name='dishes'
              active={activeItem === "dishes"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              as={Link}
              to="/portfolio"
              name='portfolio'
              active={activeItem === "portfolio"}
              onClick={this.handleItemClick}
            />

            <Menu.Menu position='right'>
              <Menu.Item>
                <Input icon='search' placeholder='Search...'/>
              </Menu.Item>
              <Menu.Item><DropdownTriggerExample/></Menu.Item>
            </Menu.Menu>
          </Menu>
        </Segment>
      </Router>
    )
  }
}