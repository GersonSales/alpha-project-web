import React, {Component} from 'react';
import DishControlPanelComponent from './tab/DishControlPanel';
import UserControlPanelComponent from './tab/UserControlPanel';
import DishAccordion from "./tab/dish/DishAccordion";
import PageNotFound from "./../util/PageNotFound";
import DishCreation from "./tab/dish/DishCreation"

export default class ComponentRouter extends Component {
  components = {
    dishes: DishControlPanelComponent,
    user: UserControlPanelComponent,
    dishAccordion: DishAccordion,
    pageNotFound: PageNotFound,
    dishCreation: DishCreation
  };

  render() {
    const pageNotFound = "PageNotFound ";
    const TagName = this.components[this.props.tag || pageNotFound];
    return <TagName/>
  }
}