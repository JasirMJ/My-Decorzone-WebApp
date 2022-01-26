import React, { useContext, useEffect } from 'react'

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
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AppContext, baseurl } from '../../common/Constants';


const OrderDetails = () => {
  const { id } = useParams()


  const [open, setopen] = useState(false)
  const [data, setdata] = useState({});
  const { userToken } = useContext(AppContext);
  const [deliveryStatusCode, setdeliveryStatusCode] = useState(0);


  useEffect(() => {
    Getdata()
  }, []);


  const Getdata = () => {
    var axios = require('axios');
    var FormData = require('form-data');
    var data = new FormData();

    var config = {
      method: 'get',
      url: baseurl + '/order/' + id,
      headers: {
        'Authorization': userToken,
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

  useEffect(() => {
    if (data.status == "DELIVERED") {
      setdeliveryStatusCode(4)
    }
    else if (data.status == "OUT_FOR_DELIVERY") {
      setdeliveryStatusCode(3)
    }
    else if (data.status == "SHIPPED") {
      setdeliveryStatusCode(2)
    }
    else if (data.status == "PLACED") {
      setdeliveryStatusCode(1)
    }
  }, []);



  console.log({ data });
  return (
    <div>
      <div>
        {/* ekka Cart Start */}
        <div className="ec-side-cart-overlay" />
        <Header open={open} setopen={() => setopen(!open)} />

        {/* ekka Cart End */}
        {/* Ec Track Order section */}
        <section className="ec-page-content section-space-p">
          <div className="container">
            {/* Track Order Content Start */}
            <div className="ec-trackorder-content col-md-12">
              <div className="ec-trackorder-inner">
                <div className="ec-trackorder-top">
                  <h2 className="ec-order-id">order #{data.id}</h2>
                  <div className="ec-order-detail">
                    {/* <div>Expected arrival 14-02-2021-2022</div>
                    <div>Grasshoppers <span>v534hb</span></div> */}
                  </div>
                </div>
                <div className="ec-trackorder-bottom">
                  <div className="ec-progress-track">
                    <ul id="ec-progressbar">
                      <li className={`step0 ${deliveryStatusCode >= 1 && 'active'}`}><span className="ec-track-icon">
                        {/* <img src="assets/images/icons/track_1.png" alt="track_order" /> */}
                      </span><span className="ec-progressbar-track" /><span className="ec-track-title">order
                          <br />Placed</span></li>
                      {/* <li className={`step0 ${data.status == 'shipped' && 'active'}`}><span className="ec-track-icon">
                        <img src="assets/images/icons/track_2.png" alt="track_order" />
                      </span><span className="ec-progressbar-track" /><span className="ec-track-title">order
                          <br />designing</span></li> */}
                      <li className={`step0 ${deliveryStatusCode >= 2 && 'active'}`}><span className="ec-track-icon">
                        {/* <img src="assets/images/icons/track_3.png" alt="track_order" /> */}
                      </span><span className="ec-progressbar-track" /><span className="ec-track-title">order
                          <br />Shipped</span></li>
                      <li className={`step0 ${deliveryStatusCode >= 3 && 'active'}`}><span className="ec-track-icon">
                        {/* <img src="assets/images/icons/track_4.png" alt="track_order" /> */}
                      </span><span className="ec-progressbar-track" />
                        <span className="ec-track-title">order <br />Out for delivery</span></li>
                      <li className={`step0 ${deliveryStatusCode >= 4 && 'active'}`}><span className="ec-track-icon">
                        {/* <img src="assets/images/icons/track_5.png" alt="track_order" /> */}
                      </span><span className="ec-progressbar-track" /><span className="ec-track-title">order
                          <br />Delivered</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Track Order Content end */}
          </div>
        </section>

        <section className="ec-page-content section-space-p">
          <div className="container">
            <div className="row">
              <div className="ec-cart-leftside col-lg-8 col-md-12 ">
                {/* cart content Start */}
                <div className="ec-cart-content">
                  <div className="ec-cart-inner">
                    <div className="row">
                      <form action="#">
                        <div className="table-content cart-table-content">
                          <table>
                            <thead>
                              <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th />
                              </tr>
                            </thead>
                            <tbody>
                              {data.issued_items?.map(item => (<tr>
                                <td data-label="Product" className="ec-cart-pro-name">
                                  <Link to={`/product/${item.id}`}>
                                    {/* <img className="ec-cart-pro-img mr-4" src="assets/images/product-image/4.jpg" alt /> */}
                                    {item.item.name}</Link>
                                </td>
                                <td data-label="Price" className="ec-cart-pro-price"><span className="amount">{item.rate}</span></td>
                                <td data-label="Quantity" className="ec-cart-pro-qty"><span className="amount">{item.qty}</span></td>
                                <td data-label="Total" className="ec-cart-pro-subtotal">{item.total}</td>
                              </tr>
                              ))
                              }
                            </tbody>
                          </table>
                        </div>

                      </form>
                    </div>
                  </div>
                </div>
                {/*cart content End */}
              </div>
              {/* Sidebar Area Start */}
              <div className="ec-cart-rightside col-lg-4 col-md-12">
                <div className="ec-sidebar-wrap">
                  {/* Sidebar Summary Block */}
                  <div className="ec-sidebar-block">
                    <div className="ec-sb-title">
                      <h3 className="ec-sidebar-title">Delivery Summary</h3>
                    </div>
                    <div className="ec-sb-block-content">
                      <div className="ec-cart-form">

                        <ul className="align-items-center">
                        {
                          data.user?.address.length >0 &&
                            <li className="ec-contact-item"><i className="ecicon eci-map-marker" aria-hidden="true" /><span>Address :</span>
                            {data.user.address[0].address?.address1 + ' ' + data.user.address[0]?.address?.address2 + ' ' + data.user.address[0]?.address?.city + ' ' + data.user.address[0]?.address?.state + ' ' + data.user.address[0]?.address?.pin}
                          </li>
                        }
                        </ul>

                      </div>
                    </div>
                    <div className="ec-sb-block-content">
                      <div className="ec-cart-summary-bottom">
                        <div className="ec-cart-summary">
                          <div>
                            <span className="text-left">Sub-Total</span>
                            <span className="text-right">{data.amount}</span>
                          </div>
                          <div>
                            <span className="text-left">Delivery Charges</span>
                            <span className="text-right">{data.delivery_charge}</span>
                          </div>
                          <div>
                            <span className="text-left">Discount</span>
                            <span className="text-right">{data.item_discount}</span>
                          </div>

                          {/* <div className="ec-cart-coupan-content">
                            <form className="ec-cart-coupan-form" name="ec-cart-coupan-form" method="post" action="#">
                              <input className="ec-coupan" type="text" required placeholder="Enter Your Coupan Code" name="ec-coupan" defaultValue />
                              <button className="ec-coupan-btn button btn-primary" type="submit" name="subscribe" value>Apply</button>
                            </form>
                          </div> */}
                          <div className="ec-cart-summary-total">
                            <span className="text-left">Total Amount</span>
                            <span className="text-right">{data.net_amount}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Sidebar Summary Block */}
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
        {/* End Track Order section */}
      </div>

    </div>
  )
}

export default OrderDetails

