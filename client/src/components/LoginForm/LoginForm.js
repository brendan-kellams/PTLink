import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Form, FormGroup, FormControl, ControlLabel, Col } from 'react-bootstrap';

const LoginForm = props => {
  return (
    <Form horizontal onSubmit={props.handleLogin} className='error'>
      <span className={props.errorClasses}>Please fill in all the fields</span>
      <FormGroup controlId="loginEmail">
        <Col componentClass={ControlLabel} md={2}>
          Email
      </Col>
        <Col mdOffset={1} md={10} >
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
        <Col mdOffset={1} md={10}>
          <FormControl
            type="password"
            placeholder="Password"
            onChange={props.handleChange.bind(this)}
          />
        </Col>
      </FormGroup>
      <FormGroup>
        <Col mdOffset={1} md={10}>
          <Button
            className="login-btn"
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