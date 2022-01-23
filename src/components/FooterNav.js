import React, { useState , useContext , useEffect } from 'react'
import {baseurl , protocol , AppContext} from '../common/Constants'
import {unsetDataOnCookie} from '../common/Functions'

function FooterNav(data) {
  console.log("props ",data)

  const { userToken , localStorageName ,  cartObjs } = useContext(AppContext)

    return (
        <>
          <div className="ec-nav-toolbar">
        <div className="container">
          <div className="ec-nav-panel">
            <div className="ec-nav-panel-icons">
              <button  
              onClick={()=>data.setopen()} 
              ><img src="assets/images/icons/menu.svg" className="svg_img header_svg" alt="icon" /></button>
            </div>
            <div className="ec-nav-panel-icons">
              <a href={userToken == '' ? "/login" : "/cart"}  className="toggle-cart ec-header-btn ec-side-toggle"><img src="assets/images/icons/cart.svg" className="svg_img header_svg" alt="icon" /><span className="ec-cart-noti ec-header-count cart-count-lable">{cartObjs.length}</span></a>
            </div>
            <div className="ec-nav-panel-icons">
              <a href="/" className="ec-header-btn"><img src="assets/images/icons/home.svg" className="svg_img header_svg" alt="icon" /></a>
            </div>
            <div className="ec-nav-panel-icons">
              <a href="/categories" className="ec-header-btn"><img src="assets/images/icons/grid.svg" className="svg_img header_svg" alt="icon" /></a>
            </div>
            <div className="ec-nav-panel-icons">
              <a href={userToken == '' ? "/login" : "/myaccount"} className="ec-header-btn"><img src="assets/images/icons/user.svg" className="svg_img header_svg" alt="icon" /></a>
            </div>
          </div>
        </div>
      </div>  
        </>
    )
}

export default FooterNav
