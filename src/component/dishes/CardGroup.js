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

    const dishes = [
      {
        id: "1",
        name: "Name1",
        price: "R$100",
        description: "Description1",
        image: "https://react.semantic-ui.com/images/avatar/large/matthew.png"
      },
      {
        id: "2", name: "Name2", price: "R$200", description: "Description2",
        image: "https://react.semantic-ui.com/images/avatar/large/matthew.png"
      },
      {
        id: "3", name: "Name3", price: "R$300", description: "Description3",
        image: "https://react.semantic-ui.com/images/avatar/large/matthew.png"
      },
      {
        id: "4", name: "Name4", price: "R$400", description: "Description4",
        image: "https://react.semantic-ui.com/images/avatar/large/matthew.png"
      },
      {
        id: "5", name: "Name5", price: "R$500", description: "Description5",
        image: "https://react.semantic-ui.com/images/avatar/large/matthew.png"
      },
    ];
    const listDishes = items.map((dish) =>
      <DishCard id={dish.id}
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
        <Card.Group itemsPerRow={15} centered style={{padding: 20}}>
          {listDishes}
        </Card.Group>
      );
    }
  }
}