import React from 'react';
import { Row } from 'react-bootstrap';

import './ClassDiv.css';

const ClassDiv = (props) => {
    return (
        <div className='class-div col-sm-6 col-md-4 col-lg-3'>
            <div className='thumbnail'>
                    <div className='caption'>
                        <h3 className="class-title">{props.ClassTitle}</h3>
                        <p>{props.description}</p>
                        <p><a href={props.link} className='btn btn-primary' role='button'>Enter Class</a></p>
                    </div>
            </div>
        </div>
    )
}
                    
export default ClassDiv;