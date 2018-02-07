import React from 'react';

const SignUpInput = (props) => {
    return (
        <div className='form-group'>
            <h4> {props.label}</h4>
            <input className='form-control'/>
        </div>
    )
}
export default SignUpInput;