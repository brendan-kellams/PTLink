import React from 'react';
import { Row } from 'react-bootstrap';
import {Glyphicon} from 'react-bootstrap';

const ClassDiv = (props) => {
    return (
        <div className='row'>
            <div className='col-sm-6 col-md-4 col-lg-3'>
                <div className='thumbnail'>
                        <div className='caption'>
                            <h3>{props.ClassTitle}</h3>
                            <p>{props.description}</p>
                            <div>
                                <span className='glphicon glyphicon-book'></span>
                            </div>
                            <p><a href={props.link} className='btn btn-primary' role='button'>Enter Class</a></p>
                        </div>
                </div>
            </div>
        </div>
            )
        }
                    
export default ClassDiv;