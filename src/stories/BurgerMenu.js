import React, { useState, useCallback } from "react";
import { HamburgerSqueeze } from 'react-animated-burgers';
import './burgerMenu.css';
import {Link} from "react-router-dom";
import {Button} from "./Button";

export const BurgerMenu = () => {
    const [isActive, setIsActive] = useState(false)

    const toggleButton = useCallback(
        () => setIsActive(prevState => !prevState),
        [],
    )

    let toggleMenu = () => {
        if (isActive) {
            document.querySelector('.menu__overlay').style.display = 'none';
        } else {
            document.querySelector('.menu__overlay').style.display = 'flex';
        }
    }

    return (
        <div className={'hamburger__wrapper'} onClick={toggleMenu}>
            <HamburgerSqueeze
                buttonColor="#FFBC67"
                barColor="white"
                {...{ isActive, toggleButton }}
            />
            <div className={'menu__overlay'}>
                <div className={'menu__wrapper'}>
                    <Link to={"/"} className={'menu__item'}><Button label={'Home'} type={'menu'} active={'home'}/></Link>
                    <Link to={"/about"} className={'menu__item'}> <Button label={'About'} type={'menu'}/></Link>
                    <Link to={"/services"} className={'menu__item'}> <Button label={'Services'} type={'menu'}/></Link>
                    <Link to={"/contact"} className={'menu__item'}> <Button label={'Contact'} type={'menu'}/></Link>
                </div>
            </div>
        </div>
    )
}
