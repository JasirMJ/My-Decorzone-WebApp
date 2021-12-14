import React, { useState } from 'react'

function Header({open,setopen}) {


  return (

    <>
    <header className="ec-header">
      {/*Ec Header Top Start */}
      {/* Ec Header Top  End */}
      {/* Ec Header Bottom  Start */}
      <div className="ec-header-bottom d-none d-lg-block">
        <div className="container position-relative">
          <div className="row">
            <div className="ec-flex">
              {/* Ec Header Logo Start */}
              <div className="align-self-center">
                <div className="header-logo">
                  <a href="/"><img src="assets/images/logo/logo.png" alt="Site Logo" /><img className="dark-logo" src="assets/images/logo/dark-logo.png" alt="Site Logo" style={{ display: 'none' }} /></a>
                </div>
              </div>
              {/* Ec Header Logo End */}
              {/* Ec Header Search Start */}
              <div className="align-self-center">
                <div className="header-search">
                  {/* <form className="ec-btn-group-form" action="#">
                      <input className="form-control" placeholder="Enter Your Product Name..." type="text" />
                      <button className="submit" type="submit"><img src="assets/images/icons/search.svg" className="svg_img header_svg" alt /></button>
                    </form> */}
                </div>
              </div>
              {/* Ec Header Search End */}
              {/* Ec Header Button Start */}
              <div className="align-self-center">
                <div className="ec-header-bottons">
                  {/* Header User Start */}
                  <div className="ec-header-user dropdown">
                    <button className="dropdown-toggle" data-bs-toggle="dropdown"><img src="assets/images/icons/user.svg" className="svg_img header_svg" alt /></button>
                    <ul className="dropdown-menu dropdown-menu-right">
                      <li><a className="dropdown-item" href="/register">Register</a></li>
                      <li><a className="dropdown-item" href="/myaccount">My Account</a></li>
                      <li><a className="dropdown-item" href="/login">Login</a></li>
                      <li><a className="dropdown-item" href="/">Logout</a></li>
                    </ul>
                  </div>
                  {/* Header User End */}
                  {/* Header wishlist Start */}

                  {/* Header wishlist End */}
                  {/* Header Cart Start */}
                  <a href="/cart" className="ec-header-btn ec-side-toggle">
                    <div className="header-icon"><img src="assets/images/icons/cart.svg" className="svg_img header_svg" alt /></div>
                    <span className="ec-header-count cart-count-lable">3</span>
                  </a>
                  {/* Header Cart End */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Ec Header Button End */}
      {/* Header responsive Bottom  Start */}
      <div className="ec-header-bottom d-lg-none">
        <div className="container position-relative">
          <div className="row ">
            {/* Ec Header Logo Start */}
            <div className="col">
              <div className="header-logo">
                <a href="/"><img src="assets/images/logo/logo.png" alt="Site Logo" /><img className="dark-logo" src="assets/images/logo/dark-logo.png" alt="Site Logo" style={{ display: 'none' }} /></a>
              </div>
            </div>
            {/* Ec Header Logo End */}
            {/* Ec Header Search Start */}
            <div className="col">
              <div className="header-search">
                {/* <form className="ec-btn-group-form" action="#">
                    <input className="form-control" placeholder="Enter Your Product Name..." type="text" />
                    <button className="submit" type="submit"><img src="assets/images/icons/search.svg" className="svg_img header_svg" alt="icon" /></button>
                  </form> */}
              </div>
            </div>
            {/* Ec Header Search End */}
          </div>
        </div>
      </div>
      {/* Header responsive Bottom  End */}
      {/* EC Main Menu Start */}
      <div id="ec-main-menu-desk" className="d-none d-lg-block sticky-nav">
        <div className="container position-relative">
          <div className="row">
            <div className="col-md-12 align-self-center">
              <div className="ec-main-menu">
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/categories">Categories</a></li>
                  <li><a href="/products">Products</a></li>
                  <li><a href="/offers">Offers</a></li>
                  <li><a href="/myorders">My Orders</a></li>
                  <li><a href="/about">About Us</a></li>
                  <li><a href="contactus">Contact Us</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Ec Main Menu End */}

      {/* ekka Mobile Menu Start */}
      <div id="ec-mobile-menu" className={`ec-side-cart ec-mobile-menu ${open?'ec-open':""}`}>
        <div className="ec-menu-title">
          <span className="menu_title">My Menu</span>
          <button className="ec-close" onClick={()=>setopen()}>×</button>
        </div>
        <div className="ec-menu-inner">
          <div className="ec-menu-content">
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><span className="menu-toggle" /><a href="javascript:void(0)">Categories</a>
                <ul className="sub-menu">
                  <li><span className="menu-toggle" />
                    <a href="javascript:void(0)">Classic Variation</a>
                    <ul className="sub-menu">
                      <li><a href="shop-left-sidebar-col-3.html">Left sidebar 3 column</a></li>
                      <li><a href="shop-left-sidebar-col-4.html">Left sidebar 4 column</a></li>
                      <li><a href="shop-right-sidebar-col-3.html">Right sidebar 3 column</a></li>
                      <li><a href="shop-right-sidebar-col-4.html">Right sidebar 4 column</a></li>
                      <li><a href="shop-full-width.html">Full width 4 column</a></li>
                    </ul>
                  </li>
                  <li><span className="menu-toggle" />
                    <a href="javascript:void(0)">Classic Variation</a>
                    <ul className="sub-menu">
                      <li><a href="shop-banner-left-sidebar-col-3.html">Banner left sidebar 3
                        column</a></li>
                      <li><a href="shop-banner-left-sidebar-col-4.html">Banner left sidebar 4
                        column</a></li>
                      <li><a href="shop-banner-right-sidebar-col-3.html">Banner right sidebar 3
                        column</a></li>
                      <li><a href="shop-banner-right-sidebar-col-4.html">Banner right sidebar 4
                        column</a></li>
                      <li><a href="shop-banner-full-width.html">Banner Full width 4 column</a></li>
                    </ul>
                  </li>
                  <li><span className="menu-toggle" />
                    <a href="javascript:void(0)">Columns Variation</a>
                    <ul className="sub-menu">
                      <li><a href="shop-full-width-col-3.html">3 Columns full width</a></li>
                      <li><a href="shop-full-width-col-4.html">4 Columns full width</a></li>
                      <li><a href="shop-full-width-col-5.html">5 Columns full width</a></li>
                      <li><a href="shop-full-width-col-6.html">6 Columns full width</a></li>
                      <li><a href="shop-banner-full-width-col-3.html">Banner 3 Columns</a></li>
                    </ul>
                  </li>
                  <li><span className="menu-toggle" />
                    <a href="javascript:void(0)">List Variation</a>
                    <ul className="sub-menu">
                      <li><a href="shop-list-left-sidebar.html">Shop left sidebar</a></li>
                      <li><a href="shop-list-right-sidebar.html">Shop right sidebar</a></li>
                      <li><a href="shop-list-banner-left-sidebar.html">Banner left sidebar</a></li>
                      <li><a href="shop-list-banner-right-sidebar.html">Banner right sidebar</a></li>
                      <li><a href="shop-list-full-col-2.html">Full width 2 columns</a></li>
                    </ul>
                  </li>
                  <li><a className="p-0" href="shop-left-sidebar-col-3.html"><img className="img-responsive" src="assets/images/menu-banner/1.jpg" alt /></a>
                  </li>
                </ul>
              </li>
              <li><span className="menu-toggle" /><a href="javascript:void(0)">Products</a>
                <ul className="sub-menu">
                  <li><span className="menu-toggle" /><a href="javascript:void(0)">Product page</a>
                    <ul className="sub-menu">
                      <li><a href="product-left-sidebar.html">Product left sidebar</a></li>
                      <li><a href="product-right-sidebar.html">Product right sidebar</a></li>
                    </ul>
                  </li>
                  <li><span className="menu-toggle" /><a href="javascript:void(0)">Product 360</a>
                    <ul className="sub-menu">
                      <li><a href="product-360-left-sidebar.html">360 left sidebar</a></li>
                      <li><a href="product-360-right-sidebar.html">360 right sidebar</a></li>
                    </ul>
                  </li>
                  <li><span className="menu-toggle" /><a href="javascript:void(0)">Product vodeo</a>
                    <ul className="sub-menu">
                      <li><a href="product-video-left-sidebar.html">vodeo left sidebar</a></li>
                      <li><a href="product-video-right-sidebar.html">vodeo right sidebar</a></li>
                    </ul>
                  </li>
                  <li><span className="menu-toggle" /><a href="javascript:void(0)">Product gallery</a>
                    <ul className="sub-menu">
                      <li><a href="product-gallery-left-sidebar.html">Gallery left sidebar</a></li>
                      <li><a href="product-gallery-right-sidebar.html">Gallery right sidebar</a></li>
                    </ul>
                  </li>
                  <li><a href="product-full-width.html">Product full width</a></li>
                  <li><a href="product-360-full-width.html">360 full width</a></li>
                  <li><a href="product-video-full-width.html">Video full width</a></li>
                  <li><a href="product-gallery-full-width.html">Gallery full width</a></li>
                </ul>
              </li>
              <li><span className="menu-toggle" /><a href="javascript:void(0)">Others</a>
                <ul className="sub-menu">
                  <li><span className="menu-toggle" /><a href="javascript:void(0)">Mail Confirmation</a>
                    <ul className="sub-menu">
                      <li><a href="email-template-confirm-1.html">Mail Confirmation 1</a></li>
                      <li><a href="email-template-confirm-2.html">Mail Confirmation 2</a></li>
                      <li><a href="email-template-confirm-3.html">Mail Confirmation 3</a></li>
                      <li><a href="email-template-confirm-4.html">Mail Confirmation 4</a></li>
                      <li><a href="email-template-confirm-5.html">Mail Confirmation 5</a></li>
                    </ul>
                  </li>
                  <li><span className="menu-toggle" /><a href="javascript:void(0)">Mail Reset password</a>
                    <ul className="sub-menu">
                      <li><a href="email-template-forgot-password-1.html">Reset password 1</a></li>
                      <li><a href="email-template-forgot-password-2.html">Reset password 2</a></li>
                      <li><a href="email-template-forgot-password-3.html">Reset password 3</a></li>
                      <li><a href="email-template-forgot-password-4.html">Reset password 4</a></li>
                      <li><a href="email-template-forgot-password-5.html">Reset password 5</a></li>
                    </ul>
                  </li>
                  <li><span className="menu-toggle" /><a href="javascript:void(0)">Mail Promotional</a>
                    <ul className="sub-menu">
                      <li><a href="email-template-offers-1.html">Offer Mail 1</a></li>
                      <li><a href="email-template-offers-2.html">Offer Mail 2</a></li>
                      <li><a href="email-template-offers-3.html">Offer Mail 3</a></li>
                      <li><a href="email-template-offers-4.html">Offer Mail 4</a></li>
                      <li><a href="email-template-offers-5.html">Offer Mail 5</a></li>
                      <li><a href="email-template-offers-6.html">Offer Mail 6</a></li>
                      <li><a href="email-template-offers-7.html">Offer Mail 7</a></li>
                      <li><a href="email-template-offers-8.html">Offer Mail 8</a></li>
                    </ul>
                  </li>
                  <li><span className="menu-toggle" /><a href="javascript:void(0)">Vendor Account Pages</a>
                    <ul className="sub-menu">
                      <li><a href="vendor-dashboard.html">Vendor Dashboard</a></li>
                      <li><a href="vendor-profile.html">Vendor Profile</a></li>
                      <li><a href="vendor-uploads.html">Vendor Uploads</a></li>
                      <li><a href="vendor-settings.html">Vendor Settings</a></li>
                    </ul>
                  </li>
                  <li><span className="menu-toggle" /><a href="javascript:void(0)">User Account Pages</a>
                    <ul className="sub-menu">
                      <li><a href="user-profile.html">User Profile</a></li>
                      <li><a href="user-history.html">User History</a></li>
                      <li><a href="wishlist.html">Wishlist</a></li>
                      <li><a href="track-order.html">Track Order</a></li>
                      <li><a href="user-invoice.html">User Invoice</a></li>
                    </ul>
                  </li>
                  <li><span className="menu-toggle" /><a href="javascript:void(0)">Construction Pages</a>
                    <ul className="sub-menu">
                      <li><a href="404-error-page.html">404 Error Page</a></li>
                      <li><a href="under-maintenance.html">Maintenance Page</a></li>
                      <li><a href="coming-soon.html">Comming Soon Page</a></li>
                    </ul>
                  </li>
                  <li><span className="menu-toggle" /><a href="javascript:void(0)">Vendor Catalog Pages</a>
                    <ul className="sub-menu">
                      <li><a href="catalog-single-vendor.html">Catalog Single Vendor</a></li>
                      <li><a href="catalog-multi-vendor.html">Catalog Multi Vendor</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><span className="menu-toggle" /><a href="javascript:void(0)">Pages</a>
                <ul className="sub-menu">
                  <li><a href="about-us.html">About Us</a></li>
                  <li><a href="contact-us.html">Contact Us</a></li>
                  <li><a href="cart.html">Cart</a></li>
                  <li><a href="checkout.html">Checkout</a></li>
                  <li><a href="compare.html">Compare</a></li>
                  <li><a href="faq.html">FAQ</a></li>
                  <li><a href="login.html">Login</a></li>
                  <li><a href="register.html">Register</a></li>
                  <li><a href="track-order.html">Track Order</a></li>
                  <li><a href="terms-condition.html">Terms Condition</a></li>
                  <li><a href="privacy-policy.html">Privacy Policy</a></li>
                </ul>
              </li>
              <li className="dropdown"><span className="menu-toggle" /><a href="javascript:void(0)">Blog</a>
                <ul className="sub-menu">
                  <li><a href="blog-left-sidebar.html">Blog left sidebar</a></li>
                  <li><a href="blog-right-sidebar.html">Blog right sidebar</a></li>
                  <li><a href="blog-detail-left-sidebar.html">Blog detail left sidebar</a></li>
                  <li><a href="blog-detail-right-sidebar.html">Blog detail right sidebar</a></li>
                  <li><a href="blog-full-width.html">Blog full width</a></li>
                  <li><a href="blog-detail-full-width.html">Blog detail full width</a></li>
                </ul>
              </li>
              <li className="dropdown"><span className="menu-toggle" /><a href="javascript:void(0)">Elements</a>
                <ul className="sub-menu">
                  <li><a href="elemets-products.html">Products</a></li>
                  <li><a href="elemets-typography.html">Typography</a></li>
                  <li><a href="elemets-title.html">Titles</a></li>
                  <li><a href="elemets-categories.html">Categories</a></li>
                  <li><a href="elemets-buttons.html">Buttons</a></li>
                  <li><a href="elemets-tabs.html">Tabs</a></li>
                  <li><a href="elemets-accordions.html">Accordions</a></li>
                  <li><a href="elemets-blog.html">Blogs</a></li>
                </ul>
              </li>
              <li><a href="offer.html">Hot Offers</a></li>
            </ul>
          </div>
          <div className="header-res-lan-curr">
            <div className="header-top-lan-curr">
              <div className="header-top-lan dropdown">
                <button className="dropdown-toggle text-upper" data-bs-toggle="dropdown">Language <i className="ecicon eci-caret-down" aria-hidden="true" /></button>
                <ul className="dropdown-menu">
                  <li className="active"><a className="dropdown-item" href="#">English</a></li>
                  <li><a className="dropdown-item" href="#">Italiano</a></li>
                </ul>
              </div>
              <div className="header-top-curr dropdown">
                <button className="dropdown-toggle text-upper" data-bs-toggle="dropdown">Currency <i className="ecicon eci-caret-down" aria-hidden="true" /></button>
                <ul className="dropdown-menu">
                  <li className="active"><a className="dropdown-item" href="#">USD $</a></li>
                  <li><a className="dropdown-item" href="#">EUR €</a></li>
                </ul>
              </div>
            </div>

            <div className="header-res-social">
              <div className="header-top-social">
                <ul className="mb-0">
                  <li className="list-inline-item"><a className="hdr-facebook" href="#"><i className="ecicon eci-facebook" /></a></li>
                  <li className="list-inline-item"><a className="hdr-twitter" href="#"><i className="ecicon eci-twitter" /></a></li>
                  <li className="list-inline-item"><a className="hdr-instagram" href="#"><i className="ecicon eci-instagram" /></a></li>
                  <li className="list-inline-item"><a className="hdr-linkedin" href="#"><i className="ecicon eci-linkedin" /></a></li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ekka mobile Menu End */}
    </header>
    

          {/* ekka Cart Start */}
          <div className="ec-side-cart-overlay" 
      style={{display:open===true?'block':'none'}}
      />
      <div id="ec-side-cart" className="ec-side-cart">
        <div className="ec-cart-inner">
          <div className="ec-cart-top">
            <div className="ec-cart-title">
              <span className="cart_title">My Cart</span>
              <button className="ec-close">×</button>
            </div>
            <ul className="eccart-pro-items">
              <li>
                <a href="product-left-sidebar.html" className="sidekka_pro_img"><img src="assets/images/product-image/6_1.jpg" alt="product" /></a>
                <div className="ec-pro-content">
                  <a href="product-left-sidebar.html" className="cart_pro_title">T-shirt For Women</a>
                  <span className="cart-price"><span>$76.00</span> x 1</span>
                  <div className="qty-plus-minus">
                    <input className="qty-input" type="text" name="ec_qtybtn" defaultValue={1} />
                  </div>
                  <a href="javascript:void(0)" className="remove">×</a>
                </div>
              </li>
              <li>
                <a href="product-left-sidebar.html" className="sidekka_pro_img"><img src="assets/images/product-image/12_1.jpg" alt="product" /></a>
                <div className="ec-pro-content">
                  <a href="product-left-sidebar.html" className="cart_pro_title">Women Leather Shoes</a>
                  <span className="cart-price"><span>$64.00</span> x 1</span>
                  <div className="qty-plus-minus">
                    <input className="qty-input" type="text" name="ec_qtybtn" defaultValue={1} />
                  </div>
                  <a href="javascript:void(0)" className="remove">×</a>
                </div>
              </li>
              <li>
                <a href="product-left-sidebar.html" className="sidekka_pro_img"><img src="assets/images/product-image/3_1.jpg" alt="product" /></a>
                <div className="ec-pro-content">
                  <a href="product-left-sidebar.html" className="cart_pro_title">Girls Nylon Purse</a>
                  <span className="cart-price"><span>$59.00</span> x 1</span>
                  <div className="qty-plus-minus">
                    <input className="qty-input" type="text" name="ec_qtybtn" defaultValue={1} />
                  </div>
                  <a href="javascript:void(0)" className="remove">×</a>
                </div>
              </li>
            </ul>
          </div>
          <div className="ec-cart-bottom">
            <div className="cart-sub-total">
              <table className="table cart-table">
                <tbody>
                  <tr>
                    <td className="text-left">Sub-Total :</td>
                    <td className="text-right">$300.00</td>
                  </tr>
                  <tr>
                    <td className="text-left">VAT (20%) :</td>
                    <td className="text-right">$60.00</td>
                  </tr>
                  <tr>
                    <td className="text-left">Total :</td>
                    <td className="text-right primary-color">$360.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="cart_btn">
              <a href="cart.html" className="btn btn-primary">View Cart</a>
              <a href="checkout.html" className="btn btn-secondary">Checkout</a>
            </div>
          </div>
        </div>
      </div>
      {/* ekka Cart End */}
    </>
    
  )
}

export default Header
