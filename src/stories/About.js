import React from 'react';
import './about.css';
import {Header} from "./Header";
import {Banner} from "./Banner";
import slide2 from '../slide2.jpg';

export const About = () => {
  return (
    <div
      className={['about'].join(' ')}
    >
      <div className={'homepage__header'}>
        <Header/>
      </div>
      <Banner imgSrc={slide2} imgAlt={'Car'} label={'About Us'}/>
    </div>
  );
};