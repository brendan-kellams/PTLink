import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Form, FormGroup, FormControl, ControlLabel, Col } from 'react-bootstrap';

const LessonForm = props => {
    return (
        <Form horizontal onSubmit={props.handleLogin}>
            <FormGroup controlId="link">
                <Col componentClass={ControlLabel} md={2}>
                    Plan
                </Col>
                <Col md={10}>
                    <FormControl
                        type="link"
                        placeholder="Lesson Plan"
                        onChange={event => props.handleChange(event.target.value)}
                        value={props.value}/>
                </Col>
            </FormGroup>
            <FormGroup controlId="topics">
                <Col componentClass={ControlLabel} md={2}>
                    Topics
                </Col>
                <Col md={10}>
                    <FormControl
                        type="topics"
                        placeholder="Topics"
                        onChange={event => props.handleChange(event.target.value)}
                        value={props.value}/>
                </Col>
            </FormGroup>
            <FormGroup controlId="homework">
                <Col componentClass={ControlLabel} md={2}>
                    Homework
                </Col>
                <Col md={10}>
                    <FormControl
                        type="homework"
                        placeholder="Homework"
                        onChange={event => props.handleChange(event.target.value)}
                        value={props.value}/>
                </Col>
            </FormGroup>
            <FormGroup controlId="duedate">
                <Col componentClass={ControlLabel} md={2}>
                    Due Date
                </Col>
                <Col md={10}>
                    <FormControl
                        type="duedate"
                        placeholder="Due Date"
                        onChange={event => props.handleChange(event.target.value)}
                        value={props.value}/>
                </Col>
            </FormGroup>
            <FormGroup>
                <Col mdOffset={2} md={10}>
                    <Button
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