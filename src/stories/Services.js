import React from 'react';
import './services.css';
import {Header} from "./Header";
import {Banner} from "./Banner";
import "react-image-gallery/styles/css/image-gallery.css";
import cover from '../photos/cover.jpeg';
import pjimg from '../pjimage.jpeg';
import p3 from '../photos/3.jpg';
import p11 from '../photos/11.jpg';
import p20 from '../photos/20.jpg';
import {Link} from 'react-router-dom';

export const Services = () => {
  return (
    <div
      className={['services'].join(' ')}
    >
      <div className={'services__header'}>
        <Header active={'services'}/>
      </div>
      <div className={'services__banner'}>
        <Banner imgSrc={cover} imgAlt={'Car'} label={'Services'}/>
      </div>
      <div className={'services__selection'}>
        <div className={'services__selection--row'}>
          <Link to={"/treadplates"} className={'menu__item'}>
            <div className={'service--wrapper'}>
              <img src={p11} alt={'treadplates'}/>
              <p>Treadplates</p>
            </div>
          </Link>
          <Link to={"/lighting"} className={'menu__item'}>
            <div className={'service--wrapper'}>
              <img src={p20} alt={'lighting'}/>
              <p>Lighting</p>
            </div>
          </Link>
        </div>
        <div className={'services__selection--row'}>
          <Link to={"/interior"} className={'menu__item'}>
            <div className={'service--wrapper'}>
              <img src={p3} alt={'interior trim'}/>
              <p>Interior Trim</p>
            </div>
          </Link>
          <Link to={"/exterior"} className={'menu__item'}>
            <div className={'service--wrapper'}>
              <img src={pjimg} alt={'exterior trim'}/>
              <p>Exterior Trim</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};