import React from 'react';
import './services.css';
import {Header} from "./Header";
import {PhotoGallery} from "./PhotoGallery";
import {Banner} from "./Banner";
import slide2 from "../slide2.jpg";
import {IconDown} from "./IconDown";

export const Services = () => {
  return (
    <div
      className={['services'].join(' ')}
    >
      <div className={'services__header'}>
        <Header active={'services'}/>
      </div>
      <div className={'services__banner'}>
        <Banner imgSrc={'https://images.unsplash.com/photo-1543523385-138b458f82fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'} imgAlt={'Car'} label={'Services'}/>
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