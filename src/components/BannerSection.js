import React from 'react'

function BannerSection() {
    return (
        <>
         <section className="ec-banner section section-space-p">
        <h2 className="d-none">Banner</h2>
        <div className="container">
          {/* ec Banners Start */}
          <div className="ec-banner-inner">
            {/*ec Banner Start */}
            <div className="ec-banner-block ec-banner-block-2">
              <div className="row">
                <div className="banner-block col-lg-6 col-md-12 margin-b-30" data-animation="slideInRight">
                  <div className="bnr-overlay">
                    <img src="assets/images/banner/2.jpg" alt />
                    <div className="banner-text">
                      <span className="ec-banner-stitle">New Arrivals</span>
                      <span className="ec-banner-title">mens<br /> Sport shoes</span>
                      <span className="ec-banner-discount">30% Discount</span>
                    </div>
                    <div className="banner-content">
                      <span className="ec-banner-btn"><a href="#">Order Now</a></span>
                    </div>
                  </div>
                </div>
                <div className="banner-block col-lg-6 col-md-12" data-animation="slideInLeft">
                  <div className="bnr-overlay">
                    <img src="assets/images/banner/3.jpg" alt />
                    <div className="banner-text">
                      <span className="ec-banner-stitle">New Trending</span>
                      <span className="ec-banner-title">Smart<br /> watches</span>
                      <span className="ec-banner-discount">Buy any 3 Items &amp; get <br />20% Discount</span>
                    </div>
                    <div className="banner-content">
                      <span className="ec-banner-btn"><a href="#">Order Now</a></span>
                    </div>
                  </div>
                </div>
              </div>
              {/* ec Banner End */}
            </div>
            {/* ec Banners End */}
          </div>
        </div>
      </section>   
        </>
    )
}

export default BannerSection
