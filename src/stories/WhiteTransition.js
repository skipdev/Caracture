import React from 'react';
import whiteTransition from '../transition.png';
// import whiteTransitionUpsideDown from '../transition_upsidedown.png';
import './whitetransition.css';
import PropTypes from "prop-types";
import {Button} from "./Button";

export const WhiteTransition = ({ upsideDown, ...props }) => {
  return (
    <img
      className={['whiteTransition',].join(' ')}
      src={whiteTransition}
      alt={'white to blue transition'}>
    </img>
  );
};

WhiteTransition.propTypes = {
  upsideDown: PropTypes.bool
};

Button.defaultProps = {
  upsideDown: false,
};