import React from 'react';

const SignUpInput = (props) => {
    return (
        <div className='form-group'>
            <h4> {props.label}</h4>
            <input 
                className='form-control' 
                onChange = {event => props.handleChange(event.target.value)} 
                value={props.value}
            />
        </div>
    )
}
export default SignUpInput;