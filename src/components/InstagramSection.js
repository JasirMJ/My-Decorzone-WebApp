import React from 'react'

function InstagramSection({ brands }) {
  return (
    <>
      <section className="section ec-instagram-section module section-space-p">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="section-title">
                {/* <h2 className="ec-bg-title"> </h2> */}
                <h2 className="ec-title">Brands</h2>
                {/* <p className="sub-title">Share your store with us</p> */}
              </div>
            </div>
          </div>
        </div>
        <div className="ec-insta-wrapper">
          <div className="ec-insta-outer">
            <div className="container" data-animation="fadeIn">
              <div className="insta-auto">
                {/* instagram item */}
                {brands.map(item => (

                  <div className="ec-insta-item">
                    <div className="d-flex justify-content-center  ec-insta-inner" style={{ background: '#0072e17d', padding: '1rem', borderRadius: '5px' }}>
                      <h4>{item.name}</h4>
                      {/* <a href="#" target="_blank"><img src="assets/images/brand-image/10.jpg" alt="insta" /></a> */}
                    </div>
                  </div>
                ))}

                {/* instagram item */}
                {/* <div className="ec-insta-item">
                  <div className="ec-insta-inner">
                    <a href="#" target="_blank"><img src="assets/images/brand-image/12.jpg" alt="insta" /></a>
                  </div>
                </div>
                <div className="ec-insta-item">
                  <div className="ec-insta-inner">
                    <a href="#" target="_blank"><img src="assets/images/brand-image/13.jpg" alt="insta" /></a>
                  </div>
                </div>
                <div className="ec-insta-item">
                  <div className="ec-insta-inner">
                    <a href="#" target="_blank"><img src="assets/images/brand-image/14.jpg" alt="insta" /></a>
                  </div>
                </div>
                <div className="ec-insta-item">
                  <div className="ec-insta-inner">
                    <a href="#" target="_blank"><img src="assets/images/brand-image/15.jpg" alt="insta" /></a>
                  </div>
                </div>
                <div className="ec-insta-item">
                  <div className="ec-insta-inner">
                    <a href="#" target="_blank"><img src="assets/images/brand-image/16.jpg" alt="insta" /></a>
                  </div>
                </div>
                <div className="ec-insta-item">
                  <div className="ec-insta-inner">
                    <a href="#" target="_blank"><img src="assets/images/brand-image/17.jpg" alt="insta" /></a>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default InstagramSection
