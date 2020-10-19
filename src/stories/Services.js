import React from 'react';
import './services.css';
import {Header} from "./Header";

export const Services = () => {
  return (
    <div
      className={['services'].join(' ')}
    >
      <div className={'services__header'}>
        <Header/>
      </div>
      <h1>Services Page</h1>
    </div>
  );
};