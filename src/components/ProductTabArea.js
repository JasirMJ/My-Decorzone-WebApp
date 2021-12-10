import React from 'react'

function ProductTabArea({title, subtitle , Data}) {
    return (
        <>
         <section className="section ec-product-tab section-space-p">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="section-title">
                <h2 className="ec-bg-title">Our Top Collection</h2>
                <h2 className="ec-title">Our Top Collection</h2>
                <p className="sub-title">Browse The Collection of Top Products</p>
              </div>
            </div>
            {/* Tab Start */}
            <div className="col-md-12 text-center">
              <ul className="ec-pro-tab-nav nav justify-content-center">
                <li className="nav-item"><a className="nav-link active" data-bs-toggle="tab" href="#tab-pro-for-all">For
                  All</a></li>
                <li className="nav-item"><a className="nav-link" data-bs-toggle="tab" href="#tab-pro-for-men">For
                  Men</a></li>
                <li className="nav-item"><a className="nav-link" data-bs-toggle="tab" href="#tab-pro-for-women">For
                  Women</a></li>
                <li className="nav-item"><a className="nav-link" data-bs-toggle="tab" href="#tab-pro-for-child">For
                  Children</a></li>
              </ul>
            </div>
            {/* Tab End */}
          </div>
          <div className="row">
            <div className="col">
              <div className="tab-content">
                {/* 1st Product tab start */}
                <div className="tab-pane fade show active" id="tab-pro-for-all">
                  <div className="row">
                    {/* Product Content */}
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6  ec-product-content" data-animation="fadeIn">
                      <div className="ec-product-inner">
                        <div className="ec-pro-image-outer">
                          <div className="ec-pro-image">
                            <a href="product-left-sidebar.html" className="image">
                              <img className="main-image" src="assets/images/product-image/6_1.jpg" alt="Product" />
                              <img className="hover-image" src="assets/images/product-image/6_2.jpg" alt="Product" />
                            </a>
                            <span className="percentage">20%</span>
                            <a href="#" className="quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#ec_quickview_modal"><img src="assets/images/icons/quickview.svg" className="svg_img pro_svg" alt /></a>
                            <div className="ec-pro-actions">
                              <a href="compare.html" className="ec-btn-group compare" title="Compare"><img src="assets/images/icons/compare.svg" className="svg_img pro_svg" alt /></a>
                              <button title="Add To Cart" className="add-to-cart"><img src="assets/images/icons/cart.svg" className="svg_img pro_svg" alt /> Add To Cart</button>
                              <a className="ec-btn-group wishlist" title="Wishlist"><img src="assets/images/icons/wishlist.svg" className="svg_img pro_svg" alt /></a>
                            </div>
                          </div>
                        </div>
                        <div className="ec-pro-content">
                          <h5 className="ec-pro-title"><a href="product-left-sidebar.html">Round Neck T-Shirt</a></h5>
                          <div className="ec-pro-rating">
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star" />
                          </div>
                          <span className="ec-price">
                            <span className="old-price">$27.00</span>
                            <span className="new-price">$22.00</span>
                          </span>
                          <div className="ec-pro-option">
                            <div className="ec-pro-color">
                              <span className="ec-pro-opt-label">Color</span>
                              <ul className="ec-opt-swatch ec-change-img">
                                <li className="active"><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/6_1.jpg" data-src-hover="assets/images/product-image/6_1.jpg" data-tooltip="Gray"><span style={{ backgroundColor: '#e8c2ff' }} /></a></li>
                                <li><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/6_2.jpg" data-src-hover="assets/images/product-image/6_2.jpg" data-tooltip="Orange"><span style={{ backgroundColor: '#9cfdd5' }} /></a></li>
                              </ul>
                            </div>
                            <div className="ec-pro-size">
                              <span className="ec-pro-opt-label">Size</span>
                              <ul className="ec-opt-size">
                                <li className="active"><a href="#" className="ec-opt-sz" data-old="$25.00" data-new="$20.00" data-tooltip="Small">S</a></li>
                                <li><a href="#" className="ec-opt-sz" data-old="$27.00" data-new="$22.00" data-tooltip="Medium">M</a></li>
                                <li><a href="#" className="ec-opt-sz" data-old="$30.00" data-new="$25.00" data-tooltip="Large">X</a></li>
                                <li><a href="#" className="ec-opt-sz" data-old="$35.00" data-new="$30.00" data-tooltip="Extra Large">XL</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6  ec-product-content" data-animation="fadeIn">
                      <div className="ec-product-inner">
                        <div className="ec-pro-image-outer">
                          <div className="ec-pro-image">
                            <a href="product-left-sidebar.html" className="image">
                              <img className="main-image" src="assets/images/product-image/7_1.jpg" alt="Product" />
                              <img className="hover-image" src="assets/images/product-image/7_2.jpg" alt="Product" />
                            </a>
                            <span className="flags">
                              <span className="sale">Sale</span>
                            </span>
                            <a href="#" className="quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#ec_quickview_modal"><img src="assets/images/icons/quickview.svg" className="svg_img pro_svg" alt /></a>
                            <div className="ec-pro-actions">
                              <a href="compare.html" className="ec-btn-group compare" title="Compare"><img src="assets/images/icons/compare.svg" className="svg_img pro_svg" alt /></a>
                              <button title="Add To Cart" className="add-to-cart"><img src="assets/images/icons/cart.svg" className="svg_img pro_svg" alt /> Add To Cart</button>
                              <a className="ec-btn-group wishlist" title="Wishlist"><img src="assets/images/icons/wishlist.svg" className="svg_img pro_svg" alt /></a>
                            </div>
                          </div>
                        </div>
                        <div className="ec-pro-content">
                          <h5 className="ec-pro-title"><a href="product-left-sidebar.html">Full Sleeve Shirt</a></h5>
                          <div className="ec-pro-rating">
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star" />
                          </div>
                          <span className="ec-price">
                            <span className="old-price">$12.00</span>
                            <span className="new-price">$10.00</span>
                          </span>
                          <div className="ec-pro-option">
                            <div className="ec-pro-color">
                              <span className="ec-pro-opt-label">Color</span>
                              <ul className="ec-opt-swatch ec-change-img">
                                <li className="active"><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/7_1.jpg" data-src-hover="assets/images/product-image/7_1.jpg" data-tooltip="Gray"><span style={{ backgroundColor: '#01f1f1' }} /></a></li>
                                <li><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/7_2.jpg" data-src-hover="assets/images/product-image/7_2.jpg" data-tooltip="Orange"><span style={{ backgroundColor: '#b89df8' }} /></a></li>
                              </ul>
                            </div>
                            <div className="ec-pro-size">
                              <span className="ec-pro-opt-label">Size</span>
                              <ul className="ec-opt-size">
                                <li className="active"><a href="#" className="ec-opt-sz" data-old="$12.00" data-new="$10.00" data-tooltip="Small">S</a></li>
                                <li><a href="#" className="ec-opt-sz" data-old="$15.00" data-new="$12.00" data-tooltip="Medium">M</a></li>
                                <li><a href="#" className="ec-opt-sz" data-old="$18.00" data-new="$15.00" data-tooltip="Large">X</a></li>
                                <li><a href="#" className="ec-opt-sz" data-old="$20.00" data-new="$17.00" data-tooltip="Extra Large">XL</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6  ec-product-content" data-animation="fadeIn">
                      <div className="ec-product-inner">
                        <div className="ec-pro-image-outer">
                          <div className="ec-pro-image">
                            <a href="product-left-sidebar.html" className="image">
                              <img className="main-image" src="assets/images/product-image/1_1.jpg" alt="Product" />
                              <img className="hover-image" src="assets/images/product-image/1_2.jpg" alt="Product" />
                            </a>
                            <a href="#" className="quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#ec_quickview_modal"><img src="assets/images/icons/quickview.svg" className="svg_img pro_svg" alt /></a>
                            <div className="ec-pro-actions">
                              <a href="compare.html" className="ec-btn-group compare" title="Compare"><img src="assets/images/icons/compare.svg" className="svg_img pro_svg" alt /></a>
                              <button title="Add To Cart" className="add-to-cart"><img src="assets/images/icons/cart.svg" className="svg_img pro_svg" alt /> Add To Cart</button>
                              <a className="ec-btn-group wishlist" title="Wishlist"><img src="assets/images/icons/wishlist.svg" className="svg_img pro_svg" alt /></a>
                            </div>
                          </div>
                        </div>
                        <div className="ec-pro-content">
                          <h5 className="ec-pro-title"><a href="product-left-sidebar.html">Cute Baby Toy's</a></h5>
                          <div className="ec-pro-rating">
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star" />
                          </div>
                          <span className="ec-price">
                            <span className="old-price">$40.00</span>
                            <span className="new-price">$30.00</span>
                          </span>
                          <div className="ec-pro-option">
                            <div className="ec-pro-color">
                              <span className="ec-pro-opt-label">Color</span>
                              <ul className="ec-opt-swatch ec-change-img">
                                <li className="active"><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/1_1.jpg" data-src-hover="assets/images/product-image/1_1.jpg" data-tooltip="Gray"><span style={{ backgroundColor: '#90cdf7' }} /></a></li>
                                <li><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/1_2.jpg" data-src-hover="assets/images/product-image/1_2.jpg" data-tooltip="Orange"><span style={{ backgroundColor: '#ff3b66' }} /></a></li>
                                <li><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/1_3.jpg" data-src-hover="assets/images/product-image/1_3.jpg" data-tooltip="Green"><span style={{ backgroundColor: '#ffc476' }} /></a></li>
                                <li><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/1_4.jpg" data-src-hover="assets/images/product-image/1_4.jpg" data-tooltip="Sky Blue"><span style={{ backgroundColor: '#1af0ba' }} /></a></li>
                              </ul>
                            </div>
                            <div className="ec-pro-size">
                              <span className="ec-pro-opt-label">Size</span>
                              <ul className="ec-opt-size">
                                <li className="active"><a href="#" className="ec-opt-sz" data-old="$40.00" data-new="$30.00" data-tooltip="Small">S</a></li>
                                <li><a href="#" className="ec-opt-sz" data-old="$50.00" data-new="$40.00" data-tooltip="Medium">M</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6  ec-product-content" data-animation="fadeIn">
                      <div className="ec-product-inner">
                        <div className="ec-pro-image-outer">
                          <div className="ec-pro-image">
                            <a href="product-left-sidebar.html" className="image">
                              <img className="main-image" src="assets/images/product-image/2_1.jpg" alt="Product" />
                              <img className="hover-image" src="assets/images/product-image/2_2.jpg" alt="Product" />
                            </a>
                            <span className="flags">
                              <span className="new">New</span>
                            </span>
                            <a href="#" className="quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#ec_quickview_modal"><img src="assets/images/icons/quickview.svg" className="svg_img pro_svg" alt /></a>
                            <div className="ec-pro-actions">
                              <a href="compare.html" className="ec-btn-group compare" title="Compare"><img src="assets/images/icons/compare.svg" className="svg_img pro_svg" alt /></a>
                              <button title="Add To Cart" className="add-to-cart"><img src="assets/images/icons/cart.svg" className="svg_img pro_svg" alt /> Add To Cart</button>
                              <a className="ec-btn-group wishlist" title="Wishlist"><img src="assets/images/icons/wishlist.svg" className="svg_img pro_svg" alt /></a>
                            </div>
                          </div>
                        </div>
                        <div className="ec-pro-content">
                          <h5 className="ec-pro-title"><a href="product-left-sidebar.html">Jumbo Carry Bag</a></h5>
                          <div className="ec-pro-rating">
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star" />
                          </div>
                          <span className="ec-price">
                            <span className="old-price">$50.00</span>
                            <span className="new-price">$40.00</span>
                          </span>
                          <div className="ec-pro-option">
                            <div className="ec-pro-color">
                              <span className="ec-pro-opt-label">Color</span>
                              <ul className="ec-opt-swatch ec-change-img">
                                <li className="active"><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/2_1.jpg" data-src-hover="assets/images/product-image/2_2.jpg" data-tooltip="Gray"><span style={{ backgroundColor: '#fdbf04' }} /></a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6  ec-product-content" data-animation="fadeIn">
                      <div className="ec-product-inner">
                        <div className="ec-pro-image-outer">
                          <div className="ec-pro-image">
                            <a href="product-left-sidebar.html" className="image">
                              <img className="main-image" src="assets/images/product-image/3_1.jpg" alt="Product" />
                              <img className="hover-image" src="assets/images/product-image/3_2.jpg" alt="Product" />
                            </a>
                            <span className="percentage">15%</span>
                            <a href="#" className="quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#ec_quickview_modal"><img src="assets/images/icons/quickview.svg" className="svg_img pro_svg" alt /></a>
                            <div className="ec-pro-actions">
                              <a href="compare.html" className="ec-btn-group compare" title="Compare"><img src="assets/images/icons/compare.svg" className="svg_img pro_svg" alt /></a>
                              <button title="Add To Cart" className="add-to-cart"><img src="assets/images/icons/cart.svg" className="svg_img pro_svg" alt /> Add To Cart</button>
                              <a className="ec-btn-group wishlist" title="Wishlist"><img src="assets/images/icons/wishlist.svg" className="svg_img pro_svg" alt /></a>
                            </div>
                          </div>
                        </div>
                        <div className="ec-pro-content">
                          <h5 className="ec-pro-title"><a href="product-left-sidebar.html">Designer Leather Purses</a></h5>
                          <div className="ec-pro-rating">
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star" />
                          </div>
                          <span className="ec-price">
                            <span className="old-price">$40.00</span>
                            <span className="new-price">$30.00</span>
                          </span>
                          <div className="ec-pro-option">
                            <div className="ec-pro-color">
                              <span className="ec-pro-opt-label">Color</span>
                              <ul className="ec-opt-swatch ec-change-img">
                                <li className="active"><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/3_1.jpg" data-src-hover="assets/images/product-image/3_1.jpg" data-tooltip="Gray"><span style={{ backgroundColor: '#75e3ff' }} /></a></li>
                                <li><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/3_2.jpg" data-src-hover="assets/images/product-image/3_2.jpg" data-tooltip="Orange"><span style={{ backgroundColor: '#11f7d8' }} /></a></li>
                                <li><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/3_3.jpg" data-src-hover="assets/images/product-image/3_3.jpg" data-tooltip="Green"><span style={{ backgroundColor: '#acff7c' }} /></a></li>
                                <li><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/3_5.jpg" data-src-hover="assets/images/product-image/3_5.jpg" data-tooltip="Sky Blue"><span style={{ backgroundColor: '#e996fa' }} /></a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6  ec-product-content" data-animation="fadeIn">
                      <div className="ec-product-inner">
                        <div className="ec-pro-image-outer">
                          <div className="ec-pro-image">
                            <a href="product-left-sidebar.html" className="image">
                              <img className="main-image" src="assets/images/product-image/4_1.jpg" alt="Product" />
                              <img className="hover-image" src="assets/images/product-image/4_2.jpg" alt="Product" />
                            </a>
                            <a href="#" className="quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#ec_quickview_modal"><img src="assets/images/icons/quickview.svg" className="svg_img pro_svg" alt /></a>
                            <div className="ec-pro-actions">
                              <a href="compare.html" className="ec-btn-group compare" title="Compare"><img src="assets/images/icons/compare.svg" className="svg_img pro_svg" alt /></a>
                              <button title="Add To Cart" className="add-to-cart"><img src="assets/images/icons/cart.svg" className="svg_img pro_svg" alt /> Add To Cart</button>
                              <a className="ec-btn-group wishlist" title="Wishlist"><img src="assets/images/icons/wishlist.svg" className="svg_img pro_svg" alt /></a>
                            </div>
                          </div>
                        </div>
                        <div className="ec-pro-content">
                          <h5 className="ec-pro-title"><a href="product-left-sidebar.html">Canvas Cowboy Hat</a></h5>
                          <div className="ec-pro-rating">
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star" />
                          </div>
                          <span className="ec-price">
                            <span className="old-price">$12.00</span>
                            <span className="new-price">$10.00</span>
                          </span>
                          <div className="ec-pro-option">
                            <div className="ec-pro-color">
                              <span className="ec-pro-opt-label">Color</span>
                              <ul className="ec-opt-swatch ec-change-img">
                                <li className="active"><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/4_1.jpg" data-src-hover="assets/images/product-image/4_1.jpg" data-tooltip="Gray"><span style={{ backgroundColor: '#ebbf60' }} /></a></li>
                                <li><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/4_2.jpg" data-src-hover="assets/images/product-image/4_2.jpg" data-tooltip="Orange"><span style={{ backgroundColor: '#b4fc57' }} /></a></li>
                                <li><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/4_3.jpg" data-src-hover="assets/images/product-image/4_3.jpg" data-tooltip="Green"><span style={{ backgroundColor: '#2ea1cd' }} /></a></li>
                                <li><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/4_4.jpg" data-src-hover="assets/images/product-image/4_4.jpg" data-tooltip="Sky Blue"><span style={{ backgroundColor: '#c1a1fd' }} /></a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6  ec-product-content" data-animation="fadeIn">
                      <div className="ec-product-inner">
                        <div className="ec-pro-image-outer">
                          <div className="ec-pro-image">
                            <a href="product-left-sidebar.html" className="image">
                              <img className="main-image" src="assets/images/product-image/5_1.jpg" alt="Product" />
                              <img className="hover-image" src="assets/images/product-image/5_2.jpg" alt="Product" />
                            </a>
                            <span className="flags">
                              <span className="new">New</span>
                            </span>
                            <a href="#" className="quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#ec_quickview_modal"><img src="assets/images/icons/quickview.svg" className="svg_img pro_svg" alt /></a>
                            <div className="ec-pro-actions">
                              <a href="compare.html" className="ec-btn-group compare" title="Compare"><img src="assets/images/icons/compare.svg" className="svg_img pro_svg" alt /></a>
                              <button title="Add To Cart" className="add-to-cart"><img src="assets/images/icons/cart.svg" className="svg_img pro_svg" alt /> Add To Cart</button>
                              <a className="ec-btn-group wishlist" title="Wishlist"><img src="assets/images/icons/wishlist.svg" className="svg_img pro_svg" alt /></a>
                            </div>
                          </div>
                        </div>
                        <div className="ec-pro-content">
                          <h5 className="ec-pro-title"><a href="product-left-sidebar.html">Leather Belt for Men</a></h5>
                          <div className="ec-pro-rating">
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star" />
                          </div>
                          <span className="ec-price">
                            <span className="old-price">$15.00</span>
                            <span className="new-price">$10.00</span>
                          </span>
                          <div className="ec-pro-option">
                            <div className="ec-pro-color">
                              <span className="ec-pro-opt-label">Color</span>
                              <ul className="ec-opt-swatch ec-change-img">
                                <li className="active"><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/5_1.jpg" data-src-hover="assets/images/product-image/5_1.jpg" data-tooltip="Gray"><span style={{ backgroundColor: '#9e9e9e' }} /></a></li>
                                <li><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/5_2.jpg" data-src-hover="assets/images/product-image/5_2.jpg" data-tooltip="Orange"><span style={{ backgroundColor: '#eb8e76' }} /></a></li>
                              </ul>
                            </div>
                            <div className="ec-pro-size">
                              <span className="ec-pro-opt-label">Size</span>
                              <ul className="ec-opt-size">
                                <li className="active"><a href="#" className="ec-opt-sz" data-old="$15.00" data-new="$10.00" data-tooltip="Small">32</a></li>
                                <li><a href="#" className="ec-opt-sz" data-old="$17.00" data-new="$12.00" data-tooltip="Medium">34</a></li>
                                <li><a href="#" className="ec-opt-sz" data-old="$20.00" data-new="$15.00" data-tooltip="Large">36</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6  ec-product-content" data-animation="fadeIn">
                      <div className="ec-product-inner">
                        <div className="ec-pro-image-outer">
                          <div className="ec-pro-image">
                            <a href="product-left-sidebar.html" className="image">
                              <img className="main-image" src="assets/images/product-image/8_1.jpg" alt="Product" />
                              <img className="hover-image" src="assets/images/product-image/8_2.jpg" alt="Product" />
                            </a>
                            <span className="percentage">35%</span>
                            <span className="flags">
                              <span className="new">New</span>
                            </span>
                            <a href="#" className="quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#ec_quickview_modal"><img src="assets/images/icons/quickview.svg" className="svg_img pro_svg" alt /></a>
                            <div className="ec-pro-actions">
                              <a href="compare.html" className="ec-btn-group compare" title="Compare"><img src="assets/images/icons/compare.svg" className="svg_img pro_svg" alt /></a>
                              <button title="Add To Cart" className="add-to-cart"><img src="assets/images/icons/cart.svg" className="svg_img pro_svg" alt /> Add To Cart</button>
                              <a className="ec-btn-group wishlist" title="Wishlist"><img src="assets/images/icons/wishlist.svg" className="svg_img pro_svg" alt /></a>
                            </div>
                          </div>
                        </div>
                        <div className="ec-pro-content">
                          <h5 className="ec-pro-title"><a href="product-left-sidebar.html">Digital Smart Watches</a></h5>
                          <div className="ec-pro-rating">
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star" />
                          </div>
                          <span className="ec-price">
                            <span className="old-price">$100.00</span>
                            <span className="new-price">$80.00</span>
                          </span>
                          <div className="ec-pro-option">
                            <div className="ec-pro-color">
                              <span className="ec-pro-opt-label">Color</span>
                              <ul className="ec-opt-swatch ec-change-img">
                                <li className="active"><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/8_2.jpg" data-src-hover="assets/images/product-image/8_2.jpg" data-tooltip="Gray"><span style={{ backgroundColor: '#e9dddd' }} /></a></li>
                                <li><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/8_3.jpg" data-src-hover="assets/images/product-image/8_3.jpg" data-tooltip="Orange"><span style={{ backgroundColor: '#ffd5cb' }} /></a></li>
                                <li><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/8_4.jpg" data-src-hover="assets/images/product-image/8_4.jpg" data-tooltip="Green"><span style={{ backgroundColor: '#92e4fd' }} /></a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 shop-all-btn"><a href="shop-left-sidebar-col-3.html">Shop All Collection</a></div>
                  </div>
                </div>
                {/* ec 1st Product tab end */}
                {/* ec 2nd Product tab start */}
                <div className="tab-pane fade" id="tab-pro-for-men">
                  <div className="row">
                    {/* Product Content */}
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6  ec-product-content">
                      <div className="ec-product-inner">
                        <div className="ec-pro-image-outer">
                          <div className="ec-pro-image">
                            <a href="product-left-sidebar.html" className="image">
                              <img className="main-image" src="assets/images/product-image/6_1.jpg" alt="Product" />
                              <img className="hover-image" src="assets/images/product-image/6_2.jpg" alt="Product" />
                            </a>
                            <span className="percentage">20%</span>
                            <a href="#" className="quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#ec_quickview_modal"><img src="assets/images/icons/quickview.svg" className="svg_img pro_svg" alt /></a>
                            <div className="ec-pro-actions">
                              <a href="compare.html" className="ec-btn-group compare" title="Compare"><img src="assets/images/icons/compare.svg" className="svg_img pro_svg" alt /></a>
                              <button title="Add To Cart" className="add-to-cart"><img src="assets/images/icons/cart.svg" className="svg_img pro_svg" alt /> Add To Cart</button>
                              <a className="ec-btn-group wishlist" title="Wishlist"><img src="assets/images/icons/wishlist.svg" className="svg_img pro_svg" alt /></a>
                            </div>
                          </div>
                        </div>
                        <div className="ec-pro-content">
                          <h5 className="ec-pro-title"><a href="product-left-sidebar.html">Round Neck T-Shirt</a></h5>
                          <div className="ec-pro-rating">
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star" />
                          </div>
                          <span className="ec-price">
                            <span className="old-price">$30.00</span>
                            <span className="new-price">$25.00</span>
                          </span>
                          <div className="ec-pro-option">
                            <div className="ec-pro-color">
                              <span className="ec-pro-opt-label">Color</span>
                              <ul className="ec-opt-swatch ec-change-img">
                                <li className="active"><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/6_1.jpg" data-src-hover="assets/images/product-image/6_1.jpg" data-tooltip="Gray"><span style={{ backgroundColor: '#e8c2ff' }} /></a></li>
                                <li><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/6_2.jpg" data-src-hover="assets/images/product-image/6_2.jpg" data-tooltip="Orange"><span style={{ backgroundColor: '#9cfdd5' }} /></a></li>
                              </ul>
                            </div>
                            <div className="ec-pro-size">
                              <span className="ec-pro-opt-label">Size</span>
                              <ul className="ec-opt-size">
                                <li className="active"><a href="#" className="ec-opt-sz" data-old="$25.00" data-new="$20.00" data-tooltip="Small">S</a></li>
                                <li><a href="#" className="ec-opt-sz" data-old="$27.00" data-new="$22.00" data-tooltip="Medium">M</a></li>
                                <li><a href="#" className="ec-opt-sz" data-old="$30.00" data-new="$25.00" data-tooltip="Large">X</a></li>
                                <li><a href="#" className="ec-opt-sz" data-old="$35.00" data-new="$30.00" data-tooltip="Extra Large">XL</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6  ec-product-content">
                      <div className="ec-product-inner">
                        <div className="ec-pro-image-outer">
                          <div className="ec-pro-image">
                            <a href="product-left-sidebar.html" className="image">
                              <img className="main-image" src="assets/images/product-image/7_1.jpg" alt="Product" />
                              <img className="hover-image" src="assets/images/product-image/7_2.jpg" alt="Product" />
                            </a>
                            <span className="percentage">20%</span>
                            <span className="flags">
                              <span className="sale">Sale</span>
                            </span>
                            <a href="#" className="quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#ec_quickview_modal"><img src="assets/images/icons/quickview.svg" className="svg_img pro_svg" alt /></a>
                            <div className="ec-pro-actions">
                              <a href="compare.html" className="ec-btn-group compare" title="Compare"><img src="assets/images/icons/compare.svg" className="svg_img pro_svg" alt /></a>
                              <button title="Add To Cart" className="add-to-cart"><img src="assets/images/icons/cart.svg" className="svg_img pro_svg" alt /> Add To Cart</button>
                              <a className="ec-btn-group wishlist" title="Wishlist"><img src="assets/images/icons/wishlist.svg" className="svg_img pro_svg" alt /></a>
                            </div>
                          </div>
                        </div>
                        <div className="ec-pro-content">
                          <h5 className="ec-pro-title"><a href="product-left-sidebar.html">Full Sleeve Shirt</a></h5>
                          <div className="ec-pro-rating">
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star" />
                          </div>
                          <span className="ec-price">
                            <span className="old-price">$12.00</span>
                            <span className="new-price">$10.00</span>
                          </span>
                          <div className="ec-pro-option">
                            <div className="ec-pro-color">
                              <span className="ec-pro-opt-label">Color</span>
                              <ul className="ec-opt-swatch ec-change-img">
                                <li className="active"><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/7_1.jpg" data-src-hover="assets/images/product-image/7_1.jpg" data-tooltip="Gray"><span style={{ backgroundColor: '#01f1f1' }} /></a></li>
                                <li><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/7_2.jpg" data-src-hover="assets/images/product-image/7_2.jpg" data-tooltip="Orange"><span style={{ backgroundColor: '#b89df8' }} /></a></li>
                              </ul>
                            </div>
                            <div className="ec-pro-size">
                              <span className="ec-pro-opt-label">Size</span>
                              <ul className="ec-opt-size">
                                <li className="active"><a href="#" className="ec-opt-sz" data-old="$12.00" data-new="$10.00" data-tooltip="Small">S</a></li>
                                <li><a href="#" className="ec-opt-sz" data-old="$15.00" data-new="$12.00" data-tooltip="Medium">M</a></li>
                                <li><a href="#" className="ec-opt-sz" data-old="$18.00" data-new="$15.00" data-tooltip="Large">X</a></li>
                                <li><a href="#" className="ec-opt-sz" data-old="$20.00" data-new="$17.00" data-tooltip="Extra Large">XL</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6  ec-product-content">
                      <div className="ec-product-inner">
                        <div className="ec-pro-image-outer">
                          <div className="ec-pro-image">
                            <a href="product-left-sidebar.html" className="image">
                              <img className="main-image" src="assets/images/product-image/2_1.jpg" alt="Product" />
                              <img className="hover-image" src="assets/images/product-image/2_2.jpg" alt="Product" />
                            </a>
                            <span className="percentage">20%</span>
                            <span className="flags">
                              <span className="new">New</span>
                            </span>
                            <a href="#" className="quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#ec_quickview_modal"><img src="assets/images/icons/quickview.svg" className="svg_img pro_svg" alt /></a>
                            <div className="ec-pro-actions">
                              <a href="compare.html" className="ec-btn-group compare" title="Compare"><img src="assets/images/icons/compare.svg" className="svg_img pro_svg" alt /></a>
                              <button title="Add To Cart" className="add-to-cart"><img src="assets/images/icons/cart.svg" className="svg_img pro_svg" alt /> Add To Cart</button>
                              <a className="ec-btn-group wishlist" title="Wishlist"><img src="assets/images/icons/wishlist.svg" className="svg_img pro_svg" alt /></a>
                            </div>
                          </div>
                        </div>
                        <div className="ec-pro-content">
                          <h5 className="ec-pro-title"><a href="product-left-sidebar.html">Jumbo Carry Bag</a></h5>
                          <div className="ec-pro-rating">
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star" />
                          </div>
                          <span className="ec-price">
                            <span className="old-price">$40.00</span>
                            <span className="new-price">$20.00</span>
                          </span>
                          <div className="ec-pro-option">
                            <div className="ec-pro-color">
                              <span className="ec-pro-opt-label">Color</span>
                              <ul className="ec-opt-swatch ec-change-img">
                                <li className="active"><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/2_1.jpg" data-src-hover="assets/images/product-image/2_2.jpg" data-tooltip="Gray"><span style={{ backgroundColor: '#fdbf04' }} /></a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6  ec-product-content">
                      <div className="ec-product-inner">
                        <div className="ec-pro-image-outer">
                          <div className="ec-pro-image">
                            <a href="product-left-sidebar.html" className="image">
                              <img className="main-image" src="assets/images/product-image/4_1.jpg" alt="Product" />
                              <img className="hover-image" src="assets/images/product-image/4_2.jpg" alt="Product" />
                            </a>
                            <a href="#" className="quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#ec_quickview_modal"><img src="assets/images/icons/quickview.svg" className="svg_img pro_svg" alt /></a>
                            <div className="ec-pro-actions">
                              <a href="compare.html" className="ec-btn-group compare" title="Compare"><img src="assets/images/icons/compare.svg" className="svg_img pro_svg" alt /></a>
                              <button title="Add To Cart" className="add-to-cart"><img src="assets/images/icons/cart.svg" className="svg_img pro_svg" alt /> Add To Cart</button>
                              <a className="ec-btn-group wishlist" title="Wishlist"><img src="assets/images/icons/wishlist.svg" className="svg_img pro_svg" alt /></a>
                            </div>
                          </div>
                        </div>
                        <div className="ec-pro-content">
                          <h5 className="ec-pro-title"><a href="product-left-sidebar.html">Canvas Cowboy Hat</a></h5>
                          <div className="ec-pro-rating">
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star" />
                          </div>
                          <span className="ec-price">
                            <span className="old-price">$12.00</span>
                            <span className="new-price">$10.00</span>
                          </span>
                          <div className="ec-pro-option">
                            <div className="ec-pro-color">
                              <span className="ec-pro-opt-label">Color</span>
                              <ul className="ec-opt-swatch ec-change-img">
                                <li className="active"><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/4_1.jpg" data-src-hover="assets/images/product-image/4_1.jpg" data-tooltip="Gray"><span style={{ backgroundColor: '#ebbf60' }} /></a></li>
                                <li><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/4_2.jpg" data-src-hover="assets/images/product-image/4_2.jpg" data-tooltip="Orange"><span style={{ backgroundColor: '#b4fc57' }} /></a></li>
                                <li><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/4_3.jpg" data-src-hover="assets/images/product-image/4_3.jpg" data-tooltip="Green"><span style={{ backgroundColor: '#2ea1cd' }} /></a></li>
                                <li><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/4_4.jpg" data-src-hover="assets/images/product-image/4_4.jpg" data-tooltip="Sky Blue"><span style={{ backgroundColor: '#c1a1fd' }} /></a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6  ec-product-content">
                      <div className="ec-product-inner">
                        <div className="ec-pro-image-outer">
                          <div className="ec-pro-image">
                            <a href="product-left-sidebar.html" className="image">
                              <img className="main-image" src="assets/images/product-image/5_1.jpg" alt="Product" />
                              <img className="hover-image" src="assets/images/product-image/5_2.jpg" alt="Product" />
                            </a>
                            <span className="flags">
                              <span className="new">New</span>
                            </span>
                            <a href="#" className="quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#ec_quickview_modal"><img src="assets/images/icons/quickview.svg" className="svg_img pro_svg" alt /></a>
                            <div className="ec-pro-actions">
                              <a href="compare.html" className="ec-btn-group compare" title="Compare"><img src="assets/images/icons/compare.svg" className="svg_img pro_svg" alt /></a>
                              <button title="Add To Cart" className="add-to-cart"><img src="assets/images/icons/cart.svg" className="svg_img pro_svg" alt /> Add To Cart</button>
                              <a className="ec-btn-group wishlist" title="Wishlist"><img src="assets/images/icons/wishlist.svg" className="svg_img pro_svg" alt /></a>
                            </div>
                          </div>
                        </div>
                        <div className="ec-pro-content">
                          <h5 className="ec-pro-title"><a href="product-left-sidebar.html">Leather Belt for Men</a></h5>
                          <div className="ec-pro-rating">
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star" />
                          </div>
                          <span className="ec-price">
                            <span className="old-price">$15.00</span>
                            <span className="new-price">$10.00</span>
                          </span>
                          <div className="ec-pro-option">
                            <div className="ec-pro-color">
                              <span className="ec-pro-opt-label">Color</span>
                              <ul className="ec-opt-swatch ec-change-img">
                                <li className="active"><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/5_1.jpg" data-src-hover="assets/images/product-image/5_1.jpg" data-tooltip="Gray"><span style={{ backgroundColor: '#9e9e9e' }} /></a></li>
                                <li><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/5_2.jpg" data-src-hover="assets/images/product-image/5_2.jpg" data-tooltip="Orange"><span style={{ backgroundColor: '#eb8e76' }} /></a></li>
                              </ul>
                            </div>
                            <div className="ec-pro-size">
                              <span className="ec-pro-opt-label">Size</span>
                              <ul className="ec-opt-size">
                                <li className="active"><a href="#" className="ec-opt-sz" data-old="$15.00" data-new="$10.00" data-tooltip="Small">32</a></li>
                                <li><a href="#" className="ec-opt-sz" data-old="$17.00" data-new="$12.00" data-tooltip="Medium">34</a></li>
                                <li><a href="#" className="ec-opt-sz" data-old="$20.00" data-new="$15.00" data-tooltip="Large">36</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6  ec-product-content">
                      <div className="ec-product-inner">
                        <div className="ec-pro-image-outer">
                          <div className="ec-pro-image">
                            <a href="product-left-sidebar.html" className="image">
                              <img className="main-image" src="assets/images/product-image/8_1.jpg" alt="Product" />
                              <img className="hover-image" src="assets/images/product-image/8_2.jpg" alt="Product" />
                            </a>
                            <span className="percentage">20%</span>
                            <span className="flags">
                              <span className="new">New</span>
                            </span>
                            <a href="#" className="quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#ec_quickview_modal"><img src="assets/images/icons/quickview.svg" className="svg_img pro_svg" alt /></a>
                            <div className="ec-pro-actions">
                              <a href="compare.html" className="ec-btn-group compare" title="Compare"><img src="assets/images/icons/compare.svg" className="svg_img pro_svg" alt /></a>
                              <button title="Add To Cart" className="add-to-cart"><img src="assets/images/icons/cart.svg" className="svg_img pro_svg" alt /> Add To Cart</button>
                              <a className="ec-btn-group wishlist" title="Wishlist"><img src="assets/images/icons/wishlist.svg" className="svg_img pro_svg" alt /></a>
                            </div>
                          </div>
                        </div>
                        <div className="ec-pro-content">
                          <h5 className="ec-pro-title"><a href="product-left-sidebar.html">Digital Smart Watches</a></h5>
                          <div className="ec-pro-rating">
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star" />
                          </div>
                          <span className="ec-price">
                            <span className="old-price">$100.00</span>
                            <span className="new-price">$80.00</span>
                          </span>
                          <div className="ec-pro-option">
                            <div className="ec-pro-color">
                              <span className="ec-pro-opt-label">Color</span>
                              <ul className="ec-opt-swatch ec-change-img">
                                <li className="active"><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/8_2.jpg" data-src-hover="assets/images/product-image/8_2.jpg" data-tooltip="Gray"><span style={{ backgroundColor: '#e9dddd' }} /></a></li>
                                <li><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/8_3.jpg" data-src-hover="assets/images/product-image/8_3.jpg" data-tooltip="Orange"><span style={{ backgroundColor: '#ffd5cb' }} /></a></li>
                                <li><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/8_4.jpg" data-src-hover="assets/images/product-image/8_4.jpg" data-tooltip="Green"><span style={{ backgroundColor: '#92e4fd' }} /></a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6  ec-product-content">
                      <div className="ec-product-inner">
                        <div className="ec-pro-image-outer">
                          <div className="ec-pro-image">
                            <a href="product-left-sidebar.html" className="image">
                              <img className="main-image" src="assets/images/product-image/10_1.jpg" alt="Product" />
                              <img className="hover-image" src="assets/images/product-image/10_2.jpg" alt="Product" />
                            </a>
                            <span className="percentage">20%</span>
                            <span className="flags">
                              <span className="sale">Sale</span>
                            </span>
                            <a href="#" className="quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#ec_quickview_modal"><img src="assets/images/icons/quickview.svg" className="svg_img pro_svg" alt /></a>
                            <div className="ec-pro-actions">
                              <a href="compare.html" className="ec-btn-group compare" title="Compare"><img src="assets/images/icons/compare.svg" className="svg_img pro_svg" alt /></a>
                              <button title="Add To Cart" className="add-to-cart"><img src="assets/images/icons/cart.svg" className="svg_img pro_svg" alt /> Add To Cart</button>
                              <a className="ec-btn-group wishlist" title="Wishlist"><img src="assets/images/icons/wishlist.svg" className="svg_img pro_svg" alt /></a>
                            </div>
                          </div>
                        </div>
                        <div className="ec-pro-content">
                          <h5 className="ec-pro-title"><a href="product-left-sidebar.html">Canvas Shoes for Men</a></h5>
                          <div className="ec-pro-rating">
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star" />
                          </div>
                          <span className="ec-price">
                            <span className="old-price">$30.00</span>
                            <span className="new-price">$25.00</span>
                          </span>
                          <div className="ec-pro-option">
                            <div className="ec-pro-color">
                              <span className="ec-pro-opt-label">Color</span>
                              <ul className="ec-opt-swatch ec-change-img">
                                <li className="active"><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/10_1.jpg" data-src-hover="assets/images/product-image/10_1.jpg" data-tooltip="Gray"><span style={{ backgroundColor: '#41d49c' }} /></a></li>
                                <li><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/10_2.jpg" data-src-hover="assets/images/product-image/10_2.jpg" data-tooltip="Orange"><span style={{ backgroundColor: '#fc8484' }} /></a></li>
                                <li><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/10_3.jpg" data-src-hover="assets/images/product-image/10_3.jpg" data-tooltip="Green"><span style={{ backgroundColor: '#db94f7' }} /></a></li>
                                <li><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/10_4.jpg" data-src-hover="assets/images/product-image/10_4.jpg" data-tooltip="Sky Blue"><span style={{ backgroundColor: '#24da0c' }} /></a></li>
                              </ul>
                            </div>
                            <div className="ec-pro-size">
                              <span className="ec-pro-opt-label">Size</span>
                              <ul className="ec-opt-size">
                                <li className="active"><a href="#" className="ec-opt-sz" data-old="$30.00" data-new="$25.00" data-tooltip="Small">6</a></li>
                                <li><a href="#" className="ec-opt-sz" data-old="$35.00" data-new="$27.00" data-tooltip="Medium">7</a></li>
                                <li><a href="#" className="ec-opt-sz" data-old="$40.00" data-new="$30.00" data-tooltip="Large">8</a></li>
                                <li><a href="#" className="ec-opt-sz" data-old="$45.00" data-new="$35.00" data-tooltip="Extra Large">9</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6  ec-product-content">
                      <div className="ec-product-inner">
                        <div className="ec-pro-image-outer">
                          <div className="ec-pro-image">
                            <a href="product-left-sidebar.html" className="image">
                              <img className="main-image" src="assets/images/product-image/9_1.jpg" alt="Product" />
                              <img className="hover-image" src="assets/images/product-image/9_2.jpg" alt="Product" />
                            </a>
                            <span className="percentage">20%</span>
                            <span className="flags">
                              <span className="sale">Sale</span>
                            </span>
                            <a href="#" className="quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#ec_quickview_modal"><img src="assets/images/icons/quickview.svg" className="svg_img pro_svg" alt /></a>
                            <div className="ec-pro-actions">
                              <a href="compare.html" className="ec-btn-group compare" title="Compare"><img src="assets/images/icons/compare.svg" className="svg_img pro_svg" alt /></a>
                              <button title="Add To Cart" className="add-to-cart"><img src="assets/images/icons/cart.svg" className="svg_img pro_svg" alt /> Add To Cart</button>
                              <a className="ec-btn-group wishlist" title="Wishlist"><img src="assets/images/icons/wishlist.svg" className="svg_img pro_svg" alt /></a>
                            </div>
                          </div>
                        </div>
                        <div className="ec-pro-content">
                          <h5 className="ec-pro-title"><a href="product-left-sidebar.html">Full Sleeve T-Shirt</a></h5>
                          <div className="ec-pro-rating">
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star" />
                          </div>
                          <span className="ec-price">
                            <span className="old-price">$30.00</span>
                            <span className="new-price">$25.00</span>
                          </span>
                          <div className="ec-pro-option">
                            <div className="ec-pro-color">
                              <span className="ec-pro-opt-label">Color</span>
                              <ul className="ec-opt-swatch ec-change-img">
                                <li className="active"><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/9_1.jpg" data-src-hover="assets/images/product-image/9_1.jpg" data-tooltip="Gray"><span style={{ backgroundColor: '#21b7fc' }} /></a></li>
                                <li><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/9_2.jpg" data-src-hover="assets/images/product-image/9_2.jpg" data-tooltip="Orange"><span style={{ backgroundColor: '#1df0ff' }} /></a></li>
                                <li><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/9_3.jpg" data-src-hover="assets/images/product-image/9_3.jpg" data-tooltip="Green"><span style={{ backgroundColor: '#94f7a1' }} /></a></li>
                              </ul>
                            </div>
                            <div className="ec-pro-size">
                              <span className="ec-pro-opt-label">Size</span>
                              <ul className="ec-opt-size">
                                <li className="active"><a href="#" className="ec-opt-sz" data-old="$30.00" data-new="$25.00" data-tooltip="Small">S</a></li>
                                <li><a href="#" className="ec-opt-sz" data-old="$35.00" data-new="$27.00" data-tooltip="Medium">M</a></li>
                                <li><a href="#" className="ec-opt-sz" data-old="$40.00" data-new="$30.00" data-tooltip="Large">X</a></li>
                                <li><a href="#" className="ec-opt-sz" data-old="$45.00" data-new="$35.00" data-tooltip="Extra Large">XL</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 shop-all-btn"><a href="shop-left-sidebar-col-3.html">Shop All Collection</a></div>
                  </div>
                </div>
                {/* ec 2nd Product tab end */}
                {/* ec 3rd Product tab start */}
                <div className="tab-pane fade" id="tab-pro-for-women">
                  <div className="row">
                    {/* Product Content */}
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6  ec-product-content">
                      <div className="ec-product-inner">
                        <div className="ec-pro-image-outer">
                          <div className="ec-pro-image">
                            <a href="product-left-sidebar.html" className="image">
                              <img className="main-image" src="assets/images/product-image/9_1.jpg" alt="Product" />
                              <img className="hover-image" src="assets/images/product-image/9_2.jpg" alt="Product" />
                            </a>
                            <span className="percentage">20%</span>
                            <span className="flags">
                              <span className="sale">Sale</span>
                            </span>
                            <a href="#" className="quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#ec_quickview_modal"><img src="assets/images/icons/quickview.svg" className="svg_img pro_svg" alt /></a>
                            <div className="ec-pro-actions">
                              <a href="compare.html" className="ec-btn-group compare" title="Compare"><img src="assets/images/icons/compare.svg" className="svg_img pro_svg" alt /></a>
                              <button title="Add To Cart" className="add-to-cart"><img src="assets/images/icons/cart.svg" className="svg_img pro_svg" alt /> Add To Cart</button>
                              <a className="ec-btn-group wishlist" title="Wishlist"><img src="assets/images/icons/wishlist.svg" className="svg_img pro_svg" alt /></a>
                            </div>
                          </div>
                        </div>
                        <div className="ec-pro-content">
                          <h5 className="ec-pro-title"><a href="product-left-sidebar.html">Canvas Shoes for Men</a></h5>
                          <div className="ec-pro-rating">
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star" />
                          </div>
                          <span className="ec-price">
                            <span className="old-price">$30.00</span>
                            <span className="new-price">$25.00</span>
                          </span>
                          <div className="ec-pro-option">
                            <div className="ec-pro-color">
                              <span className="ec-pro-opt-label">Color</span>
                              <ul className="ec-opt-swatch ec-change-img">
                                <li className="active"><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/9_1.jpg" data-src-hover="assets/images/product-image/9_1.jpg" data-tooltip="Gray"><span style={{ backgroundColor: '#21b7fc' }} /></a></li>
                                <li><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/9_2.jpg" data-src-hover="assets/images/product-image/9_2.jpg" data-tooltip="Orange"><span style={{ backgroundColor: '#1df0ff' }} /></a></li>
                                <li><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/9_3.jpg" data-src-hover="assets/images/product-image/9_3.jpg" data-tooltip="Green"><span style={{ backgroundColor: '#94f7a1' }} /></a></li>
                              </ul>
                            </div>
                            <div className="ec-pro-size">
                              <span className="ec-pro-opt-label">Size</span>
                              <ul className="ec-opt-size">
                                <li className="active"><a href="#" className="ec-opt-sz" data-old="$30.00" data-new="$25.00" data-tooltip="Small">S</a></li>
                                <li><a href="#" className="ec-opt-sz" data-old="$35.00" data-new="$27.00" data-tooltip="Medium">M</a></li>
                                <li><a href="#" className="ec-opt-sz" data-old="$40.00" data-new="$30.00" data-tooltip="Large">X</a></li>
                                <li><a href="#" className="ec-opt-sz" data-old="$45.00" data-new="$35.00" data-tooltip="Extra Large">XL</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6  ec-product-content">
                      <div className="ec-product-inner">
                        <div className="ec-pro-image-outer">
                          <div className="ec-pro-image">
                            <a href="product-left-sidebar.html" className="image">
                              <img className="main-image" src="assets/images/product-image/6_1.jpg" alt="Product" />
                              <img className="hover-image" src="assets/images/product-image/6_2.jpg" alt="Product" />
                            </a>
                            <span className="percentage">20%</span>
                            <a href="#" className="quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#ec_quickview_modal"><img src="assets/images/icons/quickview.svg" className="svg_img pro_svg" alt /></a>
                            <div className="ec-pro-actions">
                              <a href="compare.html" className="ec-btn-group compare" title="Compare"><img src="assets/images/icons/compare.svg" className="svg_img pro_svg" alt /></a>
                              <button title="Add To Cart" className="add-to-cart"><img src="assets/images/icons/cart.svg" className="svg_img pro_svg" alt /> Add To Cart</button>
                              <a className="ec-btn-group wishlist" title="Wishlist"><img src="assets/images/icons/wishlist.svg" className="svg_img pro_svg" alt /></a>
                            </div>
                          </div>
                        </div>
                        <div className="ec-pro-content">
                          <h5 className="ec-pro-title"><a href="product-left-sidebar.html">Round Neck T-Shirt</a></h5>
                          <div className="ec-pro-rating">
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star" />
                          </div>
                          <span className="ec-price">
                            <span className="old-price">$30.00</span>
                            <span className="new-price">$25.00</span>
                          </span>
                          <div className="ec-pro-option">
                            <div className="ec-pro-color">
                              <span className="ec-pro-opt-label">Color</span>
                              <ul className="ec-opt-swatch ec-change-img">
                                <li className="active"><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/6_1.jpg" data-src-hover="assets/images/product-image/6_1.jpg" data-tooltip="Gray"><span style={{ backgroundColor: '#e8c2ff' }} /></a></li>
                                <li><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/6_2.jpg" data-src-hover="assets/images/product-image/6_2.jpg" data-tooltip="Orange"><span style={{ backgroundColor: '#9cfdd5' }} /></a></li>
                              </ul>
                            </div>
                            <div className="ec-pro-size">
                              <span className="ec-pro-opt-label">Size</span>
                              <ul className="ec-opt-size">
                                <li className="active"><a href="#" className="ec-opt-sz" data-old="$25.00" data-new="$20.00" data-tooltip="Small">S</a></li>
                                <li><a href="#" className="ec-opt-sz" data-old="$27.00" data-new="$22.00" data-tooltip="Medium">M</a></li>
                                <li><a href="#" className="ec-opt-sz" data-old="$30.00" data-new="$25.00" data-tooltip="Large">X</a></li>
                                <li><a href="#" className="ec-opt-sz" data-old="$35.00" data-new="$30.00" data-tooltip="Extra Large">XL</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6  ec-product-content">
                      <div className="ec-product-inner">
                        <div className="ec-pro-image-outer">
                          <div className="ec-pro-image">
                            <a href="product-left-sidebar.html" className="image">
                              <img className="main-image" src="assets/images/product-image/8_1.jpg" alt="Product" />
                              <img className="hover-image" src="assets/images/product-image/8_2.jpg" alt="Product" />
                            </a>
                            <span className="percentage">20%</span>
                            <span className="flags">
                              <span className="new">New</span>
                            </span>
                            <a href="#" className="quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#ec_quickview_modal"><img src="assets/images/icons/quickview.svg" className="svg_img pro_svg" alt /></a>
                            <div className="ec-pro-actions">
                              <a href="compare.html" className="ec-btn-group compare" title="Compare"><img src="assets/images/icons/compare.svg" className="svg_img pro_svg" alt /></a>
                              <button title="Add To Cart" className="add-to-cart"><img src="assets/images/icons/cart.svg" className="svg_img pro_svg" alt /> Add To Cart</button>
                              <a className="ec-btn-group wishlist" title="Wishlist"><img src="assets/images/icons/wishlist.svg" className="svg_img pro_svg" alt /></a>
                            </div>
                          </div>
                        </div>
                        <div className="ec-pro-content">
                          <h5 className="ec-pro-title"><a href="product-left-sidebar.html">Digital Smart Watches</a></h5>
                          <div className="ec-pro-rating">
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star" />
                          </div>
                          <span className="ec-price">
                            <span className="old-price">$100.00</span>
                            <span className="new-price">$80.00</span>
                          </span>
                          <div className="ec-pro-option">
                            <div className="ec-pro-color">
                              <span className="ec-pro-opt-label">Color</span>
                              <ul className="ec-opt-swatch ec-change-img">
                                <li className="active"><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/8_2.jpg" data-src-hover="assets/images/product-image/8_2.jpg" data-tooltip="Gray"><span style={{ backgroundColor: '#e9dddd' }} /></a></li>
                                <li><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/8_3.jpg" data-src-hover="assets/images/product-image/8_3.jpg" data-tooltip="Orange"><span style={{ backgroundColor: '#ffd5cb' }} /></a></li>
                                <li><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/8_4.jpg" data-src-hover="assets/images/product-image/8_4.jpg" data-tooltip="Green"><span style={{ backgroundColor: '#92e4fd' }} /></a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6  ec-product-content">
                      <div className="ec-product-inner">
                        <div className="ec-pro-image-outer">
                          <div className="ec-pro-image">
                            <a href="product-left-sidebar.html" className="image">
                              <img className="main-image" src="assets/images/product-image/3_1.jpg" alt="Product" />
                              <img className="hover-image" src="assets/images/product-image/3_2.jpg" alt="Product" />
                            </a>
                            <span className="percentage">20%</span>
                            <span className="flags">
                              <span className="new">New</span>
                            </span>
                            <a href="#" className="quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#ec_quickview_modal"><img src="assets/images/icons/quickview.svg" className="svg_img pro_svg" alt /></a>
                            <div className="ec-pro-actions">
                              <a href="compare.html" className="ec-btn-group compare" title="Compare"><img src="assets/images/icons/compare.svg" className="svg_img pro_svg" alt /></a>
                              <button title="Add To Cart" className="add-to-cart"><img src="assets/images/icons/cart.svg" className="svg_img pro_svg" alt /> Add To Cart</button>
                              <a className="ec-btn-group wishlist" title="Wishlist"><img src="assets/images/icons/wishlist.svg" className="svg_img pro_svg" alt /></a>
                            </div>
                          </div>
                        </div>
                        <div className="ec-pro-content">
                          <h5 className="ec-pro-title"><a href="product-left-sidebar.html">Designer Leather Purses</a></h5>
                          <div className="ec-pro-rating">
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star" />
                          </div>
                          <span className="ec-price">
                            <span className="old-price">$40.00</span>
                            <span className="new-price">$30.00</span>
                          </span>
                          <div className="ec-pro-option">
                            <div className="ec-pro-color">
                              <span className="ec-pro-opt-label">Color</span>
                              <ul className="ec-opt-swatch ec-change-img">
                                <li className="active"><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/3_1.jpg" data-src-hover="assets/images/product-image/3_1.jpg" data-tooltip="Gray"><span style={{ backgroundColor: '#75e3ff' }} /></a></li>
                                <li><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/3_2.jpg" data-src-hover="assets/images/product-image/3_2.jpg" data-tooltip="Orange"><span style={{ backgroundColor: '#11f7d8' }} /></a></li>
                                <li><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/3_3.jpg" data-src-hover="assets/images/product-image/3_3.jpg" data-tooltip="Green"><span style={{ backgroundColor: '#acff7c' }} /></a></li>
                                <li><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/3_5.jpg" data-src-hover="assets/images/product-image/3_5.jpg" data-tooltip="Sky Blue"><span style={{ backgroundColor: '#e996fa' }} /></a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6  ec-product-content">
                      <div className="ec-product-inner">
                        <div className="ec-pro-image-outer">
                          <div className="ec-pro-image">
                            <a href="product-left-sidebar.html" className="image">
                              <img className="main-image" src="assets/images/product-image/11_1.jpg" alt="Product" />
                              <img className="hover-image" src="assets/images/product-image/11_2.jpg" alt="Product" />
                            </a>
                            <span className="percentage">20%</span>
                            <span className="flags">
                              <span className="new">New</span>
                            </span>
                            <a href="#" className="quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#ec_quickview_modal"><img src="assets/images/icons/quickview.svg" className="svg_img pro_svg" alt /></a>
                            <div className="ec-pro-actions">
                              <a href="compare.html" className="ec-btn-group compare" title="Compare"><img src="assets/images/icons/compare.svg" className="svg_img pro_svg" alt /></a>
                              <button title="Add To Cart" className="add-to-cart"><img src="assets/images/icons/cart.svg" className="svg_img pro_svg" alt /> Add To
                                Cart</button>
                              <a className="ec-btn-group wishlist" title="Wishlist"><img src="assets/images/icons/wishlist.svg" className="svg_img pro_svg" alt /></a>
                            </div>
                          </div>
                        </div>
                        <div className="ec-pro-content">
                          <h5 className="ec-pro-title"><a href="product-left-sidebar.html">Classic Leather purse</a></h5>
                          <div className="ec-pro-rating">
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star" />
                          </div>
                          <span className="ec-price">
                            <span className="old-price">$100.00</span>
                            <span className="new-price">$80.00</span>
                          </span>
                          <div className="ec-pro-option">
                            <div className="ec-pro-color">
                              <span className="ec-pro-opt-label">Color</span>
                              <ul className="ec-opt-swatch ec-change-img">
                                <li className="active"><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/11_1.jpg" data-src-hover="assets/images/product-image/11_1.jpg" data-tooltip="Gray"><span style={{ backgroundColor: '#dba4ff' }} /></a>
                                </li>
                                <li><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/11_2.jpg" data-src-hover="assets/images/product-image/11_2.jpg" data-tooltip="Orange"><span style={{ backgroundColor: '#ff4a77' }} /></a></li>
                                <li><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/11_3.jpg" data-src-hover="assets/images/product-image/11_3.jpg" data-tooltip="Green"><span style={{ backgroundColor: '#c9ff55' }} /></a>
                                </li>
                                <li><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/11_4.jpg" data-src-hover="assets/images/product-image/11_4.jpg" data-tooltip="Sky Blue"><span style={{ backgroundColor: '#ffcc5e' }} /></a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6  ec-product-content">
                      <div className="ec-product-inner">
                        <div className="ec-pro-image-outer">
                          <div className="ec-pro-image">
                            <a href="product-left-sidebar.html" className="image">
                              <img className="main-image" src="assets/images/product-image/12_1.jpg" alt="Product" />
                              <img className="hover-image" src="assets/images/product-image/12_2.jpg" alt="Product" />
                            </a>
                            <span className="percentage">20%</span>
                            <span className="flags">
                              <span className="sale">Sale</span>
                            </span>
                            <a href="#" className="quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#ec_quickview_modal"><img src="assets/images/icons/quickview.svg" className="svg_img pro_svg" alt /></a>
                            <div className="ec-pro-actions">
                              <a href="compare.html" className="ec-btn-group compare" title="Compare"><img src="assets/images/icons/compare.svg" className="svg_img pro_svg" alt /></a>
                              <button title="Add To Cart" className="add-to-cart"><img src="assets/images/icons/cart.svg" className="svg_img pro_svg" alt /> Add To
                                Cart</button>
                              <a className="ec-btn-group wishlist" title="Wishlist"><img src="assets/images/icons/wishlist.svg" className="svg_img pro_svg" alt /></a>
                            </div>
                          </div>
                        </div>
                        <div className="ec-pro-content">
                          <h5 className="ec-pro-title"><a href="product-left-sidebar.html">Fancy Ladies Sandal</a></h5>
                          <div className="ec-pro-rating">
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star" />
                          </div>
                          <span className="ec-price">
                            <span className="old-price">$100.00</span>
                            <span className="new-price">$80.00</span>
                          </span>
                          <div className="ec-pro-option">
                            <div className="ec-pro-color">
                              <span className="ec-pro-opt-label">Color</span>
                              <ul className="ec-opt-swatch ec-change-img">
                                <li className="active"><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/12_1.jpg" data-src-hover="assets/images/product-image/12_1.jpg" data-tooltip="Gray"><span style={{ backgroundColor: '#db9dff' }} /></a>
                                </li>
                                <li><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/12_2.jpg" data-src-hover="assets/images/product-image/12_2.jpg" data-tooltip="Orange"><span style={{ backgroundColor: '#00ffff' }} /></a></li>
                                <li><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/12_3.jpg" data-src-hover="assets/images/product-image/12_3.jpg" data-tooltip="Green"><span style={{ backgroundColor: '#ffa7f3' }} /></a>
                                </li>
                                <li><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/12_4.jpg" data-src-hover="assets/images/product-image/12_4.jpg" data-tooltip="Sky Blue"><span style={{ backgroundColor: '#89ff7e' }} /></a></li>
                              </ul>
                            </div>
                            <div className="ec-pro-size">
                              <span className="ec-pro-opt-label">Size</span>
                              <ul className="ec-opt-size">
                                <li className="active"><a href="#" className="ec-opt-sz" data-old="$50.00" data-new="$40.00" data-tooltip="Small">6</a></li>
                                <li><a href="#" className="ec-opt-sz" data-old="$60.00" data-new="$50.00" data-tooltip="Medium">7</a></li>
                                <li><a href="#" className="ec-opt-sz" data-old="$70.00" data-new="$60.00" data-tooltip="Large">8</a></li>
                                <li><a href="#" className="ec-opt-sz" data-old="$80.00" data-new="$70.00" data-tooltip="Extra Large">9</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6  ec-product-content">
                      <div className="ec-product-inner">
                        <div className="ec-pro-image-outer">
                          <div className="ec-pro-image">
                            <a href="product-left-sidebar.html" className="image">
                              <img className="main-image" src="assets/images/product-image/13_1.jpg" alt="Product" />
                              <img className="hover-image" src="assets/images/product-image/13_2.jpg" alt="Product" />
                            </a>
                            <a href="#" className="quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#ec_quickview_modal"><img src="assets/images/icons/quickview.svg" className="svg_img pro_svg" alt /></a>
                            <div className="ec-pro-actions">
                              <a href="compare.html" className="ec-btn-group compare" title="Compare"><img src="assets/images/icons/compare.svg" className="svg_img pro_svg" alt /></a>
                              <button title="Add To Cart" className="add-to-cart"><img src="assets/images/icons/cart.svg" className="svg_img pro_svg" alt /> Add To
                                Cart</button>
                              <a className="ec-btn-group wishlist" title="Wishlist"><img src="assets/images/icons/wishlist.svg" className="svg_img pro_svg" alt /></a>
                            </div>
                          </div>
                        </div>
                        <div className="ec-pro-content">
                          <h5 className="ec-pro-title"><a href="product-left-sidebar.html">Womens Leather Backpack</a></h5>
                          <div className="ec-pro-rating">
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star" />
                          </div>
                          <span className="ec-price">
                            <span className="old-price">$100.00</span>
                            <span className="new-price">$80.00</span>
                          </span>
                          <div className="ec-pro-option">
                            <div className="ec-pro-color">
                              <span className="ec-pro-opt-label">Color</span>
                              <ul className="ec-opt-swatch ec-change-img">
                                <li className="active"><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/13_1.jpg" data-src-hover="assets/images/product-image/13_1.jpg" data-tooltip="Gray"><span style={{ backgroundColor: '#deffa4' }} /></a>
                                </li>
                                <li><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/13_2.jpg" data-src-hover="assets/images/product-image/13_2.jpg" data-tooltip="Orange"><span style={{ backgroundColor: '#ffcdbe' }} /></a></li>
                                <li><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/13_3.jpg" data-src-hover="assets/images/product-image/13_3.jpg" data-tooltip="Green"><span style={{ backgroundColor: '#ff94df' }} /></a>
                                </li>
                                <li><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/13_4.jpg" data-src-hover="assets/images/product-image/13_4.jpg" data-tooltip="Sky Blue"><span style={{ backgroundColor: '#dd9bfc' }} /></a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6  ec-product-content">
                      <div className="ec-product-inner">
                        <div className="ec-pro-image-outer">
                          <div className="ec-pro-image">
                            <a href="product-left-sidebar.html" className="image">
                              <img className="main-image" src="assets/images/product-image/14_1.jpg" alt="Product" />
                              <img className="hover-image" src="assets/images/product-image/14_2.jpg" alt="Product" />
                            </a>
                            <span className="percentage">20%</span>
                            <a href="#" className="quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#ec_quickview_modal"><img src="assets/images/icons/quickview.svg" className="svg_img pro_svg" alt /></a>
                            <div className="ec-pro-actions">
                              <a href="compare.html" className="ec-btn-group compare" title="Compare"><img src="assets/images/icons/compare.svg" className="svg_img pro_svg" alt /></a>
                              <button title="Add To Cart" className="add-to-cart"><img src="assets/images/icons/cart.svg" className="svg_img pro_svg" alt /> Add To Cart</button>
                              <a className="ec-btn-group wishlist" title="Wishlist"><img src="assets/images/icons/wishlist.svg" className="svg_img pro_svg" alt /></a>
                            </div>
                          </div>
                        </div>
                        <div className="ec-pro-content">
                          <h5 className="ec-pro-title"><a href="product-left-sidebar.html">Beautiful Watch for Women</a></h5>
                          <div className="ec-pro-rating">
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star" />
                          </div>
                          <span className="ec-price">
                            <span className="old-price">$100.00</span>
                            <span className="new-price">$80.00</span>
                          </span>
                          <div className="ec-pro-option">
                            <div className="ec-pro-color">
                              <span className="ec-pro-opt-label">Color</span>
                              <ul className="ec-opt-swatch ec-change-img">
                                <li className="active"><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/14_1.jpg" data-src-hover="assets/images/product-image/14_1.jpg" data-tooltip="Gray"><span style={{ backgroundColor: '#bb8641' }} /></a></li>
                                <li><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/14_2.jpg" data-src-hover="assets/images/product-image/14_2.jpg" data-tooltip="Orange"><span style={{ backgroundColor: '#5dd677' }} /></a></li>
                                <li><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/14_3.jpg" data-src-hover="assets/images/product-image/14_3.jpg" data-tooltip="Green"><span style={{ backgroundColor: '#32ffdd' }} /></a></li>
                                <li><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/14_4.jpg" data-src-hover="assets/images/product-image/14_4.jpg" data-tooltip="Sky Blue"><span style={{ backgroundColor: '#56ccfa' }} /></a></li>
                              </ul>
                            </div>
                            <div className="ec-pro-size">
                              <span className="ec-pro-opt-label">Size</span>
                              <ul className="ec-opt-size">
                                <li className="active"><a href="#" className="ec-opt-sz" data-old="$70.00" data-new="$60.00" data-tooltip="Small">6</a></li>
                                <li><a href="#" className="ec-opt-sz" data-old="$80.00" data-new="$70.00" data-tooltip="Medium">7</a></li>
                                <li><a href="#" className="ec-opt-sz" data-old="$90.00" data-new="$80.00" data-tooltip="Large">8</a></li>
                                <li><a href="#" className="ec-opt-sz" data-old="$100.00" data-new="$90.00" data-tooltip="Extra Large">9</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 shop-all-btn"><a href="shop-left-sidebar-col-3.html">Shop All Collection</a></div>
                  </div>
                </div>
                {/* ec 3rd Product tab end */}
                {/* ec 4th Product tab start */}
                <div className="tab-pane fade" id="tab-pro-for-child">
                  <div className="row">
                    {/* Product Content */}
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6  ec-product-content">
                      <div className="ec-product-inner">
                        <div className="ec-pro-image-outer">
                          <div className="ec-pro-image">
                            <a href="product-left-sidebar.html" className="image">
                              <img className="main-image" src="assets/images/product-image/1_1.jpg" alt="Product" />
                              <img className="hover-image" src="assets/images/product-image/1_2.jpg" alt="Product" />
                            </a>
                            <span className="percentage">20%</span>
                            <span className="flags">
                              <span className="sale">Sale</span>
                            </span>
                            <a href="#" className="quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#ec_quickview_modal"><img src="assets/images/icons/quickview.svg" className="svg_img pro_svg" alt /></a>
                            <div className="ec-pro-actions">
                              <a href="compare.html" className="ec-btn-group compare" title="Compare"><img src="assets/images/icons/compare.svg" className="svg_img pro_svg" alt /></a>
                              <button title="Add To Cart" className="add-to-cart"><img src="assets/images/icons/cart.svg" className="svg_img pro_svg" alt /> Add To Cart</button>
                              <a className="ec-btn-group wishlist" title="Wishlist"><img src="assets/images/icons/wishlist.svg" className="svg_img pro_svg" alt /></a>
                            </div>
                          </div>
                        </div>
                        <div className="ec-pro-content">
                          <h5 className="ec-pro-title"><a href="product-left-sidebar.html">Cute Baby Toy's</a></h5>
                          <div className="ec-pro-rating">
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star" />
                          </div>
                          <span className="ec-price">
                            <span className="old-price">$40.00</span>
                            <span className="new-price">$30.00</span>
                          </span>
                          <div className="ec-pro-option">
                            <div className="ec-pro-color">
                              <span className="ec-pro-opt-label">Color</span>
                              <ul className="ec-opt-swatch ec-change-img">
                                <li className="active"><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/1_1.jpg" data-src-hover="assets/images/product-image/1_1.jpg" data-tooltip="Gray"><span style={{ backgroundColor: '#90cdf7' }} /></a></li>
                                <li><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/1_2.jpg" data-src-hover="assets/images/product-image/1_2.jpg" data-tooltip="Orange"><span style={{ backgroundColor: '#ff3b66' }} /></a></li>
                                <li><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/1_3.jpg" data-src-hover="assets/images/product-image/1_3.jpg" data-tooltip="Green"><span style={{ backgroundColor: '#ffc476' }} /></a></li>
                                <li><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/1_4.jpg" data-src-hover="assets/images/product-image/1_4.jpg" data-tooltip="Sky Blue"><span style={{ backgroundColor: '#1af0ba' }} /></a></li>
                              </ul>
                            </div>
                            <div className="ec-pro-size">
                              <span className="ec-pro-opt-label">Size</span>
                              <ul className="ec-opt-size">
                                <li className="active"><a href="#" className="ec-opt-sz" data-old="$40.00" data-new="$30.00" data-tooltip="Small">S</a></li>
                                <li><a href="#" className="ec-opt-sz" data-old="$50.00" data-new="$40.00" data-tooltip="Medium">M</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6  ec-product-content">
                      <div className="ec-product-inner">
                        <div className="ec-pro-image-outer">
                          <div className="ec-pro-image">
                            <a href="product-left-sidebar.html" className="image">
                              <img className="main-image" src="assets/images/product-image/15_1.jpg" alt="Product" />
                              <img className="hover-image" src="assets/images/product-image/15_2.jpg" alt="Product" />
                            </a>
                            <span className="percentage">20%</span>
                            <span className="flags">
                              <span className="sale">Sale</span>
                            </span>
                            <a href="#" className="quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#ec_quickview_modal"><img src="assets/images/icons/quickview.svg" className="svg_img pro_svg" alt /></a>
                            <div className="ec-pro-actions">
                              <a href="compare.html" className="ec-btn-group compare" title="Compare"><img src="assets/images/icons/compare.svg" className="svg_img pro_svg" alt /></a>
                              <button title="Add To Cart" className="add-to-cart"><img src="assets/images/icons/cart.svg" className="svg_img pro_svg" alt /> Add To Cart</button>
                              <a className="ec-btn-group wishlist" title="Wishlist"><img src="assets/images/icons/wishlist.svg" className="svg_img pro_svg" alt /></a>
                            </div>
                          </div>
                        </div>
                        <div className="ec-pro-content">
                          <h5 className="ec-pro-title"><a href="product-left-sidebar.html">Clasic Baby Shoes
                          </a></h5>
                          <div className="ec-pro-rating">
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star" />
                          </div>
                          <span className="ec-price">
                            <span className="old-price">$80.00</span>
                            <span className="new-price">$70.00</span>
                          </span>
                          <div className="ec-pro-option">
                            <div className="ec-pro-color">
                              <span className="ec-pro-opt-label">Color</span>
                              <ul className="ec-opt-swatch ec-change-img">
                                <li className="active"><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/15_1.jpg" data-src-hover="assets/images/product-image/15_1.jpg" data-tooltip="Gray"><span style={{ backgroundColor: '#ffacfb' }} /></a></li>
                                <li><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/15_2.jpg" data-src-hover="assets/images/product-image/15_2.jpg" data-tooltip="Orange"><span style={{ backgroundColor: '#90dfff' }} /></a></li>
                                <li><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/15_3.jpg" data-src-hover="assets/images/product-image/15_3.jpg" data-tooltip="Green"><span style={{ backgroundColor: '#c6ff4a' }} /></a></li>
                                <li><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/15_4.jpg" data-src-hover="assets/images/product-image/15_4.jpg" data-tooltip="Sky Blue"><span style={{ backgroundColor: '#ffb158' }} /></a></li>
                              </ul>
                            </div>
                            <div className="ec-pro-size">
                              <span className="ec-pro-opt-label">Size</span>
                              <ul className="ec-opt-size">
                                <li className="active"><a href="#" className="ec-opt-sz" data-old="$80.00" data-new="$70.00" data-tooltip="Small">4</a></li>
                                <li><a href="#" className="ec-opt-sz" data-old="$70.00" data-new="$60.00" data-tooltip="Medium">5</a></li>
                                <li><a href="#" className="ec-opt-sz" data-old="$60.00" data-new="$50.00" data-tooltip="Large">6</a></li>
                                <li><a href="#" className="ec-opt-sz" data-old="$50.00" data-new="$40.00" data-tooltip="Extra Large">7</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6  ec-product-content">
                      <div className="ec-product-inner">
                        <div className="ec-pro-image-outer">
                          <div className="ec-pro-image">
                            <a href="product-left-sidebar.html" className="image">
                              <img className="main-image" src="assets/images/product-image/16_1.jpg" alt="Product" />
                              <img className="hover-image" src="assets/images/product-image/16_2.jpg" alt="Product" />
                            </a>
                            <span className="percentage">20%</span>
                            <span className="flags">
                              <span className="new">New</span>
                            </span>
                            <a href="#" className="quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#ec_quickview_modal"><img src="assets/images/icons/quickview.svg" className="svg_img pro_svg" alt /></a>
                            <div className="ec-pro-actions">
                              <a href="compare.html" className="ec-btn-group compare" title="Compare"><img src="assets/images/icons/compare.svg" className="svg_img pro_svg" alt /></a>
                              <button title="Add To Cart" className="add-to-cart"><img src="assets/images/icons/cart.svg" className="svg_img pro_svg" alt /> Add To Cart</button>
                              <a className="ec-btn-group wishlist" title="Wishlist"><img src="assets/images/icons/wishlist.svg" className="svg_img pro_svg" alt /></a>
                            </div>
                          </div>
                        </div>
                        <div className="ec-pro-content">
                          <h5 className="ec-pro-title"><a href="product-left-sidebar.html">Baby Doctor Toy Kit</a></h5>
                          <div className="ec-pro-rating">
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star" />
                          </div>
                          <span className="ec-price">
                            <span className="old-price">$50.00</span>
                            <span className="new-price">$40.00</span>
                          </span>
                          <div className="ec-pro-option">
                            <div className="ec-pro-color">
                              <span className="ec-pro-opt-label">Color</span>
                              <ul className="ec-opt-swatch ec-change-img">
                                <li className="active"><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/16_1.jpg" data-src-hover="assets/images/product-image/16_1.jpg" data-tooltip="Gray"><span style={{ backgroundColor: '#6ee9ff' }} /></a></li>
                                <li><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/16_2.jpg" data-src-hover="assets/images/product-image/16_2.jpg" data-tooltip="Orange"><span style={{ backgroundColor: '#eb99ff' }} /></a></li>
                                <li><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/16_3.jpg" data-src-hover="assets/images/product-image/16_3.jpg" data-tooltip="Green"><span style={{ backgroundColor: '#ff6464' }} /></a></li>
                                <li><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/16_4.jpg" data-src-hover="assets/images/product-image/16_4.jpg" data-tooltip="Sky Blue"><span style={{ backgroundColor: '#e476ff' }} /></a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6  ec-product-content">
                      <div className="ec-product-inner">
                        <div className="ec-pro-image-outer">
                          <div className="ec-pro-image">
                            <a href="product-left-sidebar.html" className="image">
                              <img className="main-image" src="assets/images/product-image/17_1.jpg" alt="Product" />
                              <img className="hover-image" src="assets/images/product-image/17_2.jpg" alt="Product" />
                            </a>
                            <span className="percentage">20%</span>
                            <span className="flags">
                              <span className="sale">Sale</span>
                            </span>
                            <a href="#" className="quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#ec_quickview_modal"><img src="assets/images/icons/quickview.svg" className="svg_img pro_svg" alt /></a>
                            <div className="ec-pro-actions">
                              <a href="compare.html" className="ec-btn-group compare" title="Compare"><img src="assets/images/icons/compare.svg" className="svg_img pro_svg" alt /></a>
                              <button title="Add To Cart" className="add-to-cart"><img src="assets/images/icons/cart.svg" className="svg_img pro_svg" alt /> Add To Cart</button>
                              <a className="ec-btn-group wishlist" title="Wishlist"><img src="assets/images/icons/wishlist.svg" className="svg_img pro_svg" alt /></a>
                            </div>
                          </div>
                        </div>
                        <div className="ec-pro-content">
                          <h5 className="ec-pro-title"><a href="product-left-sidebar.html">Baby Leather Purse</a></h5>
                          <div className="ec-pro-rating">
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star" />
                          </div>
                          <span className="ec-price">
                            <span className="old-price">$60.00</span>
                            <span className="new-price">$50.00</span>
                          </span>
                          <div className="ec-pro-option">
                            <div className="ec-pro-color">
                              <span className="ec-pro-opt-label">Color</span>
                              <ul className="ec-opt-swatch ec-change-img">
                                <li className="active"><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/17_1.jpg" data-src-hover="assets/images/product-image/17_1.jpg" data-tooltip="Gray"><span style={{ backgroundColor: '#8ad2fc' }} /></a></li>
                                <li><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/17_2.jpg" data-src-hover="assets/images/product-image/17_2.jpg" data-tooltip="Orange"><span style={{ backgroundColor: '#ff8ef6' }} /></a></li>
                                <li><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/17_3.jpg" data-src-hover="assets/images/product-image/17_3.jpg" data-tooltip="Green"><span style={{ backgroundColor: '#ffbe31' }} /></a></li>
                                <li><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/17_4.jpg" data-src-hover="assets/images/product-image/17_4.jpg" data-tooltip="Sky Blue"><span style={{ backgroundColor: '#a3ffba' }} /></a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6  ec-product-content">
                      <div className="ec-product-inner">
                        <div className="ec-pro-image-outer">
                          <div className="ec-pro-image">
                            <a href="product-left-sidebar.html" className="image">
                              <img className="main-image" src="assets/images/product-image/9_1.jpg" alt="Product" />
                              <img className="hover-image" src="assets/images/product-image/9_2.jpg" alt="Product" />
                            </a>
                            <span className="percentage">20%</span>
                            <span className="flags">
                              <span className="sale">Sale</span>
                            </span>
                            <a href="#" className="quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#ec_quickview_modal"><img src="assets/images/icons/quickview.svg" className="svg_img pro_svg" alt /></a>
                            <div className="ec-pro-actions">
                              <a href="compare.html" className="ec-btn-group compare" title="Compare"><img src="assets/images/icons/compare.svg" className="svg_img pro_svg" alt /></a>
                              <button title="Add To Cart" className="add-to-cart"><img src="assets/images/icons/cart.svg" className="svg_img pro_svg" alt /> Add To Cart</button>
                              <a className="ec-btn-group wishlist" title="Wishlist"><img src="assets/images/icons/wishlist.svg" className="svg_img pro_svg" alt /></a>
                            </div>
                          </div>
                        </div>
                        <div className="ec-pro-content">
                          <h5 className="ec-pro-title"><a href="product-left-sidebar.html">Canvas Shoes for Boy</a></h5>
                          <div className="ec-pro-rating">
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star" />
                          </div>
                          <span className="ec-price">
                            <span className="old-price">$30.00</span>
                            <span className="new-price">$25.00</span>
                          </span>
                          <div className="ec-pro-option">
                            <div className="ec-pro-color">
                              <span className="ec-pro-opt-label">Color</span>
                              <ul className="ec-opt-swatch ec-change-img">
                                <li className="active"><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/9_1.jpg" data-src-hover="assets/images/product-image/9_1.jpg" data-tooltip="Gray"><span style={{ backgroundColor: '#21b7fc' }} /></a></li>
                                <li><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/9_2.jpg" data-src-hover="assets/images/product-image/9_2.jpg" data-tooltip="Orange"><span style={{ backgroundColor: '#1df0ff' }} /></a></li>
                                <li><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/9_3.jpg" data-src-hover="assets/images/product-image/9_3.jpg" data-tooltip="Green"><span style={{ backgroundColor: '#94f7a1' }} /></a></li>
                              </ul>
                            </div>
                            <div className="ec-pro-size">
                              <span className="ec-pro-opt-label">Size</span>
                              <ul className="ec-opt-size">
                                <li className="active"><a href="#" className="ec-opt-sz" data-old="$30.00" data-new="$25.00" data-tooltip="Small">S</a></li>
                                <li><a href="#" className="ec-opt-sz" data-old="$35.00" data-new="$27.00" data-tooltip="Medium">M</a></li>
                                <li><a href="#" className="ec-opt-sz" data-old="$40.00" data-new="$30.00" data-tooltip="Large">X</a></li>
                                <li><a href="#" className="ec-opt-sz" data-old="$45.00" data-new="$35.00" data-tooltip="Extra Large">XL</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6  ec-product-content">
                      <div className="ec-product-inner">
                        <div className="ec-pro-image-outer">
                          <div className="ec-pro-image">
                            <a href="product-left-sidebar.html" className="image">
                              <img className="main-image" src="assets/images/product-image/6_1.jpg" alt="Product" />
                              <img className="hover-image" src="assets/images/product-image/6_2.jpg" alt="Product" />
                            </a>
                            <span className="percentage">20%</span>
                            <a href="#" className="quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#ec_quickview_modal"><img src="assets/images/icons/quickview.svg" className="svg_img pro_svg" alt /></a>
                            <div className="ec-pro-actions">
                              <a href="compare.html" className="ec-btn-group compare" title="Compare"><img src="assets/images/icons/compare.svg" className="svg_img pro_svg" alt /></a>
                              <button title="Add To Cart" className="add-to-cart"><img src="assets/images/icons/cart.svg" className="svg_img pro_svg" alt /> Add To Cart</button>
                              <a className="ec-btn-group wishlist" title="Wishlist"><img src="assets/images/icons/wishlist.svg" className="svg_img pro_svg" alt /></a>
                            </div>
                          </div>
                        </div>
                        <div className="ec-pro-content">
                          <h5 className="ec-pro-title"><a href="product-left-sidebar.html">Round Neck T-Shirt</a></h5>
                          <div className="ec-pro-rating">
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star" />
                          </div>
                          <span className="ec-price">
                            <span className="old-price">$30.00</span>
                            <span className="new-price">$25.00</span>
                          </span>
                          <div className="ec-pro-option">
                            <div className="ec-pro-color">
                              <span className="ec-pro-opt-label">Color</span>
                              <ul className="ec-opt-swatch ec-change-img">
                                <li className="active"><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/6_1.jpg" data-src-hover="assets/images/product-image/6_1.jpg" data-tooltip="Gray"><span style={{ backgroundColor: '#e8c2ff' }} /></a></li>
                                <li><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/6_2.jpg" data-src-hover="assets/images/product-image/6_2.jpg" data-tooltip="Orange"><span style={{ backgroundColor: '#9cfdd5' }} /></a></li>
                              </ul>
                            </div>
                            <div className="ec-pro-size">
                              <span className="ec-pro-opt-label">Size</span>
                              <ul className="ec-opt-size">
                                <li className="active"><a href="#" className="ec-opt-sz" data-old="$25.00" data-new="$20.00" data-tooltip="Small">S</a></li>
                                <li><a href="#" className="ec-opt-sz" data-old="$27.00" data-new="$22.00" data-tooltip="Medium">M</a></li>
                                <li><a href="#" className="ec-opt-sz" data-old="$30.00" data-new="$25.00" data-tooltip="Large">X</a></li>
                                <li><a href="#" className="ec-opt-sz" data-old="$35.00" data-new="$30.00" data-tooltip="Extra Large">XL</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6  ec-product-content">
                      <div className="ec-product-inner">
                        <div className="ec-pro-image-outer">
                          <div className="ec-pro-image">
                            <a href="product-left-sidebar.html" className="image">
                              <img className="main-image" src="assets/images/product-image/8_1.jpg" alt="Product" />
                              <img className="hover-image" src="assets/images/product-image/8_2.jpg" alt="Product" />
                            </a>
                            <span className="percentage">20%</span>
                            <span className="flags">
                              <span className="new">New</span>
                            </span>
                            <a href="#" className="quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#ec_quickview_modal"><img src="assets/images/icons/quickview.svg" className="svg_img pro_svg" alt /></a>
                            <div className="ec-pro-actions">
                              <a href="compare.html" className="ec-btn-group compare" title="Compare"><img src="assets/images/icons/compare.svg" className="svg_img pro_svg" alt /></a>
                              <button title="Add To Cart" className="add-to-cart"><img src="assets/images/icons/cart.svg" className="svg_img pro_svg" alt /> Add To Cart</button>
                              <a className="ec-btn-group wishlist" title="Wishlist"><img src="assets/images/icons/wishlist.svg" className="svg_img pro_svg" alt /></a>
                            </div>
                          </div>
                        </div>
                        <div className="ec-pro-content">
                          <h5 className="ec-pro-title"><a href="product-left-sidebar.html">Digital Smart Watches</a></h5>
                          <div className="ec-pro-rating">
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star" />
                          </div>
                          <span className="ec-price">
                            <span className="old-price">$100.00</span>
                            <span className="new-price">$80.00</span>
                          </span>
                          <div className="ec-pro-option">
                            <div className="ec-pro-color">
                              <span className="ec-pro-opt-label">Color</span>
                              <ul className="ec-opt-swatch ec-change-img">
                                <li className="active"><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/8_2.jpg" data-src-hover="assets/images/product-image/8_2.jpg" data-tooltip="Gray"><span style={{ backgroundColor: '#e9dddd' }} /></a></li>
                                <li><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/8_3.jpg" data-src-hover="assets/images/product-image/8_3.jpg" data-tooltip="Orange"><span style={{ backgroundColor: '#ffd5cb' }} /></a></li>
                                <li><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/8_4.jpg" data-src-hover="assets/images/product-image/8_4.jpg" data-tooltip="Green"><span style={{ backgroundColor: '#92e4fd' }} /></a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6  ec-product-content">
                      <div className="ec-product-inner">
                        <div className="ec-pro-image-outer">
                          <div className="ec-pro-image">
                            <a href="product-left-sidebar.html" className="image">
                              <img className="main-image" src="assets/images/product-image/3_1.jpg" alt="Product" />
                              <img className="hover-image" src="assets/images/product-image/3_2.jpg" alt="Product" />
                            </a>
                            <span className="percentage">20%</span>
                            <span className="flags">
                              <span className="new">New</span>
                            </span>
                            <a href="#" className="quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#ec_quickview_modal"><img src="assets/images/icons/quickview.svg" className="svg_img pro_svg" alt /></a>
                            <div className="ec-pro-actions">
                              <a href="compare.html" className="ec-btn-group compare" title="Compare"><img src="assets/images/icons/compare.svg" className="svg_img pro_svg" alt /></a>
                              <button title="Add To Cart" className="add-to-cart"><img src="assets/images/icons/cart.svg" className="svg_img pro_svg" alt /> Add To Cart</button>
                              <a className="ec-btn-group wishlist" title="Wishlist"><img src="assets/images/icons/wishlist.svg" className="svg_img pro_svg" alt /></a>
                            </div>
                          </div>
                        </div>
                        <div className="ec-pro-content">
                          <h5 className="ec-pro-title"><a href="product-left-sidebar.html">Designer Leather Purses</a></h5>
                          <div className="ec-pro-rating">
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star fill" />
                            <i className="ecicon eci-star" />
                          </div>
                          <span className="ec-price">
                            <span className="old-price">$40.00</span>
                            <span className="new-price">$30.00</span>
                          </span>
                          <div className="ec-pro-option">
                            <div className="ec-pro-color">
                              <span className="ec-pro-opt-label">Color</span>
                              <ul className="ec-opt-swatch ec-change-img">
                                <li className="active"><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/3_1.jpg" data-src-hover="assets/images/product-image/3_1.jpg" data-tooltip="Gray"><span style={{ backgroundColor: '#75e3ff' }} /></a></li>
                                <li><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/3_2.jpg" data-src-hover="assets/images/product-image/3_2.jpg" data-tooltip="Orange"><span style={{ backgroundColor: '#11f7d8' }} /></a></li>
                                <li><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/3_3.jpg" data-src-hover="assets/images/product-image/3_3.jpg" data-tooltip="Green"><span style={{ backgroundColor: '#acff7c' }} /></a></li>
                                <li><a href="#" className="ec-opt-clr-img" data-src="assets/images/product-image/3_5.jpg" data-src-hover="assets/images/product-image/3_5.jpg" data-tooltip="Sky Blue"><span style={{ backgroundColor: '#e996fa' }} /></a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 shop-all-btn"><a href="shop-left-sidebar-col-3.html">Shop All Collection</a></div>
                  </div>
                </div>
                {/* ec 4th Product tab end */}
              </div>
            </div>
          </div>
        </div>
      </section>   
        </>
    )
}

export default ProductTabArea
