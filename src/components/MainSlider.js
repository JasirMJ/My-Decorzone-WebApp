// import React from 'react'

// function MainSlider() {
//     return (
//         <>
//           <div className="sticky-header-next-sec ec-main-slider section section-space-pb">
//         <div className="ec-slider swiper-container main-slider-nav main-slider-dot">
//           {/* Main slider */}
//           <div className="swiper-wrapper">
//             <div className="ec-slide-item swiper-slide d-flex ec-slide-1">
//               <div className="container align-self-center">
//                 <div className="row">
//                   <div className="col-xl-6 col-lg-7 col-md-7 col-sm-7 align-self-center">
//                     <div className="ec-slide-content slider-animation">
//                       <h1 className="ec-slide-title">New Fashion Collection Summer Sale</h1>
//                       <h2 className="ec-slide-stitle">Sale Offer</h2>
//                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
//                       <a href="#" className="btn btn-lg btn-secondary">Order Now</a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="ec-slide-item swiper-slide d-flex ec-slide-2">
//               <div className="container align-self-center">
//                 <div className="row">
//                   <div className="col-xl-6 col-lg-7 col-md-7 col-sm-7 align-self-center">
//                     <div className="ec-slide-content slider-animation">
//                       <h1 className="ec-slide-title">Boat Headphone Sets</h1>
//                       <h2 className="ec-slide-stitle">Sale Offer</h2>
//                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
//                       <a href="#" className="btn btn-lg btn-secondary">Order Now</a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="swiper-pagination swiper-pagination-white" />
//           <div className="swiper-buttons">
//             <div className="swiper-button-next" />
//             <div className="swiper-button-prev" />
//           </div>
//         </div>
//       </div>  
//         </>
//     )
// }

// export default MainSlider
import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import { baseurl } from "../common/Constants";

export default function SimpleSlider() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    GetData()
  }, []);


  const GetData = () => {
    var axios = require('axios');
    var FormData = require('form-data');
    var data = new FormData();

    var config = {
      method: 'get',
      url: baseurl + '/landing/banners/',
      headers: {
        'Authorization': 'Token f789f7bfba757d318cc1040a9d3abffa74daf3ea',
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(response.data)
        if (response.data.results) {
          setdata(response.data.results)
        }
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div>

      <Slider {...settings}>
        {data.map(item => (
          <>

            <div className="ec-slide-item swiper-slide d-flex ec-slide-1 swiper-slide-active" style={{ backgroundImage: `url(${item.banner})` }}    >
              <div className="container align-self-center">
                <div className="row">
                  <div className="col-xl-6 col-lg-7 col-md-7 col-sm-7 align-self-center">
                    <div className="ec-slide-content slider-animation">
                      <h1 className="ec-slide-title">{item.title}</h1>
                      {/* <h2 className="ec-slide-stitle">Sale Offer</h2> */}
                      <p>{item.description}</p>
                      {/* <a href="#" className="btn btn-lg btn-secondary">Order Now</a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>


        ))}

      </Slider>
    </div>
  );

}