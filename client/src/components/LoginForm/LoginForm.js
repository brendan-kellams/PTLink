import React from 'react';
import {Modal, Button} from 'react-bootstrap';
import {Form, FormGroup, FormControl, ControlLabel, Col} from 'react-bootstrap';

const LoginForm = props => {
  return (
    <Form horizontal onSubmit={props.handleLogin}>
    <FormGroup controlId="loginEmail">
      <Col componentClass={ControlLabel} md={2}>
        Email
      </Col>
      <Col md={10}>
        <FormControl 
          type="email" 
          placeholder="Email"
          onChange={props.handleChange.bind(this)}
        />
      </Col>
    </FormGroup>
    <FormGroup controlId="loginPassword">
      <Col componentClass={ControlLabel} md={2}>
        Password
      </Col>
      <Col md={10}>
        <FormControl 
          type="password" 
          placeholder="Password"
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
          Login
        </Button>
      </Col>
    </FormGroup>
  </Form>

  )
}

export default LoginForm;