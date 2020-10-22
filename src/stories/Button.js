import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ type, label, active, ...props }) => {
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${label.toLowerCase()}`, `storybook-button--${type}`].join(' ')}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary', 'plain']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'primary',
  label: 'hi',
  onClick: undefined,
};
