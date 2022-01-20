import React, { useState , useContext , useEffect } from 'react'
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
import {baseurl , protocol , AppContext} from '../../common/Constants'
import {addDomainInImage} from '../../common/Functions'
import axios from 'axios'

const Categories = () => {

    const { userToken } = useContext(AppContext)

    const [open, setopen] = useState(false)

    const [data, setData] = useState([])
    const [next, setNext] = useState("");
    const [prev, setPrev] = useState("");

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        var axios = require('axios');
        var FormData = require('form-data');
        var data = new FormData();

        var config = {
        method: 'get',
        url: baseurl + '/items/category/',
        headers: { 
        },
        data : data
        };

        axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            setData(response.data.results);
            setNext(response.data.next);
            setPrev(response.data.previous);
        })
        .catch(function (error) {
        console.log(error);
        });

    }

    const handlePrev = () => {
        // alert("prev");

        var config = {
            method: "get",
            url: prev.replace("http:", protocol.replace('//', "")),
            // url: prev + "/?" + params,

            headers: {
                Authorization: userToken,
            },
        };
        // console.log("Caed previousssssssssssssssss ", prev);
        axios(config)
            .then(function (response) {
                // console.log(JSON.stringify(response.data.results));
                setData(response.data.results);
                setNext(response.data.next);
                setPrev(response.data.previous);
            })
            .catch(function (error) {
                // console.log(error);
            });
    };

    const handleNext = () => {
        // alert("next")
        var config = {
            method: "get",
            url: next.replace("http:", protocol.replace('//', "")),
            // url: next + "/?" + params,

            headers: {
                Authorization: userToken,
            },
        };
        // console.log(config.url)
        axios(config)
            .then(function (response) {
                // console.log((response));
                setData(response.data.results);
                setNext(response.data.next);
                setPrev(response.data.previous);
            })
            .catch(function (error) {
                // console.log(error);
            });
    };

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
        
            {/* Category Section End */}
            {/*  Category Section Start */}
            <section className="section ec-category-section ec-category-wrapper-3 section-space-p">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="section-title">
                                <h2 className="ec-bg-title">Categories</h2>
                                <h2 className="ec-title">Categories</h2>
                                <p className="sub-title">Browse The Collection of Top Categories</p>
                            </div>
                        </div>
                    </div>
                  
                    <div className="row cat-space-2 margin-minus-tb-15">
                       {
                           data.map((item, index) => 
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="cat-card">
                                    <img className="cat-icon"src={addDomainInImage(item.image)} alt="cat-icon" />
                                    <div className="cat-detail">
                                        <h4 style={{color:"#fff"}}>{item.name}</h4><br/>
                                        <a className="btn-primary"  href={`/category/${item.id}`} >Shop now</a>
                                    </div>
                                </div>
                            </div>
                           )
                       }

                    </div>
                </div>
            </section>
            

        
            <Footer />
            <FooterNav setopen={() => setopen(!open)} />

        </div>
    )
}

export default Categories
