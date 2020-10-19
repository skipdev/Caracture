import React from 'react';
import './intro.css';
import profile from '../profile.jpg';
import {Button} from "./Button";

export const Intro = () => {
  return (
    <div
      className={['intro'].join(' ')}
    >
      <div className={'intro__left'}>
        <div className={'intro__text'}>
          <span className={'intro__small-text'}>Hello!</span>
          <span className={'intro__large-text'}>I'm Skip Barden</span>
          <span className={'intro__medium-text'}>Website Designer & Developer, and Graphic Artist</span>
          <span className={'intro__xs-text'}>An ambitious Front-end Developer specialising in React.js with complementary knowledge in design and back-end development.</span>
        </div>
        <div className={'intro__buttons'}>
          <Button label={'Download CV'} type={"primary"}/>
          {/*<Button label={'Contact me'} type={"primary"}/>*/}
        </div>
      </div>
      <div className={'intro__right'}>
        <div className={'intro__image_wrapper'}>
          <img src={profile} alt={'cartoon drawing of Skip Barden'}/>
        </div>
      </div>
    </div>
  );
};