import React, { useState, useContext, useEffect } from 'react'
import { baseurl, protocol, AppContext } from '../common/Constants'
import { unsetDataOnCookie } from '../common/Functions'
import Logo from '../assets/images/logo.png'

function Header({ open, setopen }) {

  const { userToken, localStorageName, cartObjs } = useContext(AppContext)

  console.log("TOKEN", userToken);

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
                    <a href="/"><img src={Logo} alt="Site Logo" /><img className="dark-logo" src="assets/images/logo/dark-logo.png" alt="Site Logo" style={{ display: 'none' }} /></a>
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
                      <button className="dropdown-toggle" data-bs-toggle="dropdown"><i class="far fa-user svg_img header_svg" style={{fontSize:'x-large'}}></i></button>
                      <ul className="dropdown-menu dropdown-menu-right">
                        {
                          userToken == "" &&
                          <>
                            <li><a className="dropdown-item" href="/register">Register</a></li>
                            <li><a className="dropdown-item" href="/login">Login</a></li>
                          </>
                        }

                        {
                          userToken != "" &&
                          <>
                            <li><a className="dropdown-item" href="/myaccount">My Account</a></li>
                            <li><a className="dropdown-item" href="#" onClick={() => { unsetDataOnCookie(localStorageName); window.location.replace('/login') }}>Logout</a></li>
                          </>
                        }


                      </ul>
                    </div>
                    {/* Header User End */}
                    {/* Header wishlist Start */}

                    {/* Header wishlist End */}
                    {/* Header Cart Start */}
                    <a href="/cart" className="ec-header-btn ec-side-toggle">
                      <div className="header-icon"><i class="fas fa-shopping-cart svg_img header_svg" style={{fontSize:'x-large'}}></i></div>
                      <span className="ec-header-count cart-count-lable">{cartObjs.length}</span>
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
              <div className="lg-col">
                <div className="header-logo d-flex justify-content-center">
                  <a href="/"><img src={Logo} alt="Site Logo" /><img className="dark-logo" src="assets/images/logo/dark-logo.png" alt="Site Logo" style={{ display: 'none' }} /></a>
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
                    <li><a href={userToken == '' ? "/login" : "/myorders"} >My Orders</a></li>
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
        <div id="ec-mobile-menu" className={`ec-side-cart ec-mobile-menu ${open ? 'ec-open' : ""}`}>
          <div className="ec-menu-title">
            <span className="menu_title">My Menu</span>
            <button className="ec-close" onClick={() => setopen()}>×</button>
          </div>
          <div className="ec-menu-inner">
            <div className="ec-menu-content">
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/categories">Categories</a></li>
                <li><a href="/products">Products</a></li>
                <li><a href="/offers">Offers</a></li>
                <li><a href={userToken == '' ? "/login" : "/myorders"} >My Orders</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="contactus">Contact Us</a></li>
              </ul>
            </div>

          </div>
        </div>

        {/* ekka mobile Menu End */}
      </header>


      {/* ekka Cart Start */}
      <div className="ec-side-cart-overlay"
        style={{ display: open === true ? 'block' : 'none' }}
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
