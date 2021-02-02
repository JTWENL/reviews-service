import React from 'react';
import PropTypes from 'prop-types';

const Selector = ({keys, name, onChange, label}) => {
  return (
      <>
      {label ? <label htmlFor={name}>{label}</label> : null}
      <select onChange={onChange} name={name} >
        {keys.map(k => do {
          if (Array.isArray(k)) {
            let [key, v] = k;
            (<option value={key}>{v}</option>);
          } else {
            (<option value={k}>{k}</option>);
          }
        })}
      </select>
      </>
  );
};

Selector.defaultProps = {
  name: 'generic-selector',
  onChange: () => {}
};

Selector.propTypes = {
  keys: PropTypes.array.isRequired,
  onChange: PropTypes.func,
  name: PropTypes.string,
  label: PropTypes.string,
};

export default Selector;