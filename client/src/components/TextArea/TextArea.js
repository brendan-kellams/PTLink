import React from 'react';

const TextArea = (props) => {
    return (
        <div className='form-group'>
            <label>{props.label}</label>
            <textarea className='form-control' rows='3'></textarea>
        </div>
    )

}

export default TextArea;