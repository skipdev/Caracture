import React from 'react';
import './about.css';
import {Header} from "./Header";

export const About = () => {
  return (
    <div
      className={['about'].join(' ')}
    >
      <div className={'homepage__header'}>
        <Header/>
      </div>
      <h1>about</h1>
    </div>
  );
};