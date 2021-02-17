import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from './Button';
import {Link} from 'react-router-dom';
import vid from '../photos/1.mp4';
import p11 from '../photos/11.jpg';
import p12 from '../photos/12.jpg';
import tp13 from '../photos/tp13.png';
import tp32 from '../photos/tp32.png';
import tp41 from '../photos/tp41.png';
import tp42 from '../photos/tp42.png';
import tp43 from '../photos/tp43.png';
import $ from 'jquery';

export const ControlledCarousel = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const a = () => {
        $(document).on('click', (e) => {
            let classes = e.target.classList;
            console.log(e.target.classList)
            if (classes.contains('slidechange')) {
                if (classes.contains('carbon')) {
                    handleSelect(1);
                } else if (classes.contains('anodised')) {
                    handleSelect(2);
                } else if (classes.contains('powder')) {
                    handleSelect(3);
                }
            }
        })
    }

    a();

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <div className={'page-1 flex flex-col md:flex-row w-full h-full p-14 z-10 opacity-100'}>
                    <div className={'w-full md:w-1/3 h-full justify-center items-center text-left md:text-left text-md lg:text-lg font-semibold text-white z-10'}>
                        <h3 className={'underline pb-4'}>
                            Illuminated Tread Plates
                        </h3>
                        <p>
                            All of our illuminated tread plates are made to order and available as a front pair or complete set of 4 with individual names.
                        </p>
                        <p>
                            All illuminated tread plates can be retro fitted to ANY Range Rover (2013 on) and ANY Range Rover Sport (2014 on) even if not originally fitted.
                        </p>
                        <p>
                            Available in Carbon fibre, Anodised or Powder coated finishes
                        </p>
                        <p>
                            Prices from £600 a pair
                        </p>
                    </div>
                    <div className={'w-full md:w-2/3 h-full justify-center items-center md:ml-14 z-10 flex flex-col'}>
                        <div className={'w-full h-1/3 flex flex-row items-center justify-center'}>
                            <video width="100%" height="50vh" style={{"max-height": '50vh !important;'}} controls autoPlay>
                                <source src={vid} type="video/mp4"/>
                            </video>
                        </div>
                        <div className={'w-full h-1/2 flex flex-row items-center justify-around space-x-4 mt-8'}>
                            <div className={'flex flex-col items-center justify-center w-1/3'}>
                                <img className={'slidechange carbon'} src={p11} alt={'carbon fibre treadplate'}/>
                                <span className={'slidechange carbon text-white text-sm mt-2'}>Carbon Fibre</span>
                            </div>
                            <div className={'flex flex-col items-center justify-center w-1/3'}>
                                <img className={'slidechange anodised'} src={p12} alt={'anodised treadplate'}/>
                                <span className={'slidechange anodised text-white text-sm mt-2'}>Anodised</span>
                            </div>
                            <div className={'flex flex-col items-center justify-center w-1/3'}>
                                <img className={'slidechange powder'} src={tp13} alt={'powder coated treadplate'}/>
                                <span className={'slidechange powder text-white text-sm mt-2'}>Powder Coated</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel.Item>

            <Carousel.Item>
                <div className={'page-2 flex flex-col md:flex-row w-full h-full p-14 z-10 opacity-100'}>
                    <div className={'w-full md:w-1/3 h-full justify-center items-center text-left md:text-left text-md lg:text-lg font-semibold text-white z-10'}>
                        <h3 className={'underline pb-4'}>
                            Carbon fibre tread plates
                        </h3>
                        <p>
                            These are top of the range tread plates. Hand made in the UK from real carbon fibre they weigh 32% less than the factory fitted aluminium tread plates and look fantastic!
                        </p>
                        <p>
                            Choose your own text, text style and logo on every plate.
                        </p>
                        <p>
                            Easy to fit with full instructions or fitting service available
                        </p>
                        <p>
                            Front pair only £900
                            <br/>
                            Full set £1150
                        </p>
                    </div>
                    <div className={'w-full md:w-2/3 h-full pb-44 px-44 justify-center items-center md:ml-14 z-10 flex flex-col'}>
                        <img src={p11} alt={'carbon fibre treadplate'}/>
                    </div>
                </div>
            </Carousel.Item>

            <Carousel.Item>
                <div className={'page-3 flex flex-col md:flex-row w-full h-full p-14 z-10 opacity-100'}>
                    <div className={'w-full md:w-1/3 h-full justify-center items-center text-left md:text-left text-md lg:text-lg font-semibold text-white z-10'}>
                        <h3 className={'underline pb-4'}>
                            Anodised tread plates
                        </h3>
                        <p>
                            Anodising is an oxidation process which creates a hard ceramic compound in the surface of the base aluminium material which can also be coloured. Our 3 standard colours are shown but others are available.
                        </p>
                        <p>
                            <b>Anodised plates can also be laser engraved with logos.</b> Choose your own text, text style and logo and engraving on every plate.
                        </p>
                        <p>
                            Easy to fit with full instructions or fitting service available.
                        </p>
                        <p>
                            Front pair only £750
                            <br/>
                            Full set £900
                        </p>
                    </div>
                    <div className={'w-full md:w-2/3 h-50vh justify-center items-center md:ml-14 z-10 flex flex-col'}>
                        <div className={'w-full h-full flex flex-row items-center justify-around mt-8'}>
                            <div className={'flex flex-col items-center justify-center self-start w-1/3'}>
                                <img src={p11} alt={'red treadplate'}/>
                                <span className={'text-white text-sm mt-2'}>Red (with laser engraving)</span>
                            </div>
                            <div className={'flex flex-col items-center justify-center self-center w-1/3'}>
                                <img src={tp32} alt={'gold treadplate'}/>
                                <span className={'text-white text-sm mt-2'}>Gold</span>
                            </div>
                            <div className={'flex flex-col items-center justify-center self-end w-1/3'}>
                                <img src={tp43} alt={'grey treadplate'}/>
                                <span className={'text-white text-sm mt-2'}>Grey</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel.Item>

            <Carousel.Item>
                <div className={'page-4 flex flex-col md:flex-row w-full h-full p-14 z-10 opacity-100'}>
                    <div className={'w-full md:w-1/3 h-full justify-center items-center text-left md:text-left text-md lg:text-lg font-semibold text-white z-10'}>
                        <h3 className={'underline pb-4'}>
                            Powder coated tread plates
                        </h3>
                        <p>
                            Powder coating provides a very hard layer to the surface of the base aluminium. These are our lowest cost but hardest wearing tread plate.
                        </p>
                        <p>
                            Our standard colours are shown but others are available.
                        </p>
                        <p>
                            Choose your own text, text style and logo and engraving on every plate.
                        </p>
                        <p>
                            Easy to fit with full instructions or fitting service available
                        </p>
                        <p>
                            Front pair only £650
                            <br/>
                            Full set £800
                        </p>
                    </div>
                    <div className={'w-full md:w-2/3 h-50vh justify-center items-center md:ml-14 z-10 flex flex-col'}>
                        <div className={'w-full h-full flex flex-row items-center justify-around mt-8'}>
                            <div className={'flex flex-col items-center justify-center self-start w-1/3'}>
                                <img src={tp41} alt={'black treadplate'}/>
                                <span className={'text-white text-sm mt-2'}>Black</span>
                            </div>
                            <div className={'flex flex-col items-center justify-center self-center w-1/3'}>
                                <img src={tp42} alt={'cream treadplate'}/>
                                <span className={'text-white text-sm mt-2'}>Cream (rear plate shown)</span>
                            </div>
                            <div className={'flex flex-col items-center justify-center self-end w-1/3'}>
                                <img src={tp43} alt={'grey treadplate'}/>
                                <span className={'text-white text-sm mt-2'}>Grey (rear plate shown)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    );
}