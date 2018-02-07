import React from 'react';

const CheckBox = (props) => {
    return (
        <div>
            <label className="checkbox-inline">
                <input
                    type="checkbox"
                    value={props.value}
                    name={props.name}
                /> {props.label}
            </label>

        </div>
    )
}

export default CheckBox;