import React from 'react'

function TemplateModal() {
    return (
        <>
         <div className="modal fade" id="ec_quickview_modal" tabIndex={-1} role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <button type="button" className="btn-close qty_close" data-bs-dismiss="modal" aria-label="Close" />
            <div className="modal-body">
              <div className="row">
                <div className="col-md-5 col-sm-12 col-xs-12">
                  {/* Swiper */}
                  <div className="qty-product-cover">
                    <div className="qty-slide">
                      <img className="img-responsive" src="assets/images/product-image/3_1.jpg" alt />
                    </div>
                    <div className="qty-slide">
                      <img className="img-responsive" src="assets/images/product-image/3_2.jpg" alt />
                    </div>
                    <div className="qty-slide">
                      <img className="img-responsive" src="assets/images/product-image/3_3.jpg" alt />
                    </div>
                    <div className="qty-slide">
                      <img className="img-responsive" src="assets/images/product-image/3_4.jpg" alt />
                    </div>
                    <div className="qty-slide">
                      <img className="img-responsive" src="assets/images/product-image/3_5.jpg" alt />
                    </div>
                  </div>
                  <div className="qty-nav-thumb">
                    <div className="qty-slide">
                      <img className="img-responsive" src="assets/images/product-image/3_1.jpg" alt />
                    </div>
                    <div className="qty-slide">
                      <img className="img-responsive" src="assets/images/product-image/3_2.jpg" alt />
                    </div>
                    <div className="qty-slide">
                      <img className="img-responsive" src="assets/images/product-image/3_3.jpg" alt />
                    </div>
                    <div className="qty-slide">
                      <img className="img-responsive" src="assets/images/product-image/3_4.jpg" alt />
                    </div>
                    <div className="qty-slide">
                      <img className="img-responsive" src="assets/images/product-image/3_5.jpg" alt />
                    </div>
                  </div>
                </div>
                <div className="col-md-7 col-sm-12 col-xs-12">
                  <div className="quickview-pro-content">
                    <h5 className="ec-quick-title"><a href="product-left-sidebar.html">Handbag leather purse for women</a>
                    </h5>
                    <div className="ec-quickview-rating">
                      <i className="ecicon eci-star fill" />
                      <i className="ecicon eci-star fill" />
                      <i className="ecicon eci-star fill" />
                      <i className="ecicon eci-star fill" />
                      <i className="ecicon eci-star" />
                    </div>
                    <div className="ec-quickview-desc">Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                      since the 1500s,</div>
                    <div className="ec-quickview-price">
                      <span className="old-price">$100.00</span>
                      <span className="new-price">$80.00</span>
                    </div>
                    <div className="ec-pro-variation">
                      <div className="ec-pro-variation-inner ec-pro-variation-color">
                        <span>Color</span>
                        <div className="ec-pro-color">
                          <ul className="ec-opt-swatch">
                            <li><span style={{ backgroundColor: '#ebbf60' }} /></li>
                            <li><span style={{ backgroundColor: '#75e3ff' }} /></li>
                            <li><span style={{ backgroundColor: '#11f7d8' }} /></li>
                            <li><span style={{ backgroundColor: '#acff7c' }} /></li>
                            <li><span style={{ backgroundColor: '#e996fa' }} /></li>
                          </ul>
                        </div>
                      </div>
                      <div className="ec-pro-variation-inner ec-pro-variation-size ec-pro-size">
                        <span>Size</span>
                        <div className="ec-pro-variation-content">
                          <ul className="ec-opt-size">
                            <li className="active"><a href="#" className="ec-opt-sz" data-tooltip="Small">S</a></li>
                            <li><a href="#" className="ec-opt-sz" data-tooltip="Medium">M</a></li>
                            <li><a href="#" className="ec-opt-sz" data-tooltip="Large">X</a></li>
                            <li><a href="#" className="ec-opt-sz" data-tooltip="Extra Large">XL</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="ec-quickview-qty">
                      <div className="qty-plus-minus">
                        <input className="qty-input" type="text" name="ec_qtybtn" defaultValue={1} />
                      </div>
                      <div className="ec-quickview-cart ">
                        <button className="btn btn-primary"><img src="assets/images/icons/cart.svg" className="svg_img pro_svg" alt /> Add To Cart</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>   
        </>
    )
}

export default TemplateModal
