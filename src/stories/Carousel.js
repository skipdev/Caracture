import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import slide1 from '../slide1.jpg';
import slide2 from '../slide2.jpg';
import slide3 from '../slide3.jpg';
import slide4 from '../slide4.jpg';
import {Button} from "./Button";

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
            <h3>Call us now to find out about high-quality personalisation for your Range Rover</h3>
            <Button type={"secondary"} label={'Get in touch'}/>
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
              src={slide3}
              alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Sweep indicator upgrades</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
              className="d-block w-100"
              src={slide4}
              alt="Fourth slide"
          />

          <Carousel.Caption>
            <h3>Tread plate personalisation</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
  );
}