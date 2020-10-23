import React from 'react';
import './icondown.css';
import {ReactComponent as Icon} from '../icondown.svg';


export const IconDown = () => {
  return (
    <div className={['icondown',].join(' ')}>
        <Icon/>
    </div>
  );
};
