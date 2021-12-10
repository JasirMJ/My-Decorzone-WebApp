import React from 'react'

function MainSlider() {
    return (
        <>
          <div className="sticky-header-next-sec ec-main-slider section section-space-pb">
        <div className="ec-slider swiper-container main-slider-nav main-slider-dot">
          {/* Main slider */}
          <div className="swiper-wrapper">
            <div className="ec-slide-item swiper-slide d-flex ec-slide-1">
              <div className="container align-self-center">
                <div className="row">
                  <div className="col-xl-6 col-lg-7 col-md-7 col-sm-7 align-self-center">
                    <div className="ec-slide-content slider-animation">
                      <h1 className="ec-slide-title">New Fashion Collection Summer Sale</h1>
                      <h2 className="ec-slide-stitle">Sale Offer</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                      <a href="#" className="btn btn-lg btn-secondary">Order Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ec-slide-item swiper-slide d-flex ec-slide-2">
              <div className="container align-self-center">
                <div className="row">
                  <div className="col-xl-6 col-lg-7 col-md-7 col-sm-7 align-self-center">
                    <div className="ec-slide-content slider-animation">
                      <h1 className="ec-slide-title">Boat Headphone Sets</h1>
                      <h2 className="ec-slide-stitle">Sale Offer</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                      <a href="#" className="btn btn-lg btn-secondary">Order Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-pagination swiper-pagination-white" />
          <div className="swiper-buttons">
            <div className="swiper-button-next" />
            <div className="swiper-button-prev" />
          </div>
        </div>
      </div>  
        </>
    )
}

export default MainSlider