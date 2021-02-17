import React from 'react';
import './services.css';
import {Header} from "./Header";
import "react-image-gallery/styles/css/image-gallery.css";
import {ControlledCarousel} from "./Carousel";
import {Link} from 'react-router-dom';

export const Treadplates = () => {

  return (
    <div
      className={['services lg:overflow-y-hidden'].join(' ')}
    >
      <div className={'services__header'}>
        <Header active={'services'}/>
      </div>
      <div className={'bg w-screen h-screen fixed -z-1'}>.</div>
      <div className={'mx-8 my-4'}>
        <ControlledCarousel/>
      </div>
    </div>
  );
};