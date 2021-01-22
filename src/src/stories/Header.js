import React from 'react';
import './header.css';
import {Navbar} from "./Navbar";
import {Logo} from "./Logo";
import PropTypes from "prop-types";

export const Header = ({ active, ...props }) => (
    <header className={'w-full h-full'}>
        <div className={'logo__circle'}></div>
        <div className={'header__navbar--wrapper bg-white w-full h-auto'}>
            <Navbar active={active}/>
        </div>
    </header>
);

Header.propTypes = {
    active: PropTypes.oneOf(['home', 'about', 'services', 'contact']),
};

Header.defaultProps = {
    active: 'home',
};
