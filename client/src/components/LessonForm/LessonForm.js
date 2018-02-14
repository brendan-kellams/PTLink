import React from 'react';
import {Modal, Button} from 'react-bootstrap';
import {Form, FormGroup, FormControl, ControlLabel, Col} from 'react-bootstrap';

const LessonForm = props => {
  return (
    <Form horizontal onSubmit={props.handleLogin}>
    <FormGroup controlId="lessonplan">
      <Col componentClass={ControlLabel} md={2}>
        Plan
      </Col>
      <Col md={10}>
        <FormControl 
          type="link" 
          placeholder="Lesson Plan"
          onChange={props.handleChange.bind(this)}
        />
      </Col>
    </FormGroup>
    <FormGroup controlId="Topics">
      <Col componentClass={ControlLabel} md={2}>
        Topics
      </Col>
      <Col md={10}>
        <FormControl 
          type="topics" 
          placeholder="Topics"
          onChange={props.handleChange.bind(this)}
        />
      </Col>
    </FormGroup>
    <FormGroup controlId="Homework">
      <Col componentClass={ControlLabel} md={2}>
        Homework
      </Col>
      <Col md={10}>
        <FormControl 
          type="homework" 
          placeholder="Homework"
          onChange={props.handleChange.bind(this)}
        />
      </Col>
    </FormGroup>
    <FormGroup>
      <Col mdOffset={2} md={10}>
        <Button 
          type="submit"
          bsStyle="primary"
        >
          Submit
        </Button>
      </Col>
    </FormGroup>
  </Form>

  )
}

export default LessonForm;