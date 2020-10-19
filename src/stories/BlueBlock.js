import React from 'react';
import './blueblock.css';
import PropTypes from "prop-types";

export const BlueBlock = ({ children, ...props }) => {
  return (
    <div className={'BlueBlock'}>
      {children}
    </div>
  );
};

BlueBlock.propTypes = {
  children: PropTypes.node,
};

BlueBlock.defaultProps = {
  children: <div><p>hi</p></div>,
};