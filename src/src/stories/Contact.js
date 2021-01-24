import React from 'react';
import './contact.css';
import {Header} from "./Header";
import {ContactModal} from "./ContactModal";
import car from '../car.png';
import {Banner} from './Banner';

export const Contact = () => {
  return (
    <div
      className={['contact w-screen h-screen'].join(' ')}
    >
      <div className={'contact__header w-full h-auto my-2 relative'}>
        <Header active={'contact'}/>
      </div>
      <div className={'homepage__banner fixed h-screen w-auto cover top-0 -z-1'}>
        <Banner imgSrc={'https://images.unsplash.com/photo-1519581472129-9abf8d19f696?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'} imgAlt={'Car'}/>
      </div>
      <div className={'contact__form--wrapper pt-20'}>
        <div className={'contact__form'}>
          <div className={'whiteBG'}/>
          <div className={'contact__top'}>
            <span className={'contact__title'}>Get In Touch</span>
            <img className={'contact__img'} src={car} alt={'range rover car'}/>
          </div>
          <div className={'contact-modal__wrapper'}>
            <ContactModal/>
          </div>
        </div>
      </div>
    </div>
  );
};