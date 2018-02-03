import React from 'react';
import PropTypes from 'prop-types';

const BasicBtn = props => {
  return (
    <button className={'btn ' + props.classes} 
    onClick={props.handleClick}>{props.btnTxt}</button>
  );
}

BasicBtn.propTypes = {
  classes     : PropTypes.string,
  handleClick : PropTypes.func.isRequired,
  btnTxt      : PropTypes.string.isRequired
}

export default BasicBtn;