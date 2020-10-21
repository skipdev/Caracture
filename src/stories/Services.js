import React from 'react';
import './services.css';
import {Header} from "./Header";
import {PhotoGallery} from "./PhotoGallery";
import {Banner} from "./Banner";
import slide2 from "../slide2.jpg";

export const Services = () => {
  return (
    <div
      className={['services'].join(' ')}
    >
      <div className={'services__header'}>
        <Header/>
      </div>
      <div className={'services__banner'}>
        <Banner imgSrc={slide2} imgAlt={'Car'} label={'Services'}/>
      </div>
      <div className={'services__gallery'}>
        <PhotoGallery/>
      </div>
    </div>
  );
};