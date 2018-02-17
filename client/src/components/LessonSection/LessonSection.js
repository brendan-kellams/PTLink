import React from 'react';
import {Panel} from 'react-bootstrap';

const LessonSection = (props) => {
    return (
        <div>
            <Panel bsStyle={props.bsClass}>
                <Panel.Heading>
                    <Panel.Title componentClass="h1">{props.SectionTitle}</Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                    <p>{props.text}</p>
                </Panel.Body>
            </Panel>
        </div>
    )
}

export default LessonSection;