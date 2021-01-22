import React from 'react';
import logo from '../logo.png';
import './logo.css';

/**
 * Primary UI component for user interaction
 */
export const Logo = () => {
  return (
    <img
      className={['logo w-42 h-28 p-2',].join(' ')}
      src={logo}
      alt={'caracture logo'}>
    </img>
  );
};
