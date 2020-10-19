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
          <div className={'navbar__buttons'}>
              <Button label={'Home'} type={'plain'} active={true}/>
              <Button label={'About'} type={'plain'}/>
              <Button label={'Services'} type={'plain'}/>
              <Button label={'Contact'} type={'plain'}/>
          </div>
      </navbar>
  );
};
