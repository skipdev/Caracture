import React from 'react';
import './navbar.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

export const Navbar = ({ label, ...props }) => {
    return (
      <navbar
          type="navbar"
          className={['navbar'].join(' ')}
          {...props}
      >
          {/*TODO make an array of buttons as the prop, loop through here */}
          <div className={'navbar__buttons'}>
              <Link to={"/"}><Button label={'Home'} type={'plain'} active={true}/></Link>
              <Link to={"/about"}> <Button label={'About'} type={'plain'}/></Link>
              <Link to={"/services"}> <Button label={'Services'} type={'plain'}/></Link>
              <Link to={"/contact"}> <Button label={'Contact'} type={'plain'}/></Link>
          </div>
      </navbar>
  );
};
