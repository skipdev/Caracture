import React from 'react';
import './navbar.css';
import { Button } from './Button';
import { BurgerMenu } from './BurgerMenu';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import {Logo} from './Logo';
import {Icon} from './Icon';
import mail from '../mail.png';
import phone from '../phone.png';
import fb from '../fb.png';
import insta from '../insta.png';

export const Navbar = ({ active, ...props }) => {
    return (
      <div
          type="navbar"
          className={['na w-full h-full flex flex-col md:flex-row justify-between relative px-2', `navbar__active-${active}`].join(' ')}
          {...props}
      >
          <div className={'navbar__logo--wrapper h-11/12 w-full md:w-1/3 lg:w-1/4 lg:ml-6 flex flex-row justify-center items-center'}>
              <Logo/>
          </div>
          <div className={'flex flex-col p-3 py-6 my-1 w-full md:w-3/4'}>
              <ol className={'flex flex-col mb-6 md:mb-0 md:flex-row space-x-3 md:space-x-7 w-full h-1/2 justify-center items-center'}>
                  <li><a href="mailto:info@caracture.com" className={'text-blue-800 font-bold text-xs md:text-md lg:text-lg flex flex-row justify-center items-center space-x-3'}>
                      <Icon src={mail} alt={'mail icon'}/>
                      <span>info@caracture.com</span>
                  </a></li>
                  <li><a href="tel:02392233900" className={'text-blue-800 font-bold text-xs md:text-md lg:text-lg  flex flex-row justify-center items-center space-x-3'}>
                      <Icon src={phone} alt={'phone icon'}/>
                      <span>023 9223 3900</span>
                  </a></li>
                  <li className={'text-blue-800 font-bold text-xs md:text-md lg:text-lg  flex flex-row justify-center items-center space-x-3'}>
                      <Icon src={fb} alt={'facebook logo'}/>
                      <Icon src={insta} alt={'instagram logo'}/>
                      <span>caracture_ltd</span>
                  </li>
              </ol>
              <div className={'navbar__buttons w-full h-1/2 flex flex-row justify-center items-center space-x-4 md:space-x-8 lg:space-x-16 text-xs md:text-lg lg:text-2xl'}>
                  <Link to={"/"}><Button label={'Home'} type={'plain'}/></Link>
                  <Link to={"/about"}> <Button label={'About Us'} type={'plain'}/></Link>
                  <Link to={"/services"}> <Button label={'Fitting'} type={'plain'}/></Link>
                  <Link to={"/contact"}> <Button label={'Contact'} type={'plain'}/></Link>
              </div>
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
