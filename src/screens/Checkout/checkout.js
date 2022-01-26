import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AppContext, baseurl } from '../../common/Constants';
import Header from '../../components/Header';

const Checkout = () => {

  const { userToken, setCartObjs, cartObjs, totalPayAmount, cartDiscountTotalAmount, cartTotalAmount, extraCharges, deliveryCharge, userAddressId } = useContext(AppContext)


    const [AddNewAddress, setAddNewAddress] = useState(false);
    const [Edit, setEdit] = useState();
    const [data, setdata] = useState([]);
    const [addressData, setaddressData] = useState({
        address1: '',
        address2: '',
        land_mark: '',
        latitude: '',
        longtitude: '',
        city: '',
        pin: '',
        state: '',
    });

    const [selectedAddressid, setselectedAddressid] = useState("");

    useEffect(() => {
        GetData()
    }, []);


    const handleSubmit = () => {
        var axios = require('axios');
        var FormData = require('form-data');
        var data = new FormData();
        data.append('address1', addressData.address1);
        data.append('address2', addressData.address2);
        data.append('land_mark', addressData.land_mark);
        data.append('latitude', addressData.latitude);
        data.append('longitude', addressData.longtitude);
        data.append('city', addressData.city);
        data.append('pin', addressData.pin);
        data.append('state', addressData.state);


        var config = {
            method: 'post',
            url: baseurl + '/users/address/',
            headers: {
                'Authorization': userToken,
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                console.log(response.data)
                if (response.data) {
                    setAddNewAddress(false)
                    GetData()
                }
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    const GetData = () => {
        var axios = require('axios');
        var FormData = require('form-data');
        var data = new FormData();

        var config = {
            method: 'get',
            url: baseurl + '/users/address/',
            headers: {
                'Authorization':  userToken,
            },
            data: data
        };
        console.log({ config });
        axios(config)
            .then(function (response) {
                console.log(response.data);

                if (response.data.results) {
                    setdata(response.data.results)
                }
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    const handleDelete = (id) => {

        var config = {
            method: 'delete',
            url: baseurl + '/users/address/' + id,
            headers: {
                'Authorization':  userToken,
            },
        };

        axios(config)
            .then(function (response) {
                console.log(response.data);
                if (response.data) {
                    GetData()
                }
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    const placeOrder = () => {
        if(selectedAddressid == "") {
            alert("select address");
            return 0
        }
        var axios = require('axios');
        var FormData = require('form-data');
        var data = new FormData();
        data.append('order_type', 'COD');
        data.append('address', selectedAddressid);
        data.append('promocode', '');
        
        var config = {
          method: 'post',
          url:  baseurl + '/order/',
          headers: { 
            'Authorization': userToken, 
          },
          data : data
        };
        
        axios(config)
        .then(function (response) {
            if(response.status == 200) {
                window.location.replace('/myorders')
            } else {
                alert("cart is empty")
            }
        })
        .catch(function (error) {
          console.log(error);
          alert("cart is empty")
        });
    }

    const selectedAddress = (id) => {
        var axios = require('axios');
        var FormData = require('form-data');
        var data = new FormData();
        data.append('address_id', id);
        
        var config = {
          method: 'post',
          url: baseurl + '/users/default/',
          headers: { 
            'Authorization': userToken, 
          },
          data : data
        };
        
        axios(config)
        .then(function (response) {
            setselectedAddressid(id)
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
 
    return <div>
        <Header />
        <section className="ec-page-content section-space-p">
            <div className="container">
                <div className="row">
                    <div className="ec-checkout-leftside col-lg-8 col-md-12 ">
                        {/* checkout content Start */}
                        <div className="ec-checkout-content">
                            <div className="ec-checkout-inner">

                                <div className="ec-checkout-wrap margin-bottom-30 padding-bottom-3">
                                    <div className="ec-checkout-block ec-check-bill">
                                        <h3 className="ec-checkout-title">Shipping Address</h3>
                                        <div className="ec-bl-block-content mt-4">

                                            {AddNewAddress &&

                                                <div className="ec-check-bill-form">
                                                    <form action="#" method="post">
                                                        <span className="ec-bill-wrap ec-bill-half">
                                                            <label> Name*</label>
                                                            <input type="text" name="name" placeholder="Enter your name" onChange={e => setaddressData({ ...addressData, address1: e.target.value })} value={addressData.address1} required />
                                                        </span>
                                                        {/* <span className="ec-bill-wrap ec-bill-half">
                                                            <label>Last Name*</label>
                                                            <input type="text" name="lastname" placeholder="Enter your last name" required />
                                                        </span> */}
                                                        <span className="ec-bill-wrap ec-bill-half">
                                                            <label>Address</label>
                                                            <input type="text" name="address" placeholder="Address Line 1" onChange={e => setaddressData({ ...addressData, address2: e.target.value })} value={addressData.address2} />
                                                        </span>
                                                        <span className="ec-bill-wrap ec-bill-half">
                                                            <label>Landmark *</label>

                                                            <input type="text" name="landmark" id="" placeholder='Landmark' onChange={e => setaddressData({ ...addressData, land_mark: e.target.value })} value={addressData.land_mark} />

                                                        </span>
                                                        <span className="ec-bill-wrap ec-bill-half">
                                                            <label>City *</label>

                                                            <input type="text" name="city" id="" placeholder='Enter your city' onChange={e => setaddressData({ ...addressData, city: e.target.value })} value={addressData.city} />

                                                        </span>
                                                        <span className="ec-bill-wrap ec-bill-half">
                                                            <label>Pincode</label>
                                                            <input type="text" name="postalcode" placeholder="Pincode" onChange={e => setaddressData({ ...addressData, pin: e.target.value })} value={addressData.pin} />
                                                        </span>
                                                        {/* <span className="ec-bill-wrap ec-bill-half">
                                                            <label>Country *</label>
                                                            <span className="ec-bl-select-inner">
                                                                <select name="ec_select_country" id="ec-select-country" className="ec-bill-select">
                                                                    <option selected disabled>Country</option>
                                                                    <option value={1}>Country 1</option>
                                                                    <option value={2}>Country 2</option>
                                                                    <option value={3}>Country 3</option>
                                                                    <option value={4}>Country 4</option>
                                                                    <option value={5}>Country 5</option>
                                                                </select>
                                                            </span>
                                                        </span> */}
                                                        <span className="ec-bill-wrap ec-bill-half">
                                                            <label>Region State</label>
                                                            <input type="text" name="state" id="" placeholder='Region/State' onChange={e => setaddressData({ ...addressData, state: e.target.value })} value={addressData.state} />
                                                            {/* <span className="ec-bl-select-inner">
                                                                <select name="ec_select_state" id="ec-select-state" className="ec-bill-select">
                                                                    <option selected disabled>Region/State</option>
                                                                    <option value={1}>Region/State 1</option>
                                                                    <option value={2}>Region/State 2</option>
                                                                    <option value={3}>Region/State 3</option>
                                                                    <option value={4}>Region/State 4</option>
                                                                    <option value={5}>Region/State 5</option>
                                                                </select>
                                                            </span> */}
                                                        </span>
                                                        <div className="d-flex justify-content-end w-100">

                                                            <button className='btn btn-secondary' onClick={() => setAddNewAddress(false)}>Cancel</button>
                                                            <button className='btn btn-success ml-5' onClick={handleSubmit} type='button'>Submit</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            }

                                            {!AddNewAddress &&
                                                <div className="row">
                                                    {data.map(item => (

                                                        <div className="col-md-6 col-sm-12 mt-2">
                                                            <div className="ec-vendor-detail-block ec-vendor-block-address mar-b-30">
                                                                <div className='d-flex justify-content-between p-2' style={{ backgroundColor: '#f7f7f7' }}>Address
                                                                    <div>

                                                                        <button type='button' className='mr-4' onClick={() => { setAddNewAddress(true); setaddressData(item) }} >
                                                                            <i class="fas fa-pencil-alt"></i>
                                                                        </button>

                                                                        <button type='button' className='btn' onClick={() => handleDelete(item.id)}>
                                                                            <i class="far fa-trash-alt text-danger"></i>
                                                                        </button>
                                                                    </div>


                                                                </div>
                                                                <ul>
                                                                    <li><strong>Home : </strong>{item.address1} {item.address2} {item.land_mark} {item.city} {item.pin} {item.state}</li>
                                                                </ul>
                                                                <button onClick={()=>{selectedAddress(item.id)}} className='btn btn-danger w-100 mt-3'>
                                                                    {selectedAddressid === item.id ? 'Selected' : 'Choose address'}
                                                                </button>
                                                            </div>
                                                        </div>
                                                    ))}

                                                    <div className='col-md-6 col-sm-12 align-items-center d-flex justify-content-center' style={{minHeight:'6rem'}}>
                                                        <div className="ec-vendor-detail-block ec-vendor-block-address mar-b-30">
                                                            <div className="d-flex flex-column justify-content-center align-items-center">
                                                                <button className='btn' onClick={() => setAddNewAddress(true)}>
                                                                    <i class="far fa-plus-square " style={{ fontSize: '3rem' }}></i>
                                                                    <p>Add New Address</p>
                                                                </button>

                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            }
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/*cart content End */}
                    </div>
                    {/* Sidebar Area Start */}
                    <div className="ec-checkout-rightside col-lg-4 col-md-12">
                        <div className="ec-sidebar-wrap ec-checkout-pay-wrap">
                            {/* Sidebar Payment Block */}
                            <div className="ec-sidebar-block">
                                <div className="ec-sb-title">
                                    <h3 className="ec-sidebar-title">Payment Method<div className="ec-sidebar-res"><i className="ecicon eci-angle-down" /></div></h3>
                                </div>
                                <div className="ec-sb-block-content ec-sidebar-dropdown">
                                    <div className="ec-checkout-pay">
                                        <div className="ec-pay-desc">Please select the preferred payment method to use on this
                                            order.</div>
                                        <form action="#">
                                            <span className="ec-pay-option">
                                                <span className='d-flex '>
                                                    <input value={true} type="radio" style={{ height: '15px' }} id="pay1" name="radio-group" />
                                                    <label  htmlFor="pay1">Cash On Delivery</label>
                                                </span>
                                            </span>
                                            {/* <span className="ec-pay-commemt">
                                                <span className="ec-pay-opt-head">Add Comments About Your Order</span>
                                                <textarea name="your-commemt" placeholder="Comments" defaultValue={""} />
                                            </span>
                                            <span className="ec-pay-agree"><input type="checkbox" defaultValue /><a href="#">I have
                                                read and agree to the <span>Terms &amp; Conditions</span></a><span className="checked" /></span> */}
                                        </form>
                                    </div>
                                </div>
                            </div>
                            {/* Sidebar Payment Block */}
                        </div>
                        <div className="ec-sidebar-wrap">

                  
                            {/* Sidebar Summary Block */}
                            <div className="ec-sidebar-block">
                                <div className="ec-sb-title">
                                    <h3 className="ec-sidebar-title">Summary<div className="ec-sidebar-res"><i className="ecicon eci-angle-down" /></div></h3>
                                </div>
                                <div className="ec-sb-block-content ec-sidebar-dropdown">
                                    <div className="ec-checkout-summary">
                                    <div>
                            <span className="text-left">Item Total</span>
                            <span className="text-right">₹ {cartTotalAmount}</span>
                          </div>

                          <div>
                            <span className="text-left">Discount</span>
                            <span className="text-right">-₹{cartDiscountTotalAmount}</span>
                          </div>


                          <div>
                            <span className="text-left">Delivery Charges</span>
                            <span className="text-right">₹{deliveryCharge}</span>
                          </div>

                          <div>
                            <span className="text-left">Extra Charges</span>
                            <span className="text-right">₹{extraCharges}</span>
                          </div>

                          <div className="ec-cart-summary-total">
                            <span className="text-left">Total Amount</span>
                            <span className="text-right">₹{totalPayAmount}</span>
                          </div>
                                        <div className="ec-checkout-coupan-content">
                                            <form className="ec-checkout-coupan-form" name="ec-checkout-coupan-form" method="post" action="#">
                                                <input className="ec-coupan" type="text" required placeholder="Enter Your Coupan Code" name="ec-coupan" defaultValue />
                                                <button className="ec-coupan-btn button btn-primary" type="submit" name="subscribe" value>Apply</button>
                                            </form>
                                        </div>
                                        <div className="ec-checkout-summary-total">
                                            <span className="text-left">Total Amount</span>
                                            <span className="text-right">₹{totalPayAmount}</span>
                                        </div>

                                    </div>
                                </div>
                                <span className="ec-check-order-btn">
                                    <a onClick={()=>{placeOrder()}} className="btn w-100 btn-primary" href="#">Place Order</a>
                                </span>
                            </div>
                            {/* Sidebar Summary Block */}
                        </div>



                    </div>
                </div>
            </div>
        </section >

    </div >;
};

export default Checkout;
