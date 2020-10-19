import React from 'react';
import './contact.css';
import {Header} from "./Header";
import {ContactModal} from "./ContactModal";

export const Contact = () => {
  return (
    <div
      className={['contact'].join(' ')}
    >
      <div className={'contact__header'}>
        <Header/>
      </div>
      <div className={'whiteBG'}/>
      <div className={'contact__form'}>
        <span className={'contact__title'}>Get In Touch</span>
        <div className={'contact-modal__wrapper'}>
          <ContactModal/>
        </div>
      </div>
    </div>
  );
};