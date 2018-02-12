import React from 'react';


const CheckBox = (props) => {
    return (
        <div>
            <label className='checkbox-inline'>
                <input
                    type='checkbox'
                    checked={props.value}
                    value={props.name}
                    name={props.name}
                    onChange={event => props.handleChange(event.target.checked)}
                /> {props.label}
            </label>

        </div>
    )
}

export default CheckBox;