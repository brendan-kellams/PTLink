import React from 'react';
import {Panel, ListGroup, ListGroupItem, Button} from 'react-bootstrap';

const ClassPanel = props => {
  return (
    <div className="col-md-3">
      <Panel>
        <Panel.Heading>
          {props.subject} Class
        </Panel.Heading>
        <Panel.Body>
          <ListGroup>
            <ListGroupItem>
              Subject: {props.subject}
            </ListGroupItem>
            <ListGroupItem>
              Period: {props.period}
            </ListGroupItem>
            <ListGroupItem>
              Grade: {props.grade}
            </ListGroupItem>
            <ListGroupItem>
              School Year: {props.schoolyear}
            </ListGroupItem>
            <ListGroupItem>
              School Name: {props.schoolName}
            </ListGroupItem>
          </ListGroup>
        </Panel.Body>
        <Panel.Footer>
          <Button 
            bsStyle="primary"
            onClick={(e) => props.handleClick(e, props.classroomId)}
          >
            Manage Class
          </Button>
        </Panel.Footer>
      </Panel>
    </div>
  )
}

export default ClassPanel;