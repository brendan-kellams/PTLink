import React from 'react';
import {Panel, ListGroup, ListGroupItem, Button} from 'react-bootstrap';
import './ClassPanel.css';

const ClassPanel = props => {
  return (
    <div className="classroom-panel col-sm-6">
      <Panel>
        <Panel.Heading>
          <i class="fa fa-slideshare"></i> 
          <div className="classroom-name">{props.subject} | Grade {props.grade}</div>
        </Panel.Heading>
        <Panel.Body>
          <ListGroup>
            <ListGroupItem className="classroom-info">
              <span className="class-subject label label-success">{props.subject}</span>
              <span className="class-grade label label-grade">Grade {props.grade}</span>
              <span className="class-period label label-warning">Period {props.period}</span>
            </ListGroupItem>

            {
              props.schoolName ? 
              <ListGroupItem className="school-name">
                {props.schoolName}
              </ListGroupItem>  :
              ''
            }
            {
              props.schoolyear ? 
              <ListGroupItem className="school-year">
                Year: {props.schoolyear}
              </ListGroupItem>  :
              ''
            }
          </ListGroup>
        </Panel.Body>
        <Panel.Footer>
          <Button 
            className="manage-classroom-btn"
            bsStyle="primary"
            onClick={(e) => props.handleClick(e, props.classroomId)}
          >
            Manage Users In Class
          </Button>
        </Panel.Footer>
      </Panel>
    </div>
  )
}

export default ClassPanel;