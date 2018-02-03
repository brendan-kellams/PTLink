import React from 'react';
import PropTypes from 'prop-types';

SignupBtn.propTypes = {
  classes : PropTypes.string,
  onClick : PropTypes.func.isRequired,
  btnTxt  : PropTypes.string.isRequired
}

const SignupBtn = props => {
  return (
    <button className="btn {props.classes}" onClick={(event) => props.handleClick(event)}>{props.btnTxt}</button>
  );
}

export default SignupBtn;