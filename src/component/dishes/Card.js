import React from 'react'
import {Card, Icon, Image, Button, Header, Modal, Container} from 'semantic-ui-react'
import {BrowserRouter as Router} from "react-router-dom";


export default class DishCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "DefaultTerm",
      modalOpen: false
    };
  }

  handleOpen = () => this.setState({ modalOpen: true });
  handleClose = () => this.setState({ modalOpen: false });

  render() {
    return (

      <Router basename="/dishes">
        <div>
          <Card style={{ margin:10, maxHeight:500}} color={"black"}>
            <Image src={this.props.image} style={{width:"100%", maxHeight: 185, objectFit: "cover"}}/>
            <Card.Content>
              <Card.Header>{this.props.name}</Card.Header>
              <Card.Description style={{overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap"}}>{this.props.description}</Card.Description>
            </Card.Content>

            <Modal trigger={
              <Card.Content onClick={this.handleOpen} extra>
                <a><Icon name='plus'/>Details</a>
              </Card.Content>
            }
            onClose={this.handleClose}
            open={this.state.modalOpen}>
              <Modal.Header>Dish Details</Modal.Header>
              <Modal.Content image>
                <Image wrapped size='medium' src={this.props.image}/>
                <Modal.Description>
                  <Header>{this.props.name}</Header>
                  <p >{this.props.description}</p>
                  <p >{this.props.description}</p>
                </Modal.Description>
              </Modal.Content>

              <Modal.Actions>
                <Button color='red' onClick={this.handleClose} inverted>
                  <Icon name='close' /> Close
                </Button>
              </Modal.Actions>
            </Modal>
          </Card>

        </div>
      </Router>
    );
  }
}
