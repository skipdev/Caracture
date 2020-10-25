import React from "react";
import { stack as Menu } from 'react-burger-menu'
import './burgerMenu.css';
import {Link} from "react-router-dom";
import {Button} from "./Button";

export const BurgerMenu = () => {
    function showSettings(event) {
        event.preventDefault();
    }

    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
        <Menu right pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
            <Link to={"/"} className={'menu-item'}><Button label={'Home'} type={'menu'} active={'home'}/></Link>
            <Link to={"/about"} className={'menu-item'}> <Button label={'About'} type={'menu'}/></Link>
            <Link to={"/services"} className={'menu-item'}> <Button label={'Services'} type={'menu'}/></Link>
            <Link to={"/contact"} className={'menu-item'}> <Button label={'Contact'} type={'menu'}/></Link>
        </Menu>
    );
}
