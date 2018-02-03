import React from 'react';
import PropTypes from 'prop-types';

const SignupBtn = props => { 
  return (
    <button className="btn {props.classes}" onClick={(event) => props.handleClick(event)}>{props.btnTxt}</button>
  );
};

SignupBtn.propTypes = {
  classes : PropTypes.string,
  handleClick : PropTypes.func.isRequired,
  btnTxt  : PropTypes.string.isRequired
};

export default SignupBtn;