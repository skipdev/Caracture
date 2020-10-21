import React from 'react';
import './about.css';
import {Header} from "./Header";
import {Banner} from "./Banner";
import slide2 from '../slide2.jpg';

export const About = () => {
  return (
    <div
      className={['about'].join(' ')}
    >
      <div className={'about__header'}>
        <Header/>
      </div>
      <Banner imgSrc={slide2} imgAlt={'Car'} label={'About Us'}/>
      <div className={'about__row'}>
        <div className={'about__column about__text-wrapper'}>
          <div className={'about__text'}>
            <p>adsifguaoiudfhpaihgf aghifasdf adfadfa dfa dsfadsuagfha</p>
            <br/>
            <p>adsifguaoiudfhpaihgf aghiuagfh asdfadsf arsdfadsfawef aga gafdga dfga fgafg afgadfg safdgafg ag afdadfad fadsf afa</p>
            <br/>
            <p>adsifguaoiudfhpaihgf aghiuagfh gadsfgafgadsf afdsasdfa fadsfadsfa fa fadsfaf aa</p>
            <br/>
            <p>adsifguaoiudfhpaihgf aghiuagfha</p>
            <br/>
          </div>
        </div>
        <div className={'about__column about__video-wrapper'}>
          <div className={'about__video'}>
            <iframe width="100%" height="100%"
                    src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1">
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
};