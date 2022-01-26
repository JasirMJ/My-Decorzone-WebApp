import React from 'react';
import Slider from "react-slick";

export const ImageSlider = ({ images }) => {

    const settings = {
        customPaging: function (i) {
            return (
                <a>
                    <img src={images[i].image} />
                </a>
            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return <div>
        <Slider {...settings}>

            {images?.map(item => (
                <div>
                    <img src={item.image} />
                </div>

            ))}
        </Slider>
    </div>;
};
