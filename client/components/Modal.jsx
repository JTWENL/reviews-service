import React, {useState} from 'react';
import PropTypes from 'prop-types';

const Modal = ({closer, element, className, opacity}) => {


  let modalBGstyle = {
    minWidth: '1px',
    height: 'auto',
    width: 'auto'
  };

  return (
    <div className={className}>
      <div style={modalBGstyle} className='modal-background'></div>
      {element}
    </div>
  );
};

Modal.defaultProps = {
  className: 'modal-popup',
  opacity: 80
};

Modal.propTypes = {
  element: PropTypes.element.isRequired,
  closer: PropTypes.func.isRequired,
  className: PropTypes.string,
  opacity: PropTypes.number
};
export default Modal;
