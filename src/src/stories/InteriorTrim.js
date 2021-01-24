import React from 'react';
import './services.css';
import {Header} from "./Header";
import {Banner} from "./Banner";
import "react-image-gallery/styles/css/image-gallery.css";
import cover from '../photos/cover.jpeg';
import p1 from '../photos/1.jpg';
import p2 from '../photos/2.jpg';
import p3 from '../photos/3.jpg';
import p4 from '../photos/4.jpg';
import p5 from '../photos/5.jpg';
import p6 from '../photos/6.jpg';
import p7 from '../photos/7.jpg';
import p8 from '../photos/8.jpg';
import p9 from '../photos/9.jpg';
import p10 from '../photos/10.jpg';
import p26 from '../photos/26.jpg';
import p27 from '../photos/27.jpg';
import ImageGallery from 'react-image-gallery';

export const InteriorTrim = () => {
  const images = [
    {
      original: p1,
      thumbnail: p1,
    },
    {
      original: p2,
      thumbnail: p2,
    },
    {
      original: p3,
      thumbnail: p3,
    },
    {
      original: p4,
      thumbnail: p4,
    },
    {
      original: p5,
      thumbnail: p5,
    },
    {
      original: p6,
      thumbnail: p6,
    },
    {
      original: p7,
      thumbnail: p7,
    },
    {
      original: p8,
      thumbnail: p8,
    },
    {
      original: p9,
      thumbnail: p9,
    },
    {
      original: p10,
      thumbnail: p10,
    },
    {
      original: p26,
      thumbnail: p26,
    },
    {
      original: p27,
      thumbnail: p27,
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
        We manufacture and fit Interior trim solutions. Carbon fibre finish is popular but other solutions are available – talk to us. From £450 fitted.
      </div>
      <div className={'services__gallery mb-3'}>
        <ImageGallery items={images} />
      </div>
    </div>
  );
};