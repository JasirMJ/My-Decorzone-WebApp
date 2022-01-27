import React, { useState, useContext, useEffect } from 'react'
import { getOffer, addDomainInImage } from '../common/Functions'
import { baseurl, protocol, AppContext } from '../common/Constants'

const GridProduct = ({ Data }) => {

    const { userToken, setCartObjs, cartObjs, isLogined, totalPayAmount, cartDiscountTotalAmount, cartTotalAmount, extraCharges, deliveryCharge, userAddressId } = useContext(AppContext)

    const [quantity, setquantity] = useState(1)
    const [updateCart, setupdateCart] = useState(false)
    const [singleItem, setsingleItem] = useState(false)
    const [cartCount, setcartCount] = useState(false);
    const [cartData, setcartData] = useState({ count: 0, varient: '' });


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
        checkingItemInCart()
    }, [cartObjs])

    const checkingItemInCart = () => {
        if (isLogined) {
            if (Data.variants.length != 0) {
                var itemAvailableInCart = cartObjs.find(data => data.varient.id == Data.variants[0].id)
                if (itemAvailableInCart) {
                    console.warn("ITEM AVAILABLE IN CART", itemAvailableInCart);
                    setquantity(itemAvailableInCart.quantity)
                    setsingleItem(true)
                } else {
                    console.log("NOT AVAILABLE ITEM  IN CART");
                    setsingleItem(false)
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
        if (isLogined) {
            var item = [{
                "varient": Data.variants[0].id,
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
                    console.log({ response });
                    if (response.data.Error) {
                        console.log("Sorry , product is unavialable right now", response.data);
                        // getCart()
                    } else {

                        setCartObjs(response.data.basket)
                    }
                })
                .catch(function (error) {
                    // console.log(error);
                    console.log(error.response.data.Error);
                });
        } else {
            window.location.replace('/login')
        }
    }

    let newtag = {}
    newtag.is_recommended = Data.is_recommended
    newtag.is_new = Data.is_new
    newtag.is_popular = Data.is_popular
    newtag.is_out_of_stock = Data.is_out_of_stock

    // console.log({ newtag });
    return (
        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 pro-gl-content">
            <div className="ec-product-inner">
                <div className="ec-pro-image-outer">
                    <div className="ec-pro-image">
                        <a href={`/product/${Data.id}`} className="image">
                            <img className="main-image" src={addDomainInImage(Data.images?.length != 0 ? Data.images[0]?.image : "")} alt="Product" />
                            <img className="hover-image" src={addDomainInImage(Data.images?.length != 0 ? Data.images[0]?.image : "")} alt="Product" />

                        </a>

                        {
                            getOffer(Data.variants) &&
                            <span className="percentage">{getOffer(Data.variants)}%</span>

                        }
                        {/* <span className="percentage">20%</span> */}
                        {
                            Data.is_popular == true &&
                            <span class="flags" style={{ bottom: '22' }}><span class="new">Popular</span></span>
                        }

                        {
                            Data.is_recommended == true &&
                            <span class="flags" style={{ bottom: '0' }} ><span class="new">Recommended</span></span>
                        }

                        {
                            Data.is_new == true &&
                            <span class="flags" style={{ bottom: '44' }}><span class="new">New</span></span>
                        }

                        {
                            Data.is_out_of_stock == true &&
                            <span class="flags" style={{ bottom: '66' }} ><span class="new">Out Of Stock</span></span>
                        }

                    </div>
                </div>
                <div className="ec-pro-content">
                    <h5 className="ec-pro-title"><a href={`/product/${Data.id}`}>{Data.name}</a></h5>

                    <div className="ec-pro-list-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dutmmy text ever since the 1500s, when an unknown printer took a galley.</div>

                    {
                        Data.variants?.length > 0 &&
                            Data.variants[0]?.offer_enabled == true ?
                            <>
                                <div className='d-flex'>
                                    <span className="new-price" style={{ fontWeight: '500' }} >₹{Data.variants[0]?.offer_rate}</span>
                                <del className="old-price ml-2" style={{ marginRight: '5px' }}>₹{Data.variants[0]?.rate}</del>
                            </div>
                            </>
                :
                <span className="old-price">₹{Data.variants[0]?.rate}</span>
                    }
                <div className="ec-pro-option">
                    <div className="ec-pro-size">
                        <span className="ec-pro-opt-label">Size</span>
                        {/* <ul className="ec-opt-size">
                        <li className="active"><a href="#" className="ec-opt-sz" data-old="$25.00" data-new="$20.00" data-tooltip="Small">S</a></li>
                        <li><a href="#" className="ec-opt-sz" data-old="$27.00" data-new="$22.00" data-tooltip="Medium">M</a></li>
                        <li><a href="#" className="ec-opt-sz" data-old="$35.00" data-new="$30.00" data-tooltip="Extra Large">XL</a></li>
                    </ul> */}
                    </div>
                    <div className="ec-single-qty d-flex justify-content-between w-100 align-items-center">
                        {
                            (Data.is_out_of_stock == false) &&
                            Data.variants.length != 0 &&
                            <>
                                <div className="qty-plus-minus d-flex justify-content-center" style={{ border: '1px solid #eeeeee' }}>
                                    <button style={{ height: '2rem' }}
                                        // onClick={() => setcartData({ ...cartData, count: cartData.count - 1 })}
                                        onClick={() => {
                                            setquantity((r) => {
                                                if (r > 0) {
                                                    return r - 1;
                                                }
                                                return r;
                                            });
                                        }}
                                    ><i class="fas fa-minus"></i></button>
                                    <input className="qty-input" type="text" name="ec_qtybtn" value={quantity}
                                        style={{
                                            background: 'transparent none repeat scroll 0 0',
                                            border: 'medium none',
                                            color: '#444444',
                                            // float: 'right',
                                            fontSize: '15px',
                                            height: '2rem',
                                            margin: 0,
                                            padding: 0,
                                            textAlign: 'center',
                                            width: '40px',
                                            outline: 'none',
                                            fontWeight: 700,
                                        }}
                                    />
                                    <button style={{ height: '2rem' }}

                                        onClick={() =>
                                            setquantity(pre => pre + 1)} > <i class="fas fa-plus"></i></button>
                                </div>
                                <div className="ec-single-cart ">
                                    <button className="btn btn-primary"
                                        onClick={() => { cartUpdate(quantity) }}>Add To Cart</button>
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
        </div >
    )
}

export default GridProduct
