import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './contactmodal.css';
import {ContactForm} from "./ContactForm";

export const ContactModal = () => {
  return (
      <div className={'contact-modal'}>
          <ContactForm/>
          <div className={'contact-modal__right'}>
              <span>087787 2309887</span>
              <span>Call now</span>
          </div>
      </div>
  );
}