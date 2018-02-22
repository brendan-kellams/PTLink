import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Form, FormGroup, FormControl, ControlLabel, Col } from 'react-bootstrap';

const LessonForm = props => {
  return (
    <Form horizontal onSubmit={props.handleLogin}>
      <FormGroup controlId="lessondate">
        <Col componentClass={ControlLabel} md={12}>
          Lesson Date
        </Col>
        <Col md={12}>
          <FormControl
            type="date"
            placeholder="Lesson Date"
            onChange={event => props.handleChange('lessondate', event.target.value)}
            value={props.value.lessondate} />
        </Col>
      </FormGroup>
      <FormGroup controlId="link">
        <Col componentClass={ControlLabel} md={12}>
          Lesson Plan
                </Col>
        <Col md={12}>
          <FormControl
            componentClass='textarea'
            type="link"
            placeholder="Lesson Plan (URL)"
            onChange={event => props.handleChange('link', event.target.value)}
            value={props.value.link} />
        </Col>
      </FormGroup>
      <FormGroup controlId="topics">
        <Col componentClass={ControlLabel} md={12}>
          Topics
        </Col>
        <Col md={12}>
          <FormControl
            componentClass='textarea'
            type="topics"
            placeholder="Topics"
            onChange={event => props.handleChange('topics', event.target.value)}
            value={props.value.topics} />
        </Col>
      </FormGroup>
      <FormGroup controlId="homework">
        <Col componentClass={ControlLabel} md={12}>
          Homework
        </Col>
        <Col md={12}>
          <FormControl
            componentClass='textarea'
            type="homework"
            placeholder="Homework"
            onChange={event => props.handleChange('homework', event.target.value)}
            value={props.value.homework} />
        </Col>
      </FormGroup>
      <FormGroup controlId="duedate">
        <Col componentClass={ControlLabel} md={12}>
          Due Date
                </Col>
        <Col md={12}>
          <FormControl
            type="date"
            placeholder="Due Date"
            onChange={event => props.handleChange('duedate', event.target.value)}
            value={props.value.duedate} />
        </Col>
      </FormGroup>
      <FormGroup>
        <Col mdOffset={0} md={12}>
          <Button
            className="add-new-day"
            type="submit"
            bsStyle="primary"
            onClick={props.handleSubmit.bind(this)}>
            Submit
                    </Button>
        </Col>
      </FormGroup>
    </Form>

  )
}

export default LessonForm;