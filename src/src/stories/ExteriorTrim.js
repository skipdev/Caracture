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
import vid from '../photos/1.mp4';
import p11 from '../photos/11.jpg';
import p12 from '../photos/12.jpg';
import tp13 from '../photos/tp13.png';
import tp32 from '../photos/tp32.png';
import tp43 from '../photos/tp43.png';

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
      <div className={'page-3 flex flex-col md:flex-row w-full h-full p-14 z-10 opacity-100'}>
        <div className={'w-full md:w-1/3 h-full justify-center items-center text-left md:text-left text-md lg:text-lg font-semibold text-white z-10'}>
          <h3 className={'underline pb-4'}>
            Exterior Trim
          </h3>
          <p>
            All of our exterior trim components are original plastic parts hydro dipped and lacquered with Automotive standard, hard clear coat.
          </p>
          <p>
            Most components can be coated and do not have to be in carbon fibre finish.
          </p>
          <p>
            Contact us to discuss
          </p>
          <p>
            All products come with fitting instruction
          </p>
        </div>
        <div className={'w-full md:w-2/3 h-50vh justify-center items-center md:ml-14 z-10 flex flex-col'}>
          <div className={'w-full h-full flex flex-row items-center justify-around mt-8'}>
            <div className={'flex flex-col items-center justify-center self-start w-1/3 m-2'}>
              <img className={'h-40 w-full object-cover'} src={p21} alt={'Replacement mirror caps'}/>
              <span className={'text-white text-sm mt-2'}>Replacement mirror caps - £70/pair</span>
            </div>
            <div className={'flex flex-col items-center justify-center self-center w-1/3 m-2'}>
              <img className={'h-40 w-full object-cover'} src={p40} alt={'Bonnet grills'}/>
              <span className={'text-white text-sm mt-2'}>Bonnet grills - £130/pair</span>
            </div>
            <div className={'flex flex-col items-center justify-center self-end w-1/3 m-2'}>
              <img className={'h-40 w-full object-cover'} src={p19} alt={'Side vents'}/>
              <span className={'text-white text-sm mt-2'}>Side vents - £105/pair</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};