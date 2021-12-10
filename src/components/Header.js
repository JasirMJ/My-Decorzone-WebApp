import React from 'react'

function Header() {
    return (
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
    
        {/* ekka mobile Menu End */}
      </header>
    )
}

export default Header
