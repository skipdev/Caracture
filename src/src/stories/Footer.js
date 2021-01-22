import React from 'react';
import './footer.css';
import {Navbar} from "./Navbar";
import {Logo} from "./Logo";

export const Footer = () => (
    <footer>
        <div>
            <Logo/>
        </div>
        <div>
            <Navbar/>
        </div>
    </footer>
);
