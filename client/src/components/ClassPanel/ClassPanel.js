import React from 'react';
import {Panel, ListGroup, ListGroupItem, Button} from 'react-bootstrap';

const ClassPanel = props => {
  return (
    <div className="col-md-3">
      <Panel>
        <Panel.Heading>
          English Class
        </Panel.Heading>
        <Panel.Body>
          <ListGroup>
            <ListGroupItem>
              Subject: English
            </ListGroupItem>
            <ListGroupItem>
              Period: 4
            </ListGroupItem>
            <ListGroupItem>
              Grade: 7
            </ListGroupItem>
            <ListGroupItem>
              School Year: 2017
            </ListGroupItem>
            <ListGroupItem>
              School Name: Kearny High
            </ListGroupItem>
          </ListGroup>
        </Panel.Body>
        <Panel.Footer>
          <Button bsStyle="primary">
            Manage Class
          </Button>
        </Panel.Footer>
      </Panel>
    </div>
  )
}

export default ClassPanel;