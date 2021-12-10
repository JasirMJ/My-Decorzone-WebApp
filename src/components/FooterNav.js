import React from 'react'

function FooterNav() {
    return (
        <>
          <div className="ec-nav-toolbar">
        <div className="container">
          <div className="ec-nav-panel">
            <div className="ec-nav-panel-icons">
              <a href="#ec-mobile-menu" className="navbar-toggler-btn ec-header-btn ec-side-toggle"><img src="assets/images/icons/menu.svg" className="svg_img header_svg" alt="icon" /></a>
            </div>
            <div className="ec-nav-panel-icons">
              <a href="/cart" className="toggle-cart ec-header-btn ec-side-toggle"><img src="assets/images/icons/cart.svg" className="svg_img header_svg" alt="icon" /><span className="ec-cart-noti ec-header-count cart-count-lable">3</span></a>
            </div>
            <div className="ec-nav-panel-icons">
              <a href="/" className="ec-header-btn"><img src="assets/images/icons/home.svg" className="svg_img header_svg" alt="icon" /></a>
            </div>
            <div className="ec-nav-panel-icons">
              <a href="/categories" className="ec-header-btn"><img src="assets/images/icons/grid.svg" className="svg_img header_svg" alt="icon" /><span className="ec-cart-noti">4</span></a>
            </div>
            <div className="ec-nav-panel-icons">
              <a href="/myaccount" className="ec-header-btn"><img src="assets/images/icons/user.svg" className="svg_img header_svg" alt="icon" /></a>
            </div>
          </div>
        </div>
      </div>  
        </>
    )
}

export default FooterNav
