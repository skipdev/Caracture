import React from 'react';
import './services.css';
import {Header} from "./Header";
import {Banner} from "./Banner";
import "react-image-gallery/styles/css/image-gallery.css";
import cover from '../photos/cover.jpeg';
import p18 from '../photos/18.jpg';
import p19 from '../photos/19.jpg';
import p21 from '../photos/21.jpg';
import p24 from '../photos/24.jpg';
import p33 from '../photos/33.jpg';
import p35 from '../photos/35.jpg';
import p40 from '../photos/40.jpg';
import ImageGallery from 'react-image-gallery';

export const ExteriorTrim = () => {
  const images = [
    {
      original: p18,
      thumbnail: p18,
    },
    {
      original: p19,
      thumbnail: p19,
    },
    {
      original: p21,
      thumbnail: p21,
    },
    {
      original: p24,
      thumbnail: p24,
    },
    {
      original: p33,
      thumbnail: p33,
    },
    {
      original: p35,
      thumbnail: p35,
    },
    {
      original: p40,
      thumbnail: p40,
    },
  ]

  return (
    <div
      className={['services'].join(' ')}
    >
      <div className={'services__header'}>
        <Header active={'services'}/>
      </div>
      <div className={'bg w-screen h-screen fixed -z-1'}>.</div>
      <div className={'services__text text-white m-3 my-5'}>
        We manufacture and fit exterior trim solutions including grills, vents and lettering.
      </div>
      <div className={'services__gallery mb-3'}>
        <ImageGallery items={images} />
      </div>
    </div>
  );
};