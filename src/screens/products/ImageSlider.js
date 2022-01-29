import { CarouselProvider, ImageWithZoom, Slide } from 'pure-react-carousel';
import React from 'react';
import Slider from "react-slick";

export const ImageSlider = ({ images }) => {
    console.log({ images });
    return (
        <CarouselProvider
            visibleSlides={3}
            totalSlides={6}
            step={3}
            naturalSlideWidth={400}
            naturalSlideHeight={500}
            hasMasterSpinner={true}
            className='h-64'
        >
            {/* <h2 className={'headline'}>Carousel (With Master Loading Spinner)</h2>
            <p>
                This spinner will go away after all the images have loaded. You might want to use
                Chrome dev tools to throttle the network connection so you can see the spinner.
            </p> */}
            <Slider className={'slider'}>

                {images?.map((item, idx) =>

                    <Slide index={idx}>
                        <ImageWithZoom src={item.image} />
                    </Slide>

                )}

            </Slider>
            {/* <ButtonFirst>First</ButtonFirst>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
        <ButtonLast>Last</ButtonLast> */}
            {/* <DotGroup /> */}
        </CarouselProvider>
    )
}
