import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import carousel1 from '../home-components/assets/carousel1.jpeg'
import carousel2 from '../home-components/assets/carousel2.png'
import carousel3 from '../home-components/assets/carousel3.jpeg'

function CarouselSection() {
  return (
    <div>
        <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={carousel1}
            alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={carousel2}
            alt="Second slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={carousel3}
            alt="Third slide"
            />
        </Carousel.Item>
        </Carousel>
        </div>
  )
}

export default CarouselSection;