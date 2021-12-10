import React from 'react'

function CartComponent() {
    return (
        <>
         <div className="ec-side-cart-overlay" />
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
        </>
    )
}

export default CartComponent
