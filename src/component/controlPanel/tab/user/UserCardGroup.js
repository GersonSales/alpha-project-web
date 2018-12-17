import React from "react";
import {Card, Button, Image} from "semantic-ui-react";
import {getAllUsers} from "./../../../auth/Router"

export default class UserCardGroup extends React.Component {
  render() {
    return (

      <Card.Group>{getAllUsers().map((user) =>
        <Card>
          <Card.Content>
            <Card.Header>{user.firstName.concat(" ").concat(user.lastName)}</Card.Header>
            <Card.Meta>Friends of Elliot</Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <div className='ui one buttons'>
              <Button basic color='red'>
                Delete
              </Button>
            </div>
          </Card.Content>
        </Card>
      )}
      </Card.Group>
    );
  }
}