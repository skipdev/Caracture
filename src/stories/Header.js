import React from 'react';
import './header.css';
import {Navbar} from "./Navbar";
import {Logo} from "./Logo";

export const Header = () => (
    <header>
        <div className={'header__logo--wrapper'}>
            <Logo/>
        </div>
        <div/>
        <div className={'header__navbar--wrapper'}>
            <Navbar/>
        </div>
    </header>
);
