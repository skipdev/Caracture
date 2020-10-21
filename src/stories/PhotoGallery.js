import React from 'react';
import "react-image-gallery/styles/css/image-gallery.css";
import slide2 from '../slide2.jpg';
import slide3 from '../slide3.jpg';

import ImageGallery from 'react-image-gallery';

export const PhotoGallery = () => {
    const images = [
        {
            original: slide2,
            thumbnail: slide2,
        },
        {
            original: slide3,
            thumbnail: slide3,
        },
        // {
        //     original: 'http://lorempixel.com/1000/600/nature/3/',
        //     thumbnail: 'http://lorempixel.com/250/150/nature/3/'
        // }
    ]

    return (
        <ImageGallery items={images} />
    );
}