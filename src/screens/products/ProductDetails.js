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
import GridProduct from '../../components/GridProduct'
import { useContext, useEffect, useState } from 'react';
import { AppContext, baseurl } from '../../common/Constants';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const ProductDetails = () => {
    const [open, setopen] = useState(false)
    const [CartData, setCartData] = useState([]);
    const [count, setcount] = useState({ count: 0, varient: '' });
    const [data, setdata] = useState({});
    const { id } = useParams()

    const { userToken } = useContext(AppContext)

    useEffect(() => {
        GetData()
    }, []);


    const Addtocart = () => {
        var axios = require('axios');
        var FormData = require('form-data');
        var data = new FormData();
        data.append('keyword', 'add');
        data.append('varient_lst', '[{"varient":"1", "quantity":"3"},{"varient":"2", "quantity":"3"}]');

        var config = {
            method: 'post',
            url: baseurl + '/cart/',
            headers: {
                'Authorization': userToken,
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    const GetData = () => {
        var FormData = require('form-data');
        var data = new FormData();

        var config = {
            method: 'get',
            url: baseurl + '/items/items/' + id,
            headers: {
                Authorization: userToken
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                console.log(response.data);
                if (response.data) {
                    setdata(response.data)
                }
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    console.log({data});
    return (
        <div>
            <div>
                <div id="ec-overlay"><span className="loader_img" /></div>
                <Header open={open} setopen={() => setopen(!open)} />

                {/* ekka Cart Start */}
                <div className="ec-side-cart-overlay" />
                {/* <div id="ec-side-cart" className="ec-side-cart">
                    <div className="ec-cart-inner">
                        <div className="ec-cart-top">
                            <div className="ec-cart-title">
                                <span className="cart_title">My Cart</span>
                                <button className="ec-close">×</button>
                            </div>
                            <ul className="eccart-pro-items">
                                <li>
                                    <a href="/product" className="sidekka_pro_img"><img src="assets/images/product-image/6_1.jpg" alt="product" /></a>
                                    <div className="ec-pro-content">
                                        <a href="/product" className="cart_pro_title">T-shirt For Women</a>
                                        <span className="cart-price"><span>$76.00</span> x 1</span>
                                        <div className="qty-plus-minus">
                                            <input className="qty-input" type="text" name="ec_qtybtn" defaultValue={1} />
                                        </div>
                                        <a href="javascript:void(0)" className="remove">×</a>
                                    </div>
                                </li>
                                <li>
                                    <a href="/product" className="sidekka_pro_img"><img src="assets/images/product-image/12_1.jpg" alt="product" /></a>
                                    <div className="ec-pro-content">
                                        <a href="/product" className="cart_pro_title">Women Leather Shoes</a>
                                        <span className="cart-price"><span>$64.00</span> x 1</span>
                                        <div className="qty-plus-minus">
                                            <input className="qty-input" type="text" name="ec_qtybtn" defaultValue={1} />
                                        </div>
                                        <a href="javascript:void(0)" className="remove">×</a>
                                    </div>
                                </li>
                                <li>
                                    <a href="/product" className="sidekka_pro_img"><img src="assets/images/product-image/3_1.jpg" alt="product" /></a>
                                    <div className="ec-pro-content">
                                        <a href="/product" className="cart_pro_title">Girls Nylon Purse</a>
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
                </div> */}
                {/* ekka Cart End */}
                {/* Ec breadcrumb start */}

                {/* Ec breadcrumb end */}
                {/* Sart Single product */}
                <section className="ec-page-content section-space-p">
                    <div className="container">
                        <div className="row">
                            <div className="ec-pro-rightside ec-common-rightside col-lg-9 order-lg-last col-md-12 order-md-first">
                                {/* Single product content Start */}
                                <div className="single-pro-block">
                                    <div className="single-pro-inner">
                                        <div className="row">
                                            <div className="single-pro-img">
                                                <div className="single-product-scroll">
                                                    <div className="single-product-cover">
                                                        <div className="single-slide zoom-image-hover">
                                                            {/* <img className="img-responsive" src={data.images[0].image} alt /> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single-pro-desc">
                                                <div className="single-pro-content">
                                                    <h5 className="ec-single-title">{data.name}</h5>

                                                    <div className="ec-single-desc">{data.description}</div>

                                                    <div className="ec-single-price-stoke">
                                                        <div className="ec-single-price">
                                                            <span className="ec-single-ps-title">Price</span>
                                                            <span className="new-price">$97.00</span>
                                                        </div>
                                                        <div className="ec-single-stoke">
                                                            <span className="ec-single-ps-title">IN STOCK</span>
                                                            <span className="ec-single-sku">SKU#: WH12</span>
                                                        </div>
                                                    </div>
                                                    <div className="ec-pro-variation">
                                                        <div className="ec-pro-variation-inner ec-pro-variation-size">
                                                            <span>SIZE</span>
                                                            <div className="ec-pro-variation-content">
                                                                <ul>
                                                                    <li className="active"><span>S</span></li>
                                                                    <li><span>M</span></li>
                                                                    <li><span>L</span></li>
                                                                    <li><span>XL</span></li>
                                                                </ul>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className="ec-single-qty">
                                                        <div className="qty-plus-minus">
                                                            <button onClick={() => setcount({ ...count, count: count.count - 1 })} disabled={!count.count}><i class="fas fa-minus"></i></button>
                                                            <input className="qty-input" type="text" name="ec_qtybtn" value={count.count} />
                                                            <button onClick={() => setcount({ ...count, count: count.count + 1 })} > <i class="fas fa-plus"></i></button>
                                                    </div>
                                                    <div className="ec-single-cart ">
                                                        <button className="btn btn-primary">Add To Cart</button>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Single product content End */}
                            {/* Single product tab start */}
                            <div className="ec-single-pro-tab">
                                <div className="ec-single-pro-tab-wrapper">
                                    <div className="ec-single-pro-tab-nav">
                                        <ul className="nav nav-tabs">
                                            <li className="nav-item">
                                                <a className="nav-link active" data-bs-toggle="tab" data-bs-target="#ec-spt-nav-details" role="tablist">Detail</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" data-bs-toggle="tab" data-bs-target="#ec-spt-nav-info" role="tablist">More Information</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="tab-content  ec-single-pro-tab-content">
                                        <div id="ec-spt-nav-details" className="tab-pane fade show active">
                                            <div className="ec-single-pro-tab-desc">
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the
                                                    1500s, when an unknown printer took a galley of type and scrambled it to
                                                    make a type specimen book. It has survived not only five centuries, but also
                                                    the leap into electronic typesetting, remaining essentially unchanged.
                                                </p>
                                                <ul>
                                                    <li>Any Product types that You want - Simple, Configurable</li>
                                                    <li>Downloadable/Digital Products, Virtual Products</li>
                                                    <li>Inventory Management with Backordered items</li>
                                                    <li>Flatlock seams throughout.</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div id="ec-spt-nav-info" className="tab-pane fade">
                                            <div className="ec-single-pro-tab-moreinfo">
                                                <ul>
                                                    <li><span>Weight</span> 1000 g</li>
                                                    <li><span>Dimensions</span> 35 × 30 × 7 cm</li>
                                                    <li><span>Color</span> Black, Pink, Red, White</li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            {/* product details description area end */}
                        </div>
                        {/* Sidebar Area Start */}

                        {/* Sidebar Area Start */}
                    </div>
            </div>
        </section>
                {/* End Single product */ }
    {/* Related Product Start */ }
                <section className="section ec-releted-product section-space-p">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <div className="section-title">
                                    <h2 className="ec-bg-title">Related products</h2>
                                    <h2 className="ec-title">Related products</h2>
                                    <p className="sub-title">Browse The Collection of Top Products</p>
                                </div>
                            </div>
                        </div>
                        <div className="row margin-minus-b-30">
                            {/* <GridProduct />
                            <GridProduct />
                            <GridProduct />
                            <GridProduct /> */}
                        </div>
                    </div>
                </section>

                <Footer />
    {/* Footer navigation panel for responsive display */ }
    <FooterNav setopen={() => setopen(!open)} />

    {/* Footer navigation panel for responsive display end */ }
            </div >
        </div >
    )
}

export default ProductDetails
