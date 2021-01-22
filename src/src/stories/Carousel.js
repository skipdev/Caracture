import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import slide1 from '../slide1.jpg';
import slide2 from '../slide2.jpg';
import slide3 from '../slide3.jpg';
import slide4 from '../slide4.jpg';
import slide5 from '../slide5.jpg';
import {Button} from './Button';
import {Link} from 'react-router-dom';

export const ControlledCarousel = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slide1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className={'dark-text'}>High quality personalisation for your Range Rover / Sport</h3>
                    <Link to={'/contact'}><Button label={'Get in touch'} type={'secondary'}/></Link>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slide2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Professionally fitted carbon fibre</h3>
                    <p>Applicable to both the interior and exterior</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slide4}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Treadplates</h3>
                    <p>Personalised, illuminated treadplates, finishes
                        to suit</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slide3}
                    alt="Fourth slide"
                />
                <Carousel.Caption>
                    <h3>Lighting upgrades</h3>
                    <p>Smoked lens, sweep indicators and
                        illuminated grilles</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slide5}
                    alt="Fifth slide"
                />
                <Carousel.Caption>
                    <h3>Re-finished carbon fibre interior</h3>
                    <p>Other finishes are available</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}