import React, {Component} from 'react'
import {Image, Input, Menu, Segment} from 'semantic-ui-react'
import LoggedUserDropdown from "./UserOptions";
import {Link} from "react-router-dom";
import MainLogo from "./alpha_logo.svg"

export default class NavBar extends Component {
  state = {activeItem: 'home'};

  handleItemClick = (e, {name}) => {
    this.setState({activeItem: name})
  };

  render() {
    const {activeItem} = this.state;

    return (
      <div style={{position: "relative", zIndex: 1}} >
        <Segment inverted style={{paddingBottom: 60}}/>

        <Segment inverted style={{
          position: 'absolute', left: '50%', top: '50%',
          transform: 'translate(-50%, -70%)', marginBottom: 20
        }}>
          <Menu inverted pointing secondary>
            <Menu.Item
              as={Link}
              to={"/"}
              name="home"
              style={{marginRight:30, padding:0, paddingBottom:5}}
              onClick={this.handleItemClick}>
              <Image src={MainLogo}   size={"mini"} />
            </Menu.Item>
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

            <Menu.Menu style={{marginLeft: 60}}>
              <Menu.Item>
                <Input icon='search' placeholder='Search...'/>
              </Menu.Item>
              <Menu.Item><LoggedUserDropdown/></Menu.Item>
            </Menu.Menu>
          </Menu>

        </Segment>
      </div>
    )
  }
}