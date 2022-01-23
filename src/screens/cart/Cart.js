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
import CartProduct from './components/CartProduct';

const Cart = () => {
  const [open, setopen] = useState(false)

  const { userToken , setCartObjs , cartObjs , totalPayAmount , cartDiscountTotalAmount , cartTotalAmount , extraCharges ,  deliveryCharge , userAddressId} = useContext(AppContext)

  useEffect(() => {
    getData()
}, [])

  const getData = () => {
    var axios = require('axios');

    var config = {
      method: 'get',
      url: baseurl + '/cart/',
      headers: { 
        'Authorization': userToken,
      },
    };

    axios(config)
    .then(function (response) {
      console.log("CART",JSON.stringify(response.data));
      if(response.data.results.length !=0) {
        console.log("CART DATA",JSON.stringify(response.data.results[0].basket));
        setCartObjs(response.data.results[0].basket)
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <div>
      <div>
        {/* ekka Cart Start */}
        <div className="ec-side-cart-overlay" />
        <Header open={open} setopen={() => setopen(!open)} />
        {/* Ec cart page */}
        <section className="ec-page-content section-space-p">
          <div className="container">
            <div className="row">
              <div className="ec-cart-leftside col-lg-8 col-md-12 ">
                {/* cart content Start */}
         {
           cartObjs.length != 0 ?
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
                                <th style={{ textAlign: 'center' }}>Quantity</th>
                                <th>Total</th>
                                <th />
                              </tr>
                            </thead>
                            <tbody>
                            {
                           cartObjs.map((item, index) => 
                              <CartProduct Data={item} />
                           )
                       }
                           
                       
                            </tbody>
                          </table>
                        </div>
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="ec-single-cart " style={{ marginTop: 10 }}>
                              <a href="/checkout" className="btn btn-primary">Checkout</a>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                :
                <span>NO Cart Item</span>
         }
                {/*cart content End */}
              </div>
              {/* Sidebar Area Start */}
              <div className="ec-cart-rightside col-lg-4 col-md-12">
                <div className="ec-sidebar-wrap">
                  {/* Sidebar Summary Block */}
                  <div className="ec-sidebar-block">
                    <div className="ec-sb-title">
                      <h3 className="ec-sidebar-title">Summary</h3>
                    </div>
          
                    <div className="ec-sb-block-content">
                      <div className="ec-cart-summary-bottom">
                        <div className="ec-cart-summary">

                          <div>
                            <span className="text-left">Item Total</span>
                            <span className="text-right">₹{cartTotalAmount}</span>
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
        <FooterNav setopen={() => setopen(!open)} />

      </div>

    </div>
  )
}

export default Cart

