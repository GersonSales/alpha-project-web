import React, {Component} from 'react'
import {Accordion, Icon} from 'semantic-ui-react'
import "./style.css"
import axios from "axios";
import DishDetails from "./DishDetails";

export default class DishAccordion extends Component {
  state = {
    dishes: []
  };

  dishUrl = "https://alpha-project-api.herokuapp.com/dish";

  handleClick = (e, titleProps) => {
    const {index} = titleProps;
    const {activeIndex} = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({activeIndex: newIndex})
  };

  componentDidMount() {
    axios.get(this.dishUrl).then(res => {
      const dishes = res.data.result;
      this.setState({dishes});

    });
  }

  render() {
    const {activeIndex} = this.state;

    return (
      <Accordion fluid styled className="Accordion">
        {this.state.dishes.map((dish, i) =>
          <div>
            <Accordion.Title active={activeIndex === i} index={i} onClick={this.handleClick}>
              <Icon name='dropdown'/>
              {dish.name}
            </Accordion.Title>
            <Accordion.Content active={activeIndex === i}>
              <DishDetails key={i}
                           _id={`${dish._id}`}
                           name={`${dish.name}`}
                           type={`${dish.type}`}
                           image={`${dish.image}`}
                           description={`${dish.description}`}
                           price={`${dish.price}`}/>
            </Accordion.Content>
          </div>
        )}
      </Accordion>
    )
  }
}