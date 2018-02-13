import React from 'react';


const Radio = (props) => {
  return (
    <div>
      <label className='radio-inline'>
        <input
          type='radio'
          checked={props.value}
          value={props.name}
          name={props.name}
          onChange={event => {
            console.log(event.target.value)
            props.handleChange(event.target.value)
          }}
        /> {props.label}
      </label>
    </div>
  )
}

export default Radio;