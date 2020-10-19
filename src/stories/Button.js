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
      className={['storybook-button', `storybook-button--${type}`, `storybook-button--${active && 'active'}`].join(' ')}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  type: PropTypes.oneOf(['primary', 'secondary', 'plain']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  active: PropTypes.bool,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'primary',
  active: false,
  label: 'hi',
  onClick: undefined,
};
