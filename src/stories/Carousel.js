import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import slide1 from '../slide1.png';
import slide2 from '../slide2.jpg';
import slide3 from '../slide3.jpg';
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
            <h3>High-quality personalised accessories, specially made for Range Rover</h3>
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
            <h3>Professionally fitted carbon fibre interiors</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
  );
}