import React from 'react';
import './header.css';
import {Navbar} from "./Navbar";
import {Logo} from "./Logo";
import PropTypes from "prop-types";

export const Header = ({ active, ...props }) => (
    <header>
        <div className={'header__logo--wrapper'}>
            <Logo/>
        </div>
        <div/>
        <div className={'header__navbar--wrapper'}>
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
