import React, { useState, useContext, useEffect } from 'react'
import { baseurl, protocol, AppContext } from '../common/Constants'
import { unsetDataOnCookie } from '../common/Functions'

function FooterNav(data) {
  console.log("props ", data)

  const { userToken, localStorageName, cartObjs } = useContext(AppContext)

  return (
    <>
      <div className="ec-nav-toolbar">
        <div className="container m-auto">
          <div className="ec-nav-panel d-flex justify-content-between ">
            <div className="ec-nav-panel-icons">
              <button
                onClick={() => data.setopen()}
              >
                <a>
                  <i class="fas fa-bars" style={{ fontSize: 'x-large' }}></i>
                </a>
              </button>

            </div>
            <div className="ec-nav-panel-icons">
              <a href={userToken == '' ? "/login" : "/cart"} className="toggle-cart ec-header-btn ec-side-toggle"><i class="fas fa-shopping-cart svg_img header_svg" style={{ fontSize: 'x-large' }}></i><span className="ec-cart-noti ec-header-count cart-count-lable">{cartObjs.length}</span></a>
            </div>
            <div className="ec-nav-panel-icons">
              <a href="/" className="ec-header-btn"><i class="fas fa-home" style={{ fontSize: 'x-large' }}></i></a>
            </div>
            <div className="ec-nav-panel-icons">
              <a href="/categories" className="ec-header-btn"><i class="fas fa-th-large" style={{ fontSize: 'x-large' }}></i></a>
            </div>
            <div className="ec-nav-panel-icons">
              <a href={userToken == '' ? "/login" : "/myaccount"} className="ec-header-btn"><i class="far fa-user svg_img header_svg" style={{ fontSize: 'x-large' }}></i></a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FooterNav
