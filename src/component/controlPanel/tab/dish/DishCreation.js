import React from 'react'
import {Form, Input, TextArea, Button, Select} from 'semantic-ui-react'

export default class DishCreation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: "",
      type: "",
      description: ""
    };
  }

  createDish(opts) {
    fetch('https://api.github.com/gists', {
      method: 'post',
      body: JSON.stringify(opts)
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
    });
  }


  render() {
    const submitDish = () => {
      const name = document.querySelector('form-input-control-dish-name').value;
      if (name) {
        this.createDish({
          description: 'Fetch API Post example',
          public: true,
          files: {
            'test.js': {
              name: name
            }
          }
        });
      } else {
      }
    };


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
            placeholder='Ex.: Taco'
          />
          <Form.Field
            id='form-input-control-dish-type'
            control={Input}
            label='Price'
            placeholder='Ex.: 15,99'
          />
          <Form.Field
            control={Select}
            options={typeOptions}
            label={{children: 'Type', htmlFor: 'form-select-control-gender'}}
            placeholder='Ex.: Dinner'
            search
            searchInput={{id: 'form-select-control-gender'}}
          />
        </Form.Group>
        <Form.Field
          id='form-textarea-control-opinion'
          control={TextArea}
          label='Description'
          placeholder='A brief description of the dish.'
        />
        <Form.Field
          id='form-button-control-public'
          control={Button}
          content='Confirm'
          label='Create the new dish'
          as={submitDish}
        />
      </Form>
    );
  }


}



