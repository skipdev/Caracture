import React from 'react';
import './services.css';
import {Header} from "./Header";
import {PhotoGallery} from "./PhotoGallery";
import {Banner} from "./Banner";
import cover from '../photos/cover.jpeg';

export const Services = () => {
  return (
    <div
      className={['services'].join(' ')}
    >
      <div className={'services__header'}>
        <Header active={'services'}/>
      </div>
      <div className={'services__banner'}>
        <Banner imgSrc={cover} imgAlt={'Car'} label={'Services'}/>
      </div>
      <div className={'services__text'}>
        You can find examples of our work below. If you want it, we can most likely do it! Don't hesitate to contact us now; we encourage even the craziest ideas and will bring them to life for you.
      </div>
      <div className={'services__gallery'}>
        <PhotoGallery/>
      </div>
    </div>
  );
};