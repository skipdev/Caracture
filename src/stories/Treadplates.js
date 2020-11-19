import React from 'react';
import './services.css';
import {Header} from "./Header";
import {Banner} from "./Banner";
import "react-image-gallery/styles/css/image-gallery.css";
import cover from '../photos/cover.jpeg';
import p11 from '../photos/11.jpg';
import p12 from '../photos/12.jpg';
import p13 from '../photos/13.jpg';
import p14 from '../photos/14.jpg';
import p15 from '../photos/15.jpg';
import p16 from '../photos/16.jpg';
import p17 from '../photos/17.jpg';
import p25 from '../photos/25.jpg';
import tread1 from '../photos/tread1.jpeg';
import tread2 from '../photos/tread2.jpeg';
import ImageGallery from 'react-image-gallery';

export const Treadplates = () => {
  const images = [
    {
      original: p11,
      thumbnail: p11,
    },
    {
      original: p12,
      thumbnail: p12,
    },
    {
      original: p13,
      thumbnail: p13,
    },

    {
      original: tread1,
      thumbnail: tread1,
    },
    {
      original: tread2,
      thumbnail: tread2,
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
    {
      original: p25,
      thumbnail: p25,
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
        <Banner imgSrc={cover} imgAlt={'Car'} label={'Treadplates'}/>
      </div>
      <div className={'services__text'}>
        We manufacture and fit personalised, illuminated treadplates for front and rear in Carbon
        fibre, Anodised and powder coated. Available for Range Rover and Range Rover Sport 2014
        onwards. These can be retro-fitted to ANY vehicle. Fitted from £650.
      </div>
      <div className={'services__gallery'}>
        <ImageGallery items={images} />
      </div>
    </div>
  );
};