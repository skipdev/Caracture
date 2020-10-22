import React from 'react';
import './homepage.css';
import {Header} from "./Header";
import {ControlledCarousel} from "./Carousel";

export const Homepage = () => {
  return (
    <div
      className={['homepage'].join(' ')}
    >
      <div className={'homepage__header'}>
        <Header active={'home'}/>
      </div>
      <div className={'homepage__carousel'}>
        <ControlledCarousel/>
      </div>
    </div>
  );
};