import React from 'react';

const LessonPlan = (props) => {
    return (
        <div className='card'>
            <h3 className='card-header'>Lesson Plan</h3>
            <div classname='card-block'>
                <input
                    className='form-control'
                    onChange={event => props.handleChange(event.target.value)}
                    value={props.value}
                />
            </div>  
        </div>
    )
}

export default LessonPlan;