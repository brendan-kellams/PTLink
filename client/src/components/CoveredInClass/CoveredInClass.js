import React from 'react';

const CoveredInClass = (props) => {
    return (
        <div className='card'>
            <h3 className='card-header'>Covered In Class</h3>
            <div className='card-block'>
                <p className='card-text'>{props.info}</p>
            </div>
        </div>
    )
}

export default CoveredInClass;