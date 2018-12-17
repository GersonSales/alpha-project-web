import React from "react"
import {Card} from 'semantic-ui-react'
import DishCard from "./Card";

export default class CardGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3030/dish")
      .then((res) => res.json())
      .then((result) => {
          this.setState({
            isLoaded: true,
            items: result.result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }


  render() {
    const {error, isLoaded, items} = this.state;

    const listDishes = items.map((dish, key) =>
      <DishCard key={key}
                id={dish.id}
                name={dish.name}
                price={dish.price}
                description={dish.description}
                image={dish.image}/>
    );

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <Card.Group itemsPerRow={15} style={{padding: 20}}>
          {listDishes}
        </Card.Group>
      );
    }
  }
}