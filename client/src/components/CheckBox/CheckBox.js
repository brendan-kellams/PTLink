import React from 'react';

const CheckBox = () => {
    return (
        <div className='form-check form-check-inline'>
            <label className='form-check-label'>
                <input className='form-check-input' type='checkbox' value='option1'/>
            </label>
            {/* <label className='form-check-label'>
                <input className='form-check-input' type='checkbox' value='option1'>Parent</input>
            </label> */}
        </div>
    )
}

export default CheckBox;