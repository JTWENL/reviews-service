import React, {useState} from 'react';
import PropTypes from 'prop-types';

const Modal = ({closer, element, className, opacity}) => {

  return (
    <div className={className}>
      <div onClick={closer} className='modal-background'></div>
      <div className={className+'-inner-container'} >
        {element}
      </div>
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
