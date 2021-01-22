import React from 'react';
import './contact.css';
import {Header} from "./Header";
import {ContactModal} from "./ContactModal";
import car from '../car.png';

export const Contact = () => {
  return (
    <div
      className={['contact w-screen h-screen'].join(' ')}
    >
      <div className={'contact__header w-full h-auto py-2 relative'}>
        <Header active={'contact'}/>
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