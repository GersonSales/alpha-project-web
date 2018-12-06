import React, {Component} from 'react'
import {Grid, Menu, Segment} from 'semantic-ui-react'
import ComponentRouter from "./router"

export default class MenuExampleTabularOnLeft extends Component {
  state = {activeItem: 'dishes'};

  handleItemClick = (e, {name}) => this.setState({activeItem: name});

  render() {
    const {activeItem} = this.state;

    return (
      <Grid>
        <Grid.Column width={4}>
          <Menu fluid vertical tabular>
            <Menu.Item name='user' active={activeItem === 'user'} onClick={this.handleItemClick}/>
            <Menu.Item name='dishes' active={activeItem === 'dishes'} onClick={this.handleItemClick}/>
            <Menu.Item name='foo' active={activeItem === 'foo'} onClick={this.handleItemClick}/>
          </Menu>
        </Grid.Column>

        <Grid.Column stretched width={12}>
          <Segment>
            <ComponentRouter tag={activeItem}/>
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}