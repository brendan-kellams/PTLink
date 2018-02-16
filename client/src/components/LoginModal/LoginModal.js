import React from 'react';
import {Modal, Button} from 'react-bootstrap';

const LoginModal = props => {
  return (
    <Modal 
    className={props.classes}
    show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Login To Your Account</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.children}
      </Modal.Body>
      <Modal.Footer>
        <Button 
          onClick={props.handleClose}
          bsStyle="danger"
        >
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default LoginModal;