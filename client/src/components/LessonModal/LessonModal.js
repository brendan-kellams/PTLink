import React from 'react';
import {Modal, Button} from 'react-bootstrap';

const LessonModal = (props) => {
    return (
        <Modal 
            show={props.show} 
            onHide={props.handleClose}
            className={props.classes}>
            
            <Modal.Header closeButton>
                <Modal.Title>New Lesson</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.children}
            </Modal.Body>
            <Modal.Footer>
                <Button
                    onClick={props.handleClose}
                    bsStyle='danger'
                >
                Cancel
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default LessonModal;