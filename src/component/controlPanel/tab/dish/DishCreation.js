import React from 'react'
import {Form, Input, TextArea, Button, Select} from 'semantic-ui-react'
import axios from "axios";
import ImageUploader from "./../../../../util/ImagesUploader"


export default class DishCreation extends React.Component {
  BASE_URL = "http://localhost:3030/dish";


  constructor(props) {
    super(props);
    this.state = {
      type: "DINNER",
      image: "https://www.dish.co.nz/media/VERSIONS/images/kg_vegestew_article--740x1005.jpg"
    };

  }

  updateField = (event) => {
    this.setState({[event.target.name]: event.target.value});
    console.log(event.target.name + ": " + event.target.value);
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const dish = this.state;
    console.log(dish);

    axios.post(this.BASE_URL, dish)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })

  };


  render() {
    const typeOptions = [
      {key: '1', text: 'Dinner', value: 'dinner'},
      {key: '2', text: 'Lunch', value: 'lunch'},
      {key: '3', text: 'Finger Food', value: 'finger-food'},
    ];


    return (
      <Form>
        <Form.Group widths='equal'>
          <Form.Field
            id='form-input-control-dish-name'
            control={Input}
            label='Name'
            name="name"
            placeholder='Ex.: Taco'
            onChange={this.updateField}
          />
          <Form.Field
            id='form-input-control-dish-price'
            control={Input}
            label='Price'
            name="price"
            placeholder='Ex.: 15,99'
            onChange={this.updateField}

          />
          <Form.Field
            control={Select}
            options={typeOptions}
            label={{children: 'Type', htmlFor: 'form-select-control-type'}}
            placeholder='Ex.: Dinner'
            search
            searchInput={
              {
                id: 'form-select-control-type',
                name: "type"
              }
            }
            name="type"
            onClick={this.updateField}
          />
        </Form.Group>
        <Form.Field
          id='form-input-control-dish-description'
          control={TextArea}
          label='Description'
          name="description"
          placeholder='A brief description of the dish.'
          onChange={this.updateField}

        />
        <Form.Field
          id='form-button-control-public'
          control={Button}
          content='Confirm'
          label='Create the new dish'
          onClick={this.handleSubmit}
        />
        <ImageUploader/>
      </Form>

    );
  }


}



