import React from 'react'
import {Card} from 'semantic-ui-react'
import Image from "./../test2.jpg"

export default class PortfolioCardGroup extends React.Component {

  render() {
    return (
      <Card.Group itemsPerRow={4}>
        <Card color='red' image={Image}/>
        <Card color='orange' image={Image}/>
        <Card color='yellow' image={Image}/>
        <Card color='olive' image={Image}/>
        <Card color='green' image={Image}/>
        <Card color='teal' image={Image}/>
        <Card color='blue' image={Image}/>
        <Card color='violet' image={Image}/>
        <Card color='purple' image={Image}/>
        <Card color='pink' image={Image}/>
        <Card color='brown' image={Image}/>
        <Card color='grey' image={Image}/>
      </Card.Group>

    );
  }
}

