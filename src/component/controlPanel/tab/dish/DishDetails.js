import React from 'react'
import {Button, Header, Icon,  Item, Modal} from 'semantic-ui-react'
import axios from "axios";
import DishForm from "./DishForm"

export default class DishDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      name: props.name,
      description: props.description,
      price: props.price,
      type: props.type
    };
  }

  handleOpen = () => this.setState({modalOpen: true});
  handleClose = () => this.setState({modalOpen: false});

  handleDeletion = event => {
    event.preventDefault();

    axios.delete(`http://localhost:3030/dish/${this.props._id}`)
      .then(res => {
        this.handleClose();
      })
  };

  render() {
    return (
      <Item.Group relaxed>
        <Item>
          <Item.Image size='small' src={this.props.image}/>

          <Item.Content verticalAlign='middle'>
            <DishForm method={"put"} {...this.props}/>
            <Item.Extra>
              <Modal trigger={<Button
                onClick={this.handleOpen}
                color={"red"}>Delete</Button>}
                     basic size='small'
                     onClose={this.handleClose}
                     open={this.state.modalOpen}>

                <Header icon='trash alternate' content={"Delete " + this.props.name}/>
                <Modal.Content>
                  <p>
                    Do you really want to remove this dish from server?
                  </p>
                </Modal.Content>
                <Modal.Actions>
                  <Button basic color='red' inverted onClick={this.handleClose}>
                    <Icon name='remove'/> No
                  </Button>
                  <Button color='green' inverted onClick={this.handleDeletion}>
                    <Icon name='checkmark'/> Yes
                  </Button>
                </Modal.Actions>
              </Modal>


            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>);
  }
}

