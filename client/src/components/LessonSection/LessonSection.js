import React from 'react';
import {Panel} from 'react-bootstrap';
import { Helper } from '../../Utils';

const LessonSection = (props) => {
    return (
        <div>
            <Panel bsStyle={props.bsClass}>
                <Panel.Heading>
                    <Panel.Title componentClass="h1">{props.SectionTitle}</Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                    {
                        props.text ? 
                        <p>{props.text}</p> :
                        ''    
                    }
                    {
                        props.link && Helper.isALink(props.link) ?
                        <a href={'//' + props.link} target="_blank">{props.link}</a> :
                        <p>{props.link}</p>
                    }
                </Panel.Body>
            </Panel>
        </div>
    )
}

export default LessonSection;