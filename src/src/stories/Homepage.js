import React from 'react';
import {Header} from "./Header";
import {Banner} from './Banner';
import cover from '../photos/cover.jpeg';
import {Link} from 'react-router-dom';
import p11 from '../photos/11.jpg';
import p20 from '../photos/20.jpg';
import p3 from '../photos/3.jpg';
import p19 from '../photos/19.jpg';

export const Homepage = () => {
  return (
    <div
      className={['homepage w-screen h-screen lg:overflow-y-hidden'].join(' ')}
    >
      <div className={'homepage__header w-full h-auto my-2 relative z-10 text-white'}>
        <Header active={'home'}/>
      </div>
      <div className={'bg w-screen h-screen fixed -z-1'}>.</div>
      {/*<div className={'homepage__banner fixed h-screen w-auto cover top-0 z-0'}>*/}
      {/*  <Banner imgSrc={'https://images.unsplash.com/photo-1519581472129-9abf8d19f696?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'} imgAlt={'Car'}/>*/}
      {/*</div>*/}
      <div className={'flex flex-col md:flex-row w-full h-full p-14 z-10 opacity-100'}>
        <div className={'w-full md:w-1/3 h-full justify-center items-center text-left md:text-left text-lg font-semibold text-white z-10'}>
          <p>
            Caracture are specialists in Range Rover / Sport enhancement, customisation and personalisation. Our tailor-made tread plates, grills and trim will set your vehicle aside and make it truly yours!
          </p>
          <p>
            All of our products are bespoke manufactured in our Hampshire facility using some specialist suppliers. We use high tech materials, finishes and processes and are experienced in the use of carbon fibre, anodising, powder coatings and hydro dipping.
          </p>
        </div>
        <div className={'services__selection w-full md:w-2/3 h-full justify-center items-center md:ml-14 z-10'}>
          <div className={'flex flex-row h-1/3 w-full mb-10 justify-around'}>
            <Link to={"/treadplates"} className={'menu__item h-full w-1/2 mr-3'}>
              <div className={'service--wrapper w-full h-full'}>
                <div className={'img w-full h-full'}>
                  <img className={'w-full h-full object-cover'} src={p11} alt={'treadplates'}/>
                </div>
                <p className={'font-primary text-white text-sm md:text-md'}>Illuminated Tread Plates</p>
              </div>
            </Link>
            <Link to={"/lighting"} className={'menu__item h-full w-1/2 ml-3'}>
              <div className={'service--wrapper w-full h-full'}>
                <div className={'img w-full h-full'}>
                  <img className={'w-full h-full object-cover'} src={p20} alt={'lighting'}/>
                </div>
                <p className={'font-primary text-white text-sm md:text-md'}>Lighting</p>
              </div>
            </Link>
          </div>
          <div className={'flex flex-row h-1/3 w-full justify-around'}>
            <Link to={"/interior"} className={'menu__item h-full w-1/2 mr-3'}>
              <div className={'service--wrapper w-full h-full'}>
                <div className={'img w-full h-full'}>
                  <img className={'w-full h-full object-cover'} src={p3} alt={'interior trim'}/>
                </div>
                <p className={'font-primary text-white text-sm md:text-md'}>Interior Trim</p>
              </div>
            </Link>
            <Link to={"/exterior"} className={'menu__item h-full w-1/2 ml-3'}>
              <div className={'service--wrapper w-full h-full'}>
                <div className={'img w-full h-full'}>
                  <img className={'w-full h-full object-cover'} src={p19} alt={'exterior trim'}/>
                </div>
                <p className={'font-primary text-white text-sm md:text-md'}>Exterior Trim</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};