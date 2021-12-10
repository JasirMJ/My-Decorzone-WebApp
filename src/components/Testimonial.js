import React from 'react'

function Testimonial() {
    return (
        <>
         <section className="section ec-test-section section-space-ptb-100 section-space-m">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="section-title mb-0">
                <h2 className="ec-bg-title">Testimonial</h2>
                <h2 className="ec-title">Client Review</h2>
                <p className="sub-title mb-3">What say client about us</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="ec-test-outer">
              <ul id="ec-testimonial-slider">
                <li className="ec-test-item">
                  <img src="assets/images/testimonial/top-quotes.svg" className="svg_img test_svg top" alt />
                  <div className="ec-test-inner">
                    <div className="ec-test-img"><img alt="testimonial" title="testimonial" src="assets/images/testimonial/1.jpg" /></div>
                    <div className="ec-test-content">
                      <div className="ec-test-desc">Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen</div>
                      <div className="ec-test-name">John Doe</div>
                      <div className="ec-test-designation">General Manager</div>
                      <div className="ec-test-rating">
                        <i className="ecicon eci-star fill" />
                        <i className="ecicon eci-star fill" />
                        <i className="ecicon eci-star fill" />
                        <i className="ecicon eci-star fill" />
                        <i className="ecicon eci-star fill" />
                      </div>
                    </div>
                  </div>
                  <img src="assets/images/testimonial/bottom-quotes.svg" className="svg_img test_svg bottom" alt />
                </li>
                <li className="ec-test-item ">
                  <img src="assets/images/testimonial/top-quotes.svg" className="svg_img test_svg top" alt />
                  <div className="ec-test-inner">
                    <div className="ec-test-img"><img alt="testimonial" title="testimonial" src="assets/images/testimonial/2.jpg" /></div>
                    <div className="ec-test-content">
                      <div className="ec-test-desc">Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen</div>
                      <div className="ec-test-name">John Doe</div>
                      <div className="ec-test-designation">General Manager</div>
                      <div className="ec-test-rating">
                        <i className="ecicon eci-star fill" />
                        <i className="ecicon eci-star fill" />
                        <i className="ecicon eci-star fill" />
                        <i className="ecicon eci-star fill" />
                        <i className="ecicon eci-star fill" />
                      </div>
                    </div>
                  </div>
                  <img src="assets/images/testimonial/bottom-quotes.svg" className="svg_img test_svg bottom" alt />
                </li>
                <li className="ec-test-item">
                  <img src="assets/images/testimonial/top-quotes.svg" className="svg_img test_svg top" alt />
                  <div className="ec-test-inner">
                    <div className="ec-test-img"><img alt="testimonial" title="testimonial" src="assets/images/testimonial/3.jpg" /></div>
                    <div className="ec-test-content">
                      <div className="ec-test-desc">Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen</div>
                      <div className="ec-test-name">John Doe</div>
                      <div className="ec-test-designation">General Manager</div>
                      <div className="ec-test-rating">
                        <i className="ecicon eci-star fill" />
                        <i className="ecicon eci-star fill" />
                        <i className="ecicon eci-star fill" />
                        <i className="ecicon eci-star fill" />
                        <i className="ecicon eci-star fill" />
                      </div>
                    </div>
                  </div>
                  <img src="assets/images/testimonial/bottom-quotes.svg" className="svg_img test_svg bottom" alt />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>   
        </>
    )
}

export default Testimonial
