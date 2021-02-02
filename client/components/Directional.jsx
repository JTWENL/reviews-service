import React, {useState} from 'react';
import PropTypes from 'prop-types';

// default is a reserved keyword haha
const Directional = ({onClick, dFault}) => {
  let [up, flip] = useState(dFault);
  let toggle = () => {
    onClick(up);
    flip(!up);
  };
  return (<div onClick={toggle} className='directional'>
            {up ? '⌃' : '⌄' }
          </div>
         );
};

Directional.defaultProps = {
  dFault: true
};

Directional.propTypes = {
  onClick: PropTypes.func.isRequired,
  dFault: PropTypes.bool
};

export default Directional;
