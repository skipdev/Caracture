import React from 'react';
import './navbar.css';
import { Button } from './Button';

export const Navbar = ({ label, ...props }) => {
  return (
      <navbar
          type="navbar"
          className={['navbar'].join(' ')}
          {...props}
      >
          {/*TODO make an array of buttons as the prop, loop through here */}
          <Button label={'About me'} type={'plain'}/>
          <Button label={'Timeline'} type={'plain'}/>
          <Button label={'Work'} type={'plain'}/>
          <Button label={'Contact me'} type={'plain'}/>
          <Button label={'Download CV'} type={'primary'}/>
      </navbar>
  );
};
