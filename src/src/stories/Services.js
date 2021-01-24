import React from 'react';
import './services.css';
import {Header} from "./Header";
import {Banner} from "./Banner";
import "react-image-gallery/styles/css/image-gallery.css";
import cover from '../photos/cover.jpeg';
import p19 from '../photos/19.jpg';
import p3 from '../photos/3.jpg';
import p11 from '../photos/11.jpg';
import p20 from '../photos/20.jpg';
import {Link} from 'react-router-dom';

export const Services = () => {
  return (
    <div
      className={['services w-screen h-screen lg:overflow-y-hidden'].join(' ')}
    >
      <div className={'bg w-screen h-screen fixed -z-1'}>.</div>
      <div className={'services__header w-full h-auto my-2 relative top-0'}>
        <Header active={'services'}/>
      </div>
      <div className={'services__selection w-full px-2 md:px-0 md:w-2/3 h-full justify-center items-center my-0 mx-auto pt-12'}>
        <div className={'flex flex-row h-1/3 w-full mb-16 md:mb-10 justify-around'}>
          <Link to={"/treadplates"} className={'menu__item h-full w-1/2 mr-3'}>
            <div className={'service--wrapper w-full h-full'}>
              <div className={'img w-full h-full cover'}>
                <img className={'w-full h-full'} src={p11} alt={'treadplates'}/>
              </div>
              <p className={'font-primary text-white'}>Illuminated Tread Plates</p>
            </div>
          </Link>
          <Link to={"/lighting"} className={'menu__item h-full w-1/2 ml-3'}>
            <div className={'service--wrapper w-full h-full'}>
              <div className={'img w-full h-full cover'}>
                <img className={'w-full h-full'} src={p20} alt={'lighting'}/>
              </div>
              <p className={'font-primary text-white'}>Lighting</p>
            </div>
          </Link>
        </div>
        <div className={'flex flex-row h-1/3 w-full justify-around'}>
          <Link to={"/interior"} className={'menu__item h-full w-1/2 mr-3'}>
            <div className={'service--wrapper w-full h-full'}>
              <div className={'img w-full h-full cover'}>
                <img className={'w-full h-full'} src={p3} alt={'interior trim'}/>
              </div>
              <p className={'font-primary text-white'}>Interior Trim</p>
            </div>
          </Link>
          <Link to={"/exterior"} className={'menu__item h-full w-1/2 ml-3'}>
            <div className={'service--wrapper w-full h-full'}>
              <div className={'img w-full h-full cover'}>
                <img className={'w-full h-full'} src={p19} alt={'exterior trim'}/>
              </div>
              <p className={'font-primary text-white'}>Exterior Trim</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};