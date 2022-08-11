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
import { Link, useHistory } from "react-router-dom";
import Slider from "react-slick";
import { baseurl } from "../../../common/Constants";

export default function MainSlider({ banners }) {
  const [data, setdata] = useState([]);
  const navigate = useHistory();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };

  const selectbanner = (banner) => {
    let prop_data = {};
    let url_path = "";
    let send_data = "";

    if (banner.products != null) {
      // href={`/product/${banner.products}`}
      url_path = "/products/";
      send_data = banner.products;
      // navigate(`/product/`, { replace: true })
      // location.href = "/product/" + banner.products;
    } else if (banner.categorys != null) {
      url_path = "/categories/";
      send_data = banner.categorys;
      // navigate(`/category/`, { replace: true })
    } else {
      // alert("static")
      url_path = "";
      send_data = "";
      console.log("static");
    }
    prop_data = {
      url_path: url_path,
      send_data: send_data,
    };

    history.push(prop_data);
    // alert(JSON.stringify(prop_data))
  };

  return (
    <div>
      <Slider {...settings}>
        {banners.map((item) => (
          <Link
            to={{
              pathname:
                item.products != null
                  ? `/products/`
                  : item.categorys != null
                  ? `/categories/`
                  : `/`,
              state: {
                send_data:
                  item.products != null
                    ? item.products
                    : item.categorys != null
                    ? item.categorys
                    : `/`,
              },
            }}
            // to="/product/"
            // to={selectbanner(item)}

            // to={()=>selectbanner(item)}
            // onClick={() => {
            //   selectbanner(item);
            // }}
          >
            <div
              className="ec-slide-item swiper-slide d-flex ec-slide-1 swiper-slide-active"
              style={{ backgroundImage: `url(${item.banner})` }}
            >
              <div className="container align-self-center">
                <div className="row">
                  <div className="col-xl-6 col-lg-7 col-md-7 col-sm-7 align-self-center">
                    <div className="ec-slide-content slider-animation">
                      <h1 className="ec-slide-title">
                        {item.id}:::{item.title}
                      </h1>
                      {/* <h2 className="ec-slide-stitle">Sale Offer</h2> */}
                      <p>{item.description}</p>
                      {/* <a href="#" className="btn btn-lg btn-secondary">Order Now</a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
}
