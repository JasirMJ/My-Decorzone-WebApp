import React from 'react'

function CartFloatingButton() {
    return (
        <>
          <div className="ec-cart-float">
        <a href="#ec-side-cart" className="ec-header-btn ec-side-toggle">
          <div className="header-icon"><img src="assets/images/icons/cart.svg" className="svg_img header_svg" alt="cart" />
          </div>
          <span className="ec-cart-count cart-count-lable">3</span>
        </a>
      </div>  
        </>
    )
}

export default CartFloatingButton
