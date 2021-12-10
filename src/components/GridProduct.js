import React from 'react'

const GridProduct = () => {
    return (
        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 pro-gl-content">
            <div className="ec-product-inner">
                <div className="ec-pro-image-outer">
                <div className="ec-pro-image">
                    <a href="/product/1" className="image">
                    <img className="main-image" src="assets/images/product-image/6_1.jpg" alt="Product" />
                    <img className="hover-image" src="assets/images/product-image/6_1.jpg" alt="Product" />
                    </a>
                    <span className="percentage">20%</span>
                    <span class="flags"><span class="new">New</span></span>
                </div>
                </div>
                <div className="ec-pro-content">
                <h5 className="ec-pro-title"><a href="/product/1">Round Neck T-Shirt</a></h5>
            
                <div className="ec-pro-list-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dutmmy text ever since the 1500s, when an unknown printer took a galley.</div>
                <span className="ec-price">
                    <span className="old-price">$27.00</span>
                    <span className="new-price">$22.00</span>
                </span>
                <div className="ec-pro-option">
                    <div className="ec-pro-size">
                    <span className="ec-pro-opt-label">Size</span>
                    {/* <ul className="ec-opt-size">
                        <li className="active"><a href="#" className="ec-opt-sz" data-old="$25.00" data-new="$20.00" data-tooltip="Small">S</a></li>
                        <li><a href="#" className="ec-opt-sz" data-old="$27.00" data-new="$22.00" data-tooltip="Medium">M</a></li>
                        <li><a href="#" className="ec-opt-sz" data-old="$35.00" data-new="$30.00" data-tooltip="Extra Large">XL</a></li>
                    </ul> */}
                    </div>
                    <div className="ec-single-cart ">
                        <button className="btn btn-primary">Add To Cart</button>
                    </div>
                </div>
                </div>
            </div>
            </div>
    )
}

export default GridProduct
