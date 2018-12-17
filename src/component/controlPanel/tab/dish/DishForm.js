import React from 'react'
import {Button, Form, Input, TextArea} from 'semantic-ui-react'
import axios from "axios";


export default class DishForm extends React.Component {
  BASE_URL = "http://localhost:3030/dish";


  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      method: props.method,
      name: props.name,
      type: props.type,
      price: props.price,
      description: props.description,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg/1200px-001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg"
    };

  }

  updateField = (event) => {
    this.setState({[event.target.name]: event.target.value});
  };

  clearForm = () => {
    this.setState({
      name: "",
      type: "",
      price: "",
      description: ""
    });
  };


  handleSubmit = (event) => {
    this.setState({loading: true});
    event.preventDefault();

    const dish = this.state;

    switch (this.state.method) {
      case "post":
        axios.post(this.BASE_URL, dish)
          .then(res => {
            this.setState({loading: false});
            this.clearForm();
          });
        break;
      case "put":
        axios.put(this.BASE_URL + `/${dish._id}`, dish)
          .then(res => {
            this.setState({loading: false});
            window.location.reload();
          });
        break;

      default:
        break;
    }


  };


  render() {
    return (
      <Form loading={this.state.loading}>
        <Form.Group widths='equal'>
          <Form.Field
            id='form-input-control-dish-name'
            control={Input}
            label='Name'
            name="name"
            placeholder='Ex.: Taco'
            value={this.state.name}
            onChange={this.updateField}
          />
          <Form.Field
            id='form-input-control-dish-price'
            control={Input}
            label='Price'
            name="price"
            placeholder='Ex.: 15,99'
            value={this.state.price}
            onChange={this.updateField}


          />
          <Form.Field
            control={Input}
            label="Type"
            placeholder='Ex.: Dinner'
            name="type"
            value={this.state.type}
            onChange={this.updateField}

          />
        </Form.Group>
        <Form.Field
          id='form-input-control-dish-description'
          control={TextArea}
          label='Description'
          name="description"
          placeholder='A brief description of the dish.'
          value={this.state.description}
          onChange={this.updateField}


        />
        <Form.Field
          id='form-button-control-public'
          control={Button}
          color={this.state.method === "put" ? "yellow" : "green"}
          content={this.state.method === "put" ? "Update" : "Create"}
          onClick={this.handleSubmit}
        />
      </Form>

    );
  }


}



