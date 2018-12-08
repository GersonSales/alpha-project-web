import React from 'react'
import {Button, Image, Item} from 'semantic-ui-react'
import {Header, Icon, Modal} from 'semantic-ui-react'
import axios from "axios";

const paragraph = <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png'/>;

export default class DishDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {modalOpen: false};
  }

  handleOpen = () => this.setState({modalOpen: true});
  handleClose = () => this.setState({modalOpen: false});

  handleDeletion = event => {
    event.preventDefault();

    axios.delete(`http://localhost:3030/dish/${this.props._id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.handleClose();
      })
  };

  render() {
    return (
      <Item.Group relaxed>
        <Item>
          <Item.Image size='small' src={this.props.image}/>

          <Item.Content verticalAlign='middle'>
            <Item.Header>{this.props.name}</Item.Header>
            <Item.Description>{this.props.description}</Item.Description>
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

