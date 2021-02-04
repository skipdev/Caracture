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
      <ControlledCarousel/>
      {/*<div className={'page-1 flex flex-col md:flex-row w-full h-full p-14 z-10 opacity-100'}>
        <div className={'w-full md:w-1/3 h-full justify-center items-center text-left md:text-left text-md lg:text-lg font-semibold text-white z-10'}>
          <h3 className={'underline pb-4'}>
            Illuminated Tread Plates
          </h3>
          <p>
            All of our illuminated tread plates are made to order and available as a front pair or complete set of 4 with individual names.
          </p>
          <p>
            All illuminated tread plates can be retro fitted to ANY Range Rover (2013 on) and ANY Range Rover Sport (2014 on) even if not originally fitted.
          </p>
          <p>
            Available in Carbon fibre, Anodised or Powder coated finishes
          </p>
          <p>
            Prices from £800 a pair
          </p>
        </div>
        <div className={'w-full md:w-2/3 h-full justify-center items-center md:ml-14 z-10 flex flex-col'}>
          <div className={'w-full h-1/3 flex flex-row items-center justify-center'}>
            <video width="100%" height="50vh" style={{"max-height": '50vh !important;'}} controls autoPlay muted>
              <source src={vid} type="video/mp4"/>
            </video>
          </div>
          <div className={'w-full h-1/2 flex flex-row items-center justify-around space-x-4 mt-8'}>
            <div className={'flex flex-col items-center justify-center'}>
              <img src={p11} alt={'carbon fibre treadplate'}/>
              <span className={'text-white text-sm mt-2'}>Carbon Fibre</span>
            </div>
            <div className={'flex flex-col items-center justify-center'}>
              <img src={p12} alt={'anodised treadplate'}/>
              <span className={'text-white text-sm mt-2'}>Anodised</span>
            </div>
            <div className={'flex flex-col items-center justify-center'}>
              <img src={p12} alt={'powder coated treadplate'}/>
              <span className={'text-white text-sm mt-2'}>Powder Coated</span>
            </div>
          </div>
        </div>
      </div>
      <div className={'page-2 flex flex-col md:flex-row w-full h-full p-14 z-10 opacity-100'}>
        <div className={'w-full md:w-1/3 h-full justify-center items-center text-left md:text-left text-md lg:text-lg font-semibold text-white z-10'}>
          <h3 className={'underline pb-4'}>
            Carbon fibre tread plates
          </h3>
          <p>
            These are top of the range tread plates. Hand made in the UK from real carbon fibre they weigh 32% less than the factory fitted aluminium tread plates and look fantastic!
          </p>
          <p>
            Choose your own text, text style and logo on every plate.
          </p>
          <p>
            Easy to fit with full instructions or fitting service available
          </p>
          <p>
            Front pair only £900
            <br/>
            Full set £1150
          </p>
        </div>
        <div className={'w-full md:w-2/3 h-full justify-center items-center md:ml-14 z-10 flex flex-col'}>
          <img src={p11} alt={'carbon fibre treadplate'}/>
        </div>
      </div>
      <div className={'page-3 flex flex-col md:flex-row w-full h-full p-14 z-10 opacity-100'}>
        <div className={'w-full md:w-1/3 h-full justify-center items-center text-left md:text-left text-md lg:text-lg font-semibold text-white z-10'}>
          <h3 className={'underline pb-4'}>
            Anodised tread plates
          </h3>
          <p>
            Anodising is an oxidation process which creates a hard ceramic compound in the surface of the base aluminium material which can also be coloured. Our 3 standard colours are shown but others are available.
          </p>
          <p>
            <b>Anodised plates can also be laser engraved with logos.</b> Choose your own text, text style and logo and engraving on every plate.
          </p>
          <p>
            Easy to fit with full instructions or fitting service available.
          </p>
          <p>
            Front pair only £750
            <br/>
            Full set £900
          </p>
        </div>
        <div className={'w-full md:w-2/3 h-102 justify-center items-center md:ml-14 z-10 flex flex-col'}>
          <div className={'w-full h-full flex flex-row items-center justify-around mt-8'}>
            <div className={'flex flex-col items-center justify-center self-start'}>
              <img src={p11} alt={'red treadplate'}/>
              <span className={'text-white text-sm mt-2'}>Red (with laser engraving)</span>
            </div>
            <div className={'flex flex-col items-center justify-center self-center'}>
              <img src={p12} alt={'gold treadplate'}/>
              <span className={'text-white text-sm mt-2'}>Gold</span>
            </div>
            <div className={'flex flex-col items-center justify-center self-end'}>
              <img src={p12} alt={'grey treadplate'}/>
              <span className={'text-white text-sm mt-2'}>Grey</span>
            </div>
          </div>
        </div>
      </div>
      <div className={'page-4 flex flex-col md:flex-row w-full h-full p-14 z-10 opacity-100'}>
        <div className={'w-full md:w-1/3 h-full justify-center items-center text-left md:text-left text-md lg:text-lg font-semibold text-white z-10'}>
          <h3 className={'underline pb-4'}>
            Carbon fibre tread plates
          </h3>
          <p>
            Powder coating provides a very hard layer to the surface of the base aluminium. These are our lowest cost but hardest wearing tread plate.
          </p>
          <p>
            Our standard colours are shown but others are available.
          </p>
          <p>
            Choose your own text, text style and logo and engraving on every plate.
          </p>
          <p>
            Easy to fit with full instructions or fitting service available
          </p>
          <p>
            Front pair only £650
            <br/>
            Full set £800
          </p>
        </div>
        <div className={'w-full md:w-2/3 h-102 justify-center items-center md:ml-14 z-10 flex flex-col'}>
          <div className={'w-full h-full flex flex-row items-center justify-around mt-8'}>
            <div className={'flex flex-col items-center justify-center self-start'}>
              <img src={p11} alt={'black treadplate'}/>
              <span className={'text-white text-sm mt-2'}>Black</span>
            </div>
            <div className={'flex flex-col items-center justify-center self-center'}>
              <img src={p12} alt={'cream treadplate'}/>
              <span className={'text-white text-sm mt-2'}>Cream (rear plate shown)</span>
            </div>
            <div className={'flex flex-col items-center justify-center self-end'}>
              <img src={p12} alt={'grey treadplate'}/>
              <span className={'text-white text-sm mt-2'}>Grey (rear plate shown)</span>
            </div>
          </div>
        </div>
      </div>
      */}
    </div>
  );
};