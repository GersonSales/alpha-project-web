import React from "react";
import Accordion from "./dish/DishAccordion";
import "./dish/style.css"
import DishControlPanelMenu from "./dish/DishControlPanelMenu";
import ComponentRouter from "./../router"

export default class DishControlPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'dishAccordion',
    };
  }

  handleItemClick = (e, {name}) => {
    this.setState({activeItem: name});
  };

  render() {
    const {activeItem} = this.state;

    return (
      <div>
        <DishControlPanelMenu handler={this.handleItemClick}/>
        <div>{activeItem}</div>
        <ComponentRouter tag={activeItem}/>
      </div>);
  }
}