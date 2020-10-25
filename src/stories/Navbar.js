import React from 'react';
import './navbar.css';
import { Button } from './Button';
import { BurgerMenu } from './BurgerMenu';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";

export const Navbar = ({ active, ...props }) => {
    return (
      <div
          type="navbar"
          className={['navbar', `navbar__active-${active}`].join(' ')}
          {...props}
      >
          {/*TODO make an array of buttons as the prop, loop through here */}
          <div className={'navbar__buttons'}>
              <Link to={"/"}><Button label={'Home'} type={'plain'}/></Link>
              <Link to={"/about"}> <Button label={'About'} type={'plain'}/></Link>
              <Link to={"/services"}> <Button label={'Services'} type={'plain'}/></Link>
              <Link to={"/contact"}> <Button label={'Contact'} type={'plain'}/></Link>
          </div>
          <div className={'navbar__burgermenu'}>
              <BurgerMenu/>
          </div>
      </div>
  );
};

Navbar.propTypes = {
    active: PropTypes.oneOf(['home', 'about', 'services', 'contact']),
};

Navbar.defaultProps = {
    active: 'home',
};
