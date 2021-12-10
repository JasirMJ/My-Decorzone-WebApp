import React from 'react'

function OfferSection() {
    return (
        <>
         <section className="section ec-offer-section section-space-p section-space-m">
        <h2 className="d-none">Offer</h2>
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-xl-6 col-lg-7 col-md-7 col-sm-7 align-self-center ec-offer-content">
              <h2 className="ec-offer-title">Sunglasses</h2>
              <h3 className="ec-offer-stitle" data-animation="slideInDown">Super Offer</h3>
              <span className="ec-offer-img" data-animation="zoomIn"><img src="assets/images/offer-image/1.png" alt="offer image" /></span>
              <span className="ec-offer-desc">Acetate Frame Sunglasses</span>
              <span className="ec-offer-price">$40.00 Only</span>
              <a className="btn btn-primary" href="shop-left-sidebar-col-3.html" data-animation="zoomIn">Shop Now</a>
            </div>
          </div>
        </div>
      </section>   
        </>
    )
}

export default OfferSection
