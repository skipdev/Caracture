import React from 'react';
import "react-image-gallery/styles/css/image-gallery.css";
import p1 from '../photos/1.jpg';
import p2 from '../photos/2.jpg';
import p3 from '../photos/3.jpg';
import p4 from '../photos/4.jpg';
import p5 from '../photos/5.jpg';
import p6 from '../photos/6.jpg';
import p7 from '../photos/7.jpg';
import p8 from '../photos/8.jpg';
import p9 from '../photos/9.jpg';
import p10 from '../photos/10.jpg';
import p11 from '../photos/11.jpg';
import p12 from '../photos/12.jpg';
import p13 from '../photos/13.jpg';
import p14 from '../photos/14.jpg';
import p15 from '../photos/15.jpg';
import p16 from '../photos/16.jpg';
import p17 from '../photos/17.jpg';
import p18 from '../photos/18.jpg';
import p19 from '../photos/19.jpg';
import p20 from '../photos/20.jpg';
import p21 from '../photos/21.jpg';
import p22 from '../photos/22.jpg';
import p23 from '../photos/23.jpg';
import p24 from '../photos/24.jpg';
import p25 from '../photos/25.jpg';
import p26 from '../photos/26.jpg';
import p27 from '../photos/27.jpg';
import p28 from '../photos/28.jpg';
import p29 from '../photos/29.jpg';
import p30 from '../photos/30.jpg';
import p31 from '../photos/31.jpg';
import p32 from '../photos/32.jpg';
import p33 from '../photos/33.jpg';
import p34 from '../photos/34.jpg';
import p35 from '../photos/35.jpg';
import p36 from '../photos/36.jpg';
import p37 from '../photos/37.jpg';
import p38 from '../photos/38.mp4';
import p39 from '../photos/39.mp4';
import p40 from '../photos/40.mp4';
import p41 from '../photos/41.mp4';

import ImageGallery from 'react-image-gallery';

export const PhotoGallery = () => {
    const images = [
        {
            original: p1,
            thumbnail: p1,
        },
        {
            original: p2,
            thumbnail: p2,
        },
        {
            original: p3,
            thumbnail: p3,
        },
        {
            original: p4,
            thumbnail: p4,
        },
        {
            original: p5,
            thumbnail: p5,
        },
        {
            original: p6,
            thumbnail: p6,
        },
        {
            original: p7,
            thumbnail: p7,
        },
        {
            original: p8,
            thumbnail: p8,
        },
        {
            original: p9,
            thumbnail: p9,
        },
        {
            original: p10,
            thumbnail: p10,
        },
        {
            original: p11,
            thumbnail: p11,
        },
        {
            original: p12,
            thumbnail: p12,
        },
        {
            original: p13,
            thumbnail: p13,
        },
        {
            original: p14,
            thumbnail: p14,
        },
        {
            original: p15,
            thumbnail: p15,
        },
        {
            original: p16,
            thumbnail: p16,
        },
        {
            original: p17,
            thumbnail: p17,
        },
        {
            original: p18,
            thumbnail: p18,
        },
        {
            original: p19,
            thumbnail: p19,
        },
        {
            original: p20,
            thumbnail: p20,
        },
        {
            original: p21,
            thumbnail: p21,
        },
        {
            original: p22,
            thumbnail: p22,
        },
        {
            original: p23,
            thumbnail: p23,
        },
        {
            original: p24,
            thumbnail: p24,
        },
        {
            original: p25,
            thumbnail: p25,
        },
        {
            original: p26,
            thumbnail: p26,
        },
        {
            original: p27,
            thumbnail: p27,
        },
        {
            original: p28,
            thumbnail: p28,
        },
        {
            original: p29,
            thumbnail: p29,
        },
        {
            original: p30,
            thumbnail: p30,
        },
        {
            original: p31,
            thumbnail: p31,
        },
        {
            original: p32,
            thumbnail: p32,
        },
        {
            original: p33,
            thumbnail: p33,
        },
        {
            original: p34,
            thumbnail: p34,
        },
        {
            original: p35,
            thumbnail: p35,
        },
        {
            original: p36,
            thumbnail: p36,
        },
        {
            original: p37,
            thumbnail: p37,
        },
        {
            original: p38,
            thumbnail: p38,
        },
        {
            original: p39,
            thumbnail: p39,
        },
        {
            original: p40,
            thumbnail: p40,
        },
        {
            original: p41,
            thumbnail: p41,
        },
    ]

    return (
        <ImageGallery items={images} />
    );
}