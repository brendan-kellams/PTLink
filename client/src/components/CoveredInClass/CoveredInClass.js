import React from 'react';
import SignUpInput from '../SignUpInput'

const CoveredInClass = (props) => {
    return (
        <div className='card'>
            <h3 className='card-header'>Covered In Class</h3>
            <div className='card-block'>
            <input 
                className='form-control' 
                onChange = {event => props.handleChange(event.target.value)} 
                value={props.value}
            />
            </div>
        </div>
    )
}

export default CoveredInClass;