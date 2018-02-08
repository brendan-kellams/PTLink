import React from 'react';
import PropTypes from 'prop-types';

const BasicBtn = props => {
  return (
    <button 
      type={props.type} 
      className={'btn ' + props.classes}>{props.btnTxt}
    </button>
  );
}

BasicBtn.propTypes = {
  classes     : PropTypes.string,
  btnTxt      : PropTypes.string.isRequired
}

export default BasicBtn;