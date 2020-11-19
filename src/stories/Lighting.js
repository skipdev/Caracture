import React from 'react';
import './services.css';
import {Header} from "./Header";
import {Banner} from "./Banner";
import "react-image-gallery/styles/css/image-gallery.css";
import cover from '../photos/cover.jpeg';
import p14 from '../photos/14.jpg';
import p15 from '../photos/15.jpg';
import p16 from '../photos/16.jpg';
import p17 from '../photos/17.jpg';
import p20 from '../photos/20.jpg';
import p22 from '../photos/22.jpg';
import p37 from '../photos/37.jpg';
import p39 from '../photos/339.jpg';
import ImageGallery from 'react-image-gallery';

export const Lighting = () => {
  const images = [
    {
      original: p20,
      thumbnail: p20,
    },
    {
      original: p39,
      thumbnail: p39,
    },
    {
      original: p37,
      thumbnail: p37,
    },
    {
      original: p14,
      thumbnail: p14,
    },
    {
      original: p15,
      thumbnail: p15,
    },
    {
      original: p16,
      thumbnail: p16,
    },
    {
      original: p17,
      thumbnail: p17,
    },
  ]

  return (
    <div
      className={['services'].join(' ')}
    >
      <div className={'services__header'}>
        <Header active={'services'}/>
      </div>
      <div className={'services__banner'}>
        <Banner imgSrc={cover} imgAlt={'Car'} label={'Lighting'}/>
      </div>
      <div className={'services__text'}>
        We manufacture and fit lighting upgrades for Range Rover Sport 2014 onwards to include sweep indicators as fitted in later models, and badge lit grilles.
      </div>
      <div className={'services__gallery'}>
        <ImageGallery items={images} />
      </div>
    </div>
  );
};