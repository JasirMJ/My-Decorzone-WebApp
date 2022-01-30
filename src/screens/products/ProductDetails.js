import Header from '../../components/Header'
import CartComponent from '../../components/CartComponent';
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
import { ImageSlider } from './ImageSlider';


const ProductDetails = () => {
    const [open, setopen] = useState(false)
    const { userToken, setCartObjs, cartObjs, isLogined, totalPayAmount, cartDiscountTotalAmount, cartTotalAmount, extraCharges, deliveryCharge, userAddressId } = useContext(AppContext)
    const { id } = useParams()
    const [quantity, setquantity] = useState(1)
    const [updateCart, setupdateCart] = useState(false)
    const [singleItem, setsingleItem] = useState(false)
    const [cartCount, setcartCount] = useState(false);
    const [cartData, setcartData] = useState({ count: 0, varient: '' });
    const [Data, setData] = useState([]);

    const [price, setprice] = useState("");
    const [offerprice, setofferprice] = useState("");
    const [offer_enabled, setoffer_enabled] = useState(false);

    const [products, setproducts] = useState([]);

    const [ButtonLoading, setButtonLoading] = useState(false);

    const [selectVarientId, setselectVarientId] = useState("")
    const [varientDesc, setvarientDesc] = useState("");



    useEffect(() => {
        GetData()
        getProducts()
    }, []);

    const GetData = () => {
        var FormData = require('form-data');
        var fdata = new FormData();

        var config = {
            method: 'get',
            url: baseurl + '/items/items/' + id,
            headers: {
            },
            data: fdata
        };

        axios(config)
            .then(function (response) {
                console.log("PRODUCT DETAILS", response.data);
                if (response.data) {
                    setData(response.data)
                    if (response.data.variants.length > 0) {
                        setselectVarientId(response.data.variants[0].id)
                        setprice(response.data.variants[0].rate)
                        setofferprice(response.data.variants[0].offer_rate)
                        setoffer_enabled(response.data.variants[0].offer_enabled)
                        setvarientDesc(response.data.variants[0].description)
                    }
                }
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    const getProducts = () => {
        var FormData = require('form-data');
        var fdata = new FormData();

        var config = {
            method: 'get',
            url: baseurl + '/items/items/',
            headers: {
            },
            data: fdata
        };

        axios(config)
            .then(function (response) {
                console.log("PRODUCTS", response.data.results);
                setproducts(response.data.results)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    useEffect(() => {
        if (userToken) {
            if (updateCart) {
                const delayDebounceFn = setTimeout(() => {
                    //   console.log(searchKey)
                    // Send Axios request here
                    cartUpdate(quantity)
                }, 1000)
                return () => clearTimeout(delayDebounceFn)
            }
        }
    }, [quantity])

    useEffect(() => {
        checkingItemInCart(selectVarientId)
    }, [selectVarientId])

    const checkingItemInCart = (varientid) => {
        if (isLogined) {
            if (Data.length != 0) {
                if (Data.variants.length != 0) {
                    var itemAvailableInCart = cartObjs.find(data => data.varient.id == varientid)
                    if (itemAvailableInCart) {
                        console.warn("ITEM AVAILABLE IN CART", itemAvailableInCart);
                        setquantity(itemAvailableInCart.quantity)
                        setsingleItem(true)
                    } else {
                        console.log("NOT AVAILABLE ITEM  IN CART");
                        setsingleItem(false)
                        setquantity(1)
                    }
                }
            }
        }
    }

    const checkingVarientSingleOrMultiple = () => {
        if (isLogined) {
            console.log("same branch");
            setsingleItem(true)
            setupdateCart(true)
            setquantity(1)
        } else {
            window.location.href = '/login';
        }
    }

    const cartUpdate = (count) => {

        setButtonLoading(true)

        if (isLogined) {
            var item = [{
                "varient": selectVarientId,
                "quantity": count
            }]

            var axios = require('axios');
            var FormData = require('form-data');
            var fdata = new FormData();
            fdata.append('varient_lst', JSON.stringify(item));
            fdata.append('keyword', 'add');

            var config = {
                method: 'post',
                url: baseurl + '/cart/',
                headers: {
                    'Authorization': userToken,
                },
                data: fdata
            };

            axios(config)
                .then(function (response) {
                    setupdateCart(false)
                    setButtonLoading(false)
                    console.log({ response });
                    if (response.data.Error) {
                        console.log("Sorry , product is unavialable right now", response.data);

                        // getCart()
                    } else {
                        setCartObjs(response.data.basket)
                        setButtonLoading(false)
                    }
                })
                .catch(function (error) {
                    // console.log(error);
                    setButtonLoading(false)
                    console.log(error.response.data.Error);
                });
        } else {
            window.location.replace('/login')
        }


    }

    const selectVarient = (item) => {
        setselectVarientId(item.id)
        setprice(item.rate)
        setofferprice(item.offer_rate)
        setoffer_enabled(item.offer_enabled)
        setvarientDesc(item.description)
    }

    return (
        <div>
            <div>
                <div id="ec-overlay"><span className="loader_img" /></div>
                <Header open={open} setopen={() => setopen(!open)} />

                {/* ekka Cart Start */}
                <div className="ec-side-cart-overlay" />

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
                                                    <div className="single-product-cover" style={{overflow:'unset'}}>
                                                        <div className="single-slide zoom-image-hover">
                                                            {/* <img className="img-responsive" src={data.images[0].image} alt /> */}
                                                            <ImageSlider images={Data.images} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single-pro-desc">
                                                <div className="single-pro-content">
                                                    <h5 className="ec-single-title mb-0">{Data.name}</h5>
                                                    <div className="ec-single-stoke d-flex justify-content-between align-items-center  mb-4">
                                                        <div className=''>

                                                            {
                                                                Data.is_popular == true &&
                                                                <b className="ec-single-ps-title " style={{ fontSize: 'x-small' }}>POPULAR <span className='mx-1'>|</span></b>
                                                            }

                                                            {
                                                                Data.is_recommended == true &&
                                                                <b className="ec-single-ps-title " style={{ fontSize: 'x-small' }}>RECOMMEDED <span className='mx-1'>|</span></b>

                                                            }

                                                            {
                                                                Data.is_new == true &&
                                                                <b className="ec-single-ps-title " style={{ fontSize: 'x-small' }}>NEW <span className='mx-1'></span></b>
                                                            }

                                                        </div>

                                                        <span class="flags " style={{ fontSize: 'smaller' }}><span class="new" style={Data.is_out_of_stock == true ? { color: 'red', fontWeight: '500' } : { color: 'green', fontWeight: '500' }}>{Data.is_out_of_stock == true ? 'OUT OF STOCK' : 'IN STOCK'}</span></span>


                                                    </div>

                                                    <div className="ec-single-desc">{Data.description}</div>

                                                    <div className="ec-single-price-stoke">
                                                        <div className="ec-single-price">
                                                            <span className="ec-single-ps-title">Price</span>

                                                            {
                                                                Data.variants?.length > 0 &&
                                                                <span className="ec-price">
                                                                    {
                                                                    }
                                                                    {
                                                                        offer_enabled == true ?
                                                                            <>
                                                                                <span className="new-price mr-2">₹{offerprice}</span>
                                                                                <del>
                                                                                    <span className="old-price" style={{ marginRight: '5px' }}>₹{price}</span>
                                                                                </del>
                                                                            </>
                                                                            :
                                                                            <span className=" new-price">₹{price}</span>
                                                                    }
                                                                </span>
                                                            }
                                                        </div>



                                                    </div>


                                                    <div className="ec-pro-variation">
                                                        <div className="ec-pro-variation-inner ec-pro-variation-size">
                                                            <span>Select Variant</span>
                                                            <div className="ec-pro-variation-content">
                                                                <ul>
                                                                    {
                                                                        Data.variants?.map((item, index) =>
                                                                            <li className={selectVarientId == item.id && "active"} onClick={() => { selectVarient(item)  }} style={{ padding: '2px 8px' }}><span>{item.name}</span></li>
                                                                        )
                                                                    }

                                                                
                                                                </ul>
                                                            </div>


                                                        </div>

                                                    </div>
                                                    <div className="ec-single-qty">
                                                        <div className="qty-plus-minus">
                                                            <button
                                                                onClick={() => {
                                                                    setquantity((r) => {
                                                                        if (r > 0) {
                                                                            return r - 1;
                                                                        }
                                                                        return r;
                                                                    });
                                                                }}
                                                            ><i class="fas fa-minus"></i></button>
                                                            <input className="qty-input" type="text" name="ec_qtybtn" value={quantity} />
                                                            <button
                                                                onClick={() =>
                                                                    setquantity(pre => pre + 1)}
                                                            > <i class="fas fa-plus"></i></button>
                                                        </div>
                                                        <div className="ec-single-cart ">
                                                            <button onClick={() => { { cartUpdate(quantity) } }} className="btn btn-primary">

                                                                {ButtonLoading &&
                                                                    <div class="spinner-border spinner-border-sm text-light mr-1" role="status">
                                                                        <span class="sr-only">Loading...</span>
                                                                    </div>}
                                                                Add To Cart</button>
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
                                                <li className="nav-item">
                                                    <a className="nav-link" data-bs-toggle="tab" data-bs-target="#ec-spt-nav-rtrn" role="tablist">{'Return & Exchange Policy'}</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="tab-content  ec-single-pro-tab-content">
                                            <div id="ec-spt-nav-details" className="tab-pane fade show active">
                                                <div className="ec-single-pro-tab-desc">
                                                    <p>{Data.description}</p>
                                                    <p>{varientDesc} </p>
                                                </div>
                                            </div>
                                            <div id="#ec-spt-nav-info" className="tab-pane fade">
                                                <div className="ec-single-pro-tab-desc">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                        Lorem Ipsum has been the industry's standard dummy text ever since the
                                                        1500s, when an unknown printer took a galley of type and scrambled it to
                                                        make a type specimen book. It has survived not only five centuries, but also
                                                        the leap into electronic typesetting, remaining essentially unchanged.
                                                    </p>
                                                </div>
                                            </div>

                                            <div id="#ec-spt-nav-rtrn" className="tab-pane fade">
                                                <div className="ec-single-pro-tab-desc">
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                        Lorem Ipsum has been the industry's standard dummy text ever since the
                                                        1500s, when an unknown printer took a galley of type and scrambled it to
                                                        make a type specimen book. It has survived not only five centuries, but also
                                                        the leap into electronic typesetting, remaining essentially unchanged.
                                                    </p>
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
                {/* End Single product */}
                {/* Related Product Start */}
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
                            {
                                products.length > 0 &&
                                <div className="row">
                                    {
                                        products.map((item, index) => {
                                            return <GridProduct key={index} Data={item} />
                                        })
                                    }
                                </div>
                            }
                        </div>
                    </div>
                </section>

                <Footer />
                {/* Footer navigation panel for responsive display */}
                <FooterNav setopen={() => setopen(!open)} />

                {/* Footer navigation panel for responsive display end */}
            </div>
        </div>
    )
}

export default ProductDetails
