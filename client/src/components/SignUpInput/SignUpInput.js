import React from 'react';

const SignUpInput = (props) => {
    return (
        <div className='form-group'>
            <h4 className="signup-input-label"> {props.label}</h4>
            <input 
                className='form-control' 
                onChange = {event => props.handleChange(event.target.value)} 
                value={props.value}
                placeholder={props.placeholder}
                type={props.type ? props.type : 'text'}
                disabled={props.isDisabled}
            />
        </div>
    )
}
export default SignUpInput;