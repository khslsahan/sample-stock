import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';



function LandingSectionTwo() {
    return (
        <>
            <div style={{ display: 'block', width: '100%', backgroundColor:'black' }}>
                <Carousel>
                    <Carousel.Item>
                        <ExampleCarouselImage text="First slide"  src='images/carousel/carosel-1.png'/>
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <ExampleCarouselImage text="Second slide"  src='images/carousel/carosel-1.png'/>
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <ExampleCarouselImage text="Third slide" src='images/carousel/carosel-1.png' />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    );
}

export default LandingSectionTwo;
