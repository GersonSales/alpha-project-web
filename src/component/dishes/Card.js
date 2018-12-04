import React from 'react'
import {Card, Icon, Image} from 'semantic-ui-react'
import {BrowserRouter as Router, Link} from "react-router-dom";

const CardExampleCard = () => (

  <Router forceRefresh={true} basename="/dishes">
    <Card>
      <Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png"/>
      <Card.Content>
        <Card.Header>Matthew</Card.Header>
        <Card.Meta>
          <span className='date'>Joined in 2015</span>
        </Card.Meta>
        <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Link to="/id">
          <Icon name='plus'/>
          Details
        </Link>
      </Card.Content>
    </Card>
  </Router>
);

export default CardExampleCard