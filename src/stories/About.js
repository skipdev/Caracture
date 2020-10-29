import React from 'react';
import './about.css';
import {Header} from "./Header";
import {Banner} from "./Banner";
import cover2 from '../photos/cover2.jpg';
import {Link} from "react-router-dom";

export const About = () => {
  return (
    <div
      className={['about'].join(' ')}
    >
      <div className={'about__header'}>
        <Header active={'about'}/>
      </div>
      <Banner imgSrc={cover2} imgAlt={'Car'} label={'About Us'}/>
      <div className={'about__row'}>
        <div className={'about__column about__text-wrapper'}>
          <div className={'about__text'}>
            <p>We are a family business based in the South of England.</p>
            <br/>
            <p>All components are carefully sourced and often hand-made in our workshop to suit your requirements.</p>
            <br/>
            <p>We prefer to fit all components to your vehicle at a time and place to suit you</p>
            <br/>
            <p>Please contact us  <Link to={"/contact"}>here</Link> for more details.</p>
            <br/>
          </div>
          <hr/>
        </div>
        <div className={'about__column about__video-wrapper'}>
          <div className={'about__video'}>
            <iframe width="100%" height="100%"
                    src="https://www.youtube.com/embed/pPbHiDCUXGw?autoplay=1&mute=1">
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
};