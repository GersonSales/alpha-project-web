import React, {Component} from 'react'
import {Menu} from 'semantic-ui-react'

export default class DishControlPanelMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {handler: props.handler};
  }

  handleItemClick = (e, {name}) => {
    this.setState({activeItem: name});
    this.state.handler(e, {name});
  };

  render() {
    const {activeItem} = 'dishAccordion';

    return (
      <Menu>
        <Menu.Item
          name='dishAccordion'
          active={activeItem === 'dishAccordion'}
          onClick={this.handleItemClick}>
          <b>Dishes</b>
        </Menu.Item>

        <Menu.Item
          name='dishCreation'
          active={activeItem === 'dishCreation'}
          onClick={this.handleItemClick}
        >
          <b>Create</b>
        </Menu.Item>
      </Menu>
    )
  }
}
