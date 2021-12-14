import React, { useState } from 'react'
import Header from '../../components/Header'
import CartComponent from '../../components/CartComponent';
import MainSlider from '../../components/MainSlider';
import ProductTabArea from '../../components/ProductTabArea';
import BannerSection from '../../components/BannerSection';
import CategorySection from '../../components/CategorySection';
import FeatureSection from '../../components/FeatureSection';
import ServiceSection from '../../components/ServiceSection';
import OfferSection from '../../components/OfferSection';
import NewProduct from '../../components/NewProduct';
import Testimonial from '../../components/Testimonial';
import BrandSection from '../../components/BrandSection';
import InstagramSection from '../../components/InstagramSection';
import Footer from '../../components/Footer';
import TemplateModal from '../../components/TemplateModal';
import Newsletter from '../../components/Newsletter';
import FooterNav from '../../components/FooterNav';
import PurchasePopup from '../../components/PurchasePopup';
import CartFloatingButton from '../../components/CartFloatingButton';
import WhatsappButton from '../../components/WhatsappButton';
import FeatureTools from '../../components/FeatureTools';

const Categories = () => {
    const [open, setopen] = useState(false)
    return (
        <div>
            <div id="ec-overlay"><span className="loader_img" /></div>
            <Header open={open} setopen={() => setopen(!open)} />
            {/* ekka Cart Start */}
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
            {/* ekka Cart End */}
            {/* Ec breadcrumb start */}

            {/* Ec breadcrumb end */}
            {/*  category Section Start */}

            {/*category Section End */}
            {/*  Category Section Start */}
            <section className="section ec-category-section ec-category-wrapper-2 section-space-p">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="section-title">
                                <h2 className="ec-bg-title">vertical tabs</h2>
                                <h2 className="ec-title">vertical tabs</h2>
                                <p className="sub-title">Browse The Collection of Top Categories</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {/*Category Nav Start */}
                        <div className="col-lg-3">
                            <ul className="ec-cat-tab-nav nav">
                                <li className="cat-item"><a className="cat-link active" data-bs-toggle="tab" href="#tab-cat-1">
                                    <div className="cat-icons"><img className="cat-icon" src="assets/images/icons/cat_1.png" alt="cat-icon" /><img className="cat-icon-hover" src="assets/images/icons/cat_1_1.png" alt="cat-icon" /></div>
                                    <div className="cat-desc"><span>Clothes</span><span>440 Products</span></div>
                                </a></li>
                                <li className="cat-item"><a className="cat-link" data-bs-toggle="tab" href="#tab-cat-2">
                                    <div className="cat-icons"><img className="cat-icon" src="assets/images/icons/cat_2.png" alt="cat-icon" /><img className="cat-icon-hover" src="assets/images/icons/cat_2_1.png" alt="cat-icon" /></div>
                                    <div className="cat-desc"><span>Watches</span><span>510 Products</span></div>
                                </a></li>
                                <li className="cat-item"><a className="cat-link" data-bs-toggle="tab" href="#tab-cat-3">
                                    <div className="cat-icons"><img className="cat-icon" src="assets/images/icons/cat_3.png" alt="cat-icon" /><img className="cat-icon-hover" src="assets/images/icons/cat_3_1.png" alt="cat-icon" /></div>
                                    <div className="cat-desc"><span>Bags</span><span>620 Products</span></div>
                                </a></li>
                                <li className="cat-item"><a className="cat-link" data-bs-toggle="tab" href="#tab-cat-4">
                                    <div className="cat-icons"><img className="cat-icon" src="assets/images/icons/cat_4.png" alt="cat-icon" /><img className="cat-icon-hover" src="assets/images/icons/cat_4_1.png" alt="cat-icon" /></div>
                                    <div className="cat-desc"><span>Shoes</span><span>320 Products</span></div>
                                </a></li>
                            </ul>
                        </div>
                        {/* Category Nav End */}
                        {/*Category Tab Start */}
                        <div className="col-lg-9">
                            <div className="tab-content">
                                {/* 1st Category tab end */}
                                <div className="tab-pane fade show active" id="tab-cat-1">
                                    <div className="row">
                                        <img src="assets/images/cat-banner/1.jpg" alt />
                                    </div>
                                </div>
                                {/* 1st Category tab end */}
                                <div className="tab-pane fade" id="tab-cat-2">
                                    <div className="row">
                                        <img src="assets/images/cat-banner/2.jpg" alt />
                                    </div>
                                </div>
                                {/* 2nd Category tab end */}
                                {/* 3rd Category tab start */}
                                <div className="tab-pane fade" id="tab-cat-3">
                                    <div className="row">
                                        <img src="assets/images/cat-banner/3.jpg" alt />
                                    </div>
                                </div>
                                {/* 3rd Category tab end */}
                                {/* 4th Category tab start */}
                                <div className="tab-pane fade" id="tab-cat-4">
                                    <div className="row">
                                        <img src="assets/images/cat-banner/4.jpg" alt />
                                    </div>
                                </div>
                                {/* 4th Category tab end */}
                            </div>
                            {/* Category Tab End */}
                        </div>
                    </div>
                </div>
            </section>
            {/* Category Section End */}
            {/*  Category Section Start */}
            <section className="section ec-category-section ec-category-wrapper-3 section-space-p">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="section-title">
                                <h2 className="ec-bg-title">Classic</h2>
                                <h2 className="ec-title">Classic</h2>
                                <p className="sub-title">Browse The Collection of Top Categories</p>
                            </div>
                        </div>
                    </div>
                    <div className="row cat-space-2 margin-minus-tb-15">
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="cat-card">
                                <img className="cat-icon" src="assets/images/cat-banner/5.jpg" alt="cat-icon" />
                                <div className="cat-detail">
                                    <h4>Watches</h4>
                                    <h5>Starting at <br />$79.00</h5>
                                    <a className="btn-primary" href="#">shop now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="cat-card">
                                <img className="cat-icon" src="assets/images/cat-banner/6.jpg" alt="cat-icon" />
                                <div className="cat-detail">
                                    <h4>Bags</h4>
                                    <h5>Starting at <br />$93.00</h5>
                                    <a className="btn-primary" href="#">shop now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="cat-card">
                                <img className="cat-icon" src="assets/images/cat-banner/7.jpg" alt="cat-icon" />
                                <div className="cat-detail">
                                    <h4>Head Phones</h4>
                                    <h5>Starting at <br />$60.00</h5>
                                    <a className="btn-primary" href="#">shop now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="cat-card">
                                <img className="cat-icon" src="assets/images/cat-banner/8.jpg" alt="cat-icon" />
                                <div className="cat-detail">
                                    <h4>Hats</h4>
                                    <h5>Starting at <br />$80.00</h5>
                                    <a className="btn-primary" href="#">shop now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*  Category Section Start */}
            <section className="section ec-category-section ec-category-wrapper-4 section-space-p">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="section-title">
                                <h2 className="ec-bg-title">Classic</h2>
                                <h2 className="ec-title">Classic</h2>
                                <p className="sub-title">Browse The Collection of Top Categories</p>
                            </div>
                        </div>
                    </div>
                    <div className="row cat-space-3 cat-auto margin-minus-tb-15">
                        <div className="col-lg-2 col-md-4 col-sm-12">
                            <div className="cat-card">
                                <div className="card-img">
                                    <img className="cat-icon" src="assets/images/cat-banner/9.jpg" alt="cat-icon" />
                                </div>
                                <div className="cat-detail">
                                    <h4>Bags</h4>
                                    <h5>Starting at <br />$110.00</h5>
                                    <a className="btn-primary" href="#">shop now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-12">
                            <div className="cat-card">
                                <div className="card-img">
                                    <img className="cat-icon" src="assets/images/cat-banner/10.jpg" alt="cat-icon" />
                                </div>
                                <div className="cat-detail">
                                    <h4>Hats</h4>
                                    <h5>Starting at <br />$100.00</h5>
                                    <a className="btn-primary" href="#">shop now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-12">
                            <div className="cat-card">
                                <div className="card-img">
                                    <img className="cat-icon" src="assets/images/cat-banner/11.jpg" alt="cat-icon" />
                                </div>
                                <div className="cat-detail">
                                    <h4>Watches</h4>
                                    <h5>Starting at <br />$80.00</h5>
                                    <a className="btn-primary" href="#">shop now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-12">
                            <div className="cat-card">
                                <div className="card-img">
                                    <img className="cat-icon" src="assets/images/cat-banner/12.jpg" alt="cat-icon" />
                                </div>
                                <div className="cat-detail">
                                    <h4>Head Phones</h4>
                                    <h5>Starting at <br />$150.00</h5>
                                    <a className="btn-primary" href="#">shop now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-12">
                            <div className="cat-card">
                                <div className="card-img">
                                    <img className="cat-icon" src="assets/images/cat-banner/13.jpg" alt="cat-icon" />
                                </div>
                                <div className="cat-detail">
                                    <h4>Shoes</h4>
                                    <h5>Starting at <br />$79.00</h5>
                                    <a className="btn-primary" href="#">shop now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-12">
                            <div className="cat-card">
                                <div className="card-img">
                                    <img className="cat-icon" src="assets/images/cat-banner/14.jpg" alt="cat-icon" />
                                </div>
                                <div className="cat-detail">
                                    <h4>Belts</h4>
                                    <h5>Starting at <br />$20.00</h5>
                                    <a className="btn-primary" href="#">shop now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*  Category Section Start */}
            <section className="section ec-category-section ec-category-wrapper-5 section-space-p">
                <div className="container ec-category-wrapper-5">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="section-title">
                                <h2 className="ec-bg-title">Classic</h2>
                                <h2 className="ec-title">Classic</h2>
                                <p className="sub-title">Browse The Collection of Top Categories</p>
                            </div>
                        </div>
                    </div>
                    <div className="row cat-space-2 margin-minus-tb-15">
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="cat-card">
                                <img className="cat-icon" src="assets/images/cat-banner/11.jpg" alt="cat-icon" />
                                <a className="btn-primary btn-primary-1" href={`/category/1`}>shop now</a>
                                <div className="cat-detail">
                                    <div className="cat-detail-block">
                                        <h4>Watches</h4>
                                        <h5>Starting at <br />$79.00</h5>
                                        <a href={`/category/1`} className="btn-primary" >shop now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="cat-card">
                                <img className="cat-icon" src="assets/images/cat-banner/12.jpg" alt="cat-icon" />
                                <a className="btn-primary btn-primary-1" href="javacript:void(0)">shop now</a>
                                <div className="cat-detail">
                                    <div className="cat-detail-block">
                                        <h4>Head Phones</h4>
                                        <h5>Starting at <br />$93.00</h5>
                                        <a className="btn-primary" href="#">shop now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="cat-card">
                                <img className="cat-icon" src="assets/images/cat-banner/13.jpg" alt="cat-icon" />
                                <a className="btn-primary btn-primary-1" href="javacript:void(0)">shop now</a>
                                <div className="cat-detail">
                                    <div className="cat-detail-block">
                                        <h4>Shoes</h4>
                                        <h5>Starting at <br />$60.00</h5>
                                        <a className="btn-primary" href="#">shop now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="cat-card">
                                <img className="cat-icon" src="assets/images/cat-banner/14.jpg" alt="cat-icon" />
                                <a className="btn-primary btn-primary-1" href="javacript:void(0)">shop now</a>
                                <div className="cat-detail">
                                    <div className="cat-detail-block">
                                        <h4>Belts</h4>
                                        <h5>Starting at <br />$80.00</h5>
                                        <a className="btn-primary" href="#">shop now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            <FooterNav setopen={() => setopen(!open)} />

        </div>
    )
}

export default Categories
