import React from 'react';
import './homepage.css';
import {Navbar} from "./Navbar";
import {Intro} from "./Intro";
import {MultipleLogoBanner} from "./MultipleLogoBanner";
import {WhiteTransition} from "./WhiteTransition";
import {BlueBlock} from "./BlueBlock";

export const Homepage = () => {
  return (
    <div
      className={['homepage'].join(' ')}
    >
      <div className={'homepage__navbar'}>
        <Navbar/>
      </div>
      <div className={'homepage__intro'}>
        <Intro/>
      </div>
      <div className={'homepage__mlb'}>
        <MultipleLogoBanner type={'brands'}/>
      </div>
      <div className={'homepage__whitebluetransition'}>
        <WhiteTransition/>
      </div>
      <div className={'homepage__blueblock'}>
        <BlueBlock/>
      </div>
    </div>
  );
};