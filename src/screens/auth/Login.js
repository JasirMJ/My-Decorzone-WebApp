import React from 'react'

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

const Login = () => {
    return (
        <div>
<div>
  {/* ekka Cart Start */}
  <div className="ec-side-cart-overlay" />
  <Header />
  {/* ekka Cart End */}
  {/* Ec breadcrumb start */}
 
  {/* Ec breadcrumb end */}
  {/* Ec login page */}
  <section className="ec-page-content section-space-p">
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <div className="section-title">
            <h2 className="ec-bg-title">Log In</h2>
            <h2 className="ec-title">Log In</h2>
            <p className="sub-title mb-3">Best place to buy and sell digital products</p>
          </div>
        </div>
        <div className="ec-login-wrapper">
          <div className="ec-login-container">
            <div className="ec-login-form">
              <form action="#" method="post">
                <span className="ec-login-wrap">
                  <label>Email Address*</label>
                  <input type="text" name="name" placeholder="Enter your email add..." required />
                </span>
                <span className="ec-login-wrap">
                  <label>Password*</label>
                  <input type="password" name="password" placeholder="Enter your password" required />
                </span>
                <span className="ec-login-wrap ec-login-fp">
                  <label><a href="#">Forgot Password?</a></label>
                </span>
                <span className="ec-login-wrap ec-login-btn">
                  <button className="btn btn-primary" type="submit">Login</button>
                  <a href="register.html" className="btn btn-secondary">Register</a>
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer />

</div>

        </div>
    )
}

export default Login
