import React from 'react';
import {Modal, Button} from 'react-bootstrap';

const LoginModal = props => {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Login To Your Account</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h1>
          TODO: add login form here
        </h1>
      </Modal.Body>
      <Modal.Footer>
        <Button 
          onClick={props.handleClose}
          bsStyle="primary"
        >
          Login
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default LoginModal;