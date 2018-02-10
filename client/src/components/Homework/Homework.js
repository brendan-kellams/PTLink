import React from 'react';

const Homework = (props) => {
    return(
        <div className='card'>
            <h3 className='card-header'>Homework</h3>
            <div className='card-block'>
                <p className='card-text'>{props.info}</p>
            </div>
        </div>
    )
}

export default Homework;