import React, { useContext, useEffect, useState } from 'react';
import { AppContext, baseurl } from '../../common/Constants';
import Header from '../../components/Header';

const Checkout = () => {
    const [AddNewAddress, setAddNewAddress] = useState(false);
    const [Edit, setEdit] = useState();
    const { userToken } = useContext(AppContext)
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

    useEffect(() => {
      GetData()
    }, []);
    

    const handleSubmit = () => {
        var axios = require('axios');
        var FormData = require('form-data');
        var data = new FormData();
        data.append('address1',);
        data.append('address2',);
        data.append('land_mark',);
        data.append('latitude',);
        data.append('longitude',);
        data.append('city',);
        data.append('pin',);
        data.append('state',);

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
                console.log(JSON.stringify(response.data));
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
                'Authorization': userToken,
            },
            data: data
        };

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
                                                            <button className='btn btn-success ml-5'>Submit</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            }

                                            {!AddNewAddress &&
                                                <div className="row">
                                                    <div className="col-md-6 col-sm-12">
                                                        <div className="ec-vendor-detail-block ec-vendor-block-address mar-b-30">
                                                            <div className='d-flex justify-content-between p-2' style={{ backgroundColor: '#f7f7f7' }}>Address
                                                                <a href="javasript:void(0)" data-link-action="editmodal" title="Edit Detail" data-bs-toggle="modal" data-bs-target="#edit_modal">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 32 32" width="32px" height="32px" src="assets/images/icons/edit.svg" className="svg_img pro_svg" alt="edit">
                                                                        <path d="M 23.90625 3.96875 C 22.859375 3.96875 21.8125 4.375 21 5.1875 L 5.1875 21 L 5.125 21.3125 L 4.03125 26.8125 L 3.71875 28.28125 L 5.1875 27.96875 L 10.6875 26.875 L 11 26.8125 L 26.8125 11 C 28.4375 9.375 28.4375 6.8125 26.8125 5.1875 C 26 4.375 24.953125 3.96875 23.90625 3.96875 Z M 23.90625 5.875 C 24.410156 5.875 24.917969 6.105469 25.40625 6.59375 C 26.378906 7.566406 26.378906 8.621094 25.40625 9.59375 L 24.6875 10.28125 L 21.71875 7.3125 L 22.40625 6.59375 C 22.894531 6.105469 23.402344 5.875 23.90625 5.875 Z M 20.3125 8.71875 L 23.28125 11.6875 L 11.1875 23.78125 C 10.53125 22.5 9.5 21.46875 8.21875 20.8125 Z M 6.9375 22.4375 C 8.136719 22.921875 9.078125 23.863281 9.5625 25.0625 L 6.28125 25.71875 Z" /></svg>
                                                                </a>


                                                            </div>
                                                            <ul>
                                                                <li><strong>Home : </strong>123, 2150 Sycamore Street, dummy text of the, San Jose, California - 95131.</li>
                                                            </ul>
                                                            <button className='btn btn-danger w-100 mt-3'>Choose address</button>
                                                        </div>
                                                    </div>

                                                    <div className='col-md-6 col-sm-12 align-items-center d-flex justify-content-center'>
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
                                                    <input type="radio" style={{ height: '15px' }} id="pay1" name="radio-group" />
                                                    <label htmlFor="pay1">Cash On Delivery</label>
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
                                            <span className="text-left">Sub-Total</span>
                                            <span className="text-right">$80.00</span>
                                        </div>
                                        <div>
                                            <span className="text-left">Delivery Charges</span>
                                            <span className="text-right">$80.00</span>
                                        </div>
                                        <div>
                                            <span className="text-left">Coupan Discount</span>
                                            <span className="text-right"><a className="ec-checkout-coupan">Apply Coupan</a></span>
                                        </div>
                                        <div className="ec-checkout-coupan-content">
                                            <form className="ec-checkout-coupan-form" name="ec-checkout-coupan-form" method="post" action="#">
                                                <input className="ec-coupan" type="text" required placeholder="Enter Your Coupan Code" name="ec-coupan" defaultValue />
                                                <button className="ec-coupan-btn button btn-primary" type="submit" name="subscribe" value>Apply</button>
                                            </form>
                                        </div>
                                        <div className="ec-checkout-summary-total">
                                            <span className="text-left">Total Amount</span>
                                            <span className="text-right">$80.00</span>
                                        </div>

                                    </div>
                                </div>
                                <span className="ec-check-order-btn">
                                    <a className="btn w-100 btn-primary" href="#">Place Order</a>
                                </span>
                            </div>
                            {/* Sidebar Summary Block */}
                        </div>



                    </div>
                </div>
            </div>
        </section>

    </div>;
};

export default Checkout;
