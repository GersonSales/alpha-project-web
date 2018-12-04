import React from "react"
import {Card} from 'semantic-ui-react'
import DishCard from "./Card";

export default class CardGroup extends React.Component {
  render() {
    return (<Card.Group itemsPerRow={3} centered>
        <DishCard/>
        <DishCard/>
        <DishCard/>
        <DishCard/>
        <DishCard/>
        <DishCard/>
        <DishCard/>
        <DishCard/>
      </Card.Group>
    );
  }
}