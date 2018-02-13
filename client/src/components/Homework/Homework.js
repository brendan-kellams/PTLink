import React from 'react';

const Homework = (props) => {
    return(
        <div className='card'>
            <h3 className='card-header'>Homework</h3>
            <div className='card-block'>
                <input
                    className='form-control'
                    onChange={event => props.handleChange(event.target.value)}
                    value={props.value}
                />
            </div>
        </div>
    )
}

export default Homework;