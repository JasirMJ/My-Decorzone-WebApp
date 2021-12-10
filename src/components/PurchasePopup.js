import React from 'react'

function PurchasePopup() {
    return (
        <>
          <div className="recent-purchase">
        <img src="assets/images/product-image/1.jpg" alt="payment image" />
        <div className="detail">
          <p>Someone in new just bought</p>
          <h6>stylish baby shoes</h6>
          <p>10 Minutes ago</p>
        </div>
        <a href="javascript:void(0)" className="icon-btn recent-close">×</a>
      </div>  
        </>
    )
}

export default PurchasePopup
