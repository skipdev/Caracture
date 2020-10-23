import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './contactmodal.css';
import {ContactForm} from "./ContactForm";
import cursor from '../cursor.png';

export const ContactModal = () => {
  return (
      <div className={'contact-modal'}>
          <ContactForm/>
          <div className={'contact-modal__right'}>
              <span>087787 2309887</span>
              <span><a href="tel:07710486789">Call now</a></span>
              <img src={cursor} alt={'mouse cursor'} className={'contact-modal__cursor'}/>
          </div>
      </div>
  );
}