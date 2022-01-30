// import { CarouselProvider, ImageWithZoom, Slide } from 'pure-react-carousel';
import React from 'react';
import Slider from "react-slick";
import SimpleImageSlider from "react-simple-image-slider";
import { addDomainInImage } from '../../common/Functions';

export const ImageSlider = ({ images }) => {
    console.log({ images });
    const settings = {
        customPaging: function (i) {
            return (
                <a>
                    <img src={images[i].image} />
                </a>
            );
        },
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div>
            <Slider {...settings}>

                {images?.map(item => (
                    <div >
                        <img style={{ height: '22rem', objectFit: 'cover', width: '100%', objectPosition: 'center' }} src={addDomainInImage(item.image)} alt="" srcset="" />
                    </div>
                ))}



            </Slider>
        </div>
    )
}
