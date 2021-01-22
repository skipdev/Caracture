import React from 'react';

export const Icon = ({src, alt}) => {
  return (
    <img
      className={['logo w-8 h-8',].join(' ')}
      src={src}
      alt={alt}>
    </img>
  );
};
