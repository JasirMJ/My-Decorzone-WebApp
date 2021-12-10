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

const Register = () => {
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
          <h2 className="ec-bg-title">Register</h2>
          <h2 className="ec-title">Register</h2>
          <p className="sub-title mb-3">Best place to buy and sell digital products</p>
        </div>
      </div>
      <div className="ec-register-wrapper">
        <div className="ec-register-container">
          <div className="ec-register-form">
            <form action="#" method="post">
              <span className="ec-register-wrap ec-register-half">
                <label>First Name*</label>
                <input type="text" name="firstname" placeholder="Enter your first name" required />
              </span>
              <span className="ec-register-wrap ec-register-half">
                <label>Last Name*</label>
                <input type="text" name="lastname" placeholder="Enter your last name" required />
              </span>
              <span className="ec-register-wrap ec-register-half">
                <label>Email*</label>
                <input type="email" name="email" placeholder="Enter your email add..." required />
              </span>
              <span className="ec-register-wrap ec-register-half">
                <label>Phone Number*</label>
                <input type="text" name="phonenumber" placeholder="Enter your phone number" required />
              </span>
              <span className="ec-register-wrap">
                <label>Address</label>
                <input type="text" name="address" placeholder="Address Line 1" />
              </span>
              <span className="ec-register-wrap ec-register-half">
                <label>City *</label>
                <span className="ec-rg-select-inner">
                  <select name="ec_select_city" id="ec-select-city" className="ec-register-select">
                    <option selected disabled>City</option>
                    <option value={1}>City 1</option>
                    <option value={2}>City 2</option>
                    <option value={3}>City 3</option>
                    <option value={4}>City 4</option>
                    <option value={5}>City 5</option>
                  </select>
                </span>
              </span>
              <span className="ec-register-wrap ec-register-half">
                <label>Post Code</label>
                <input type="text" name="postalcode" placeholder="Post Code" />
              </span>
              <span className="ec-register-wrap ec-register-half">
                <label>Country *</label>
                <span className="ec-rg-select-inner">
                  <select name="ec_select_country" id="ec-select-country" className="ec-register-select">
                    <option selected disabled>Country</option>
                    <option value={1}>Country 1</option>
                    <option value={2}>Country 2</option>
                    <option value={3}>Country 3</option>
                    <option value={4}>Country 4</option>
                    <option value={5}>Country 5</option>
                  </select>
                </span>
              </span>
              <span className="ec-register-wrap ec-register-half">
                <label>Region State</label>
                <span className="ec-rg-select-inner">
                  <select name="ec_select_state" id="ec-select-state" className="ec-register-select">
                    <option selected disabled>Region/State</option>
                    <option value={1}>Region/State 1</option>
                    <option value={2}>Region/State 2</option>
                    <option value={3}>Region/State 3</option>
                    <option value={4}>Region/State 4</option>
                    <option value={5}>Region/State 5</option>
                  </select>
                </span>
              </span>
              <span className="ec-register-wrap ec-recaptcha">
                <span className="g-recaptcha" data-sitekey="6LfKURIUAAAAAO50vlwWZkyK_G2ywqE52NU7YO0S" data-callback="verifyRecaptchaCallback" data-expired-callback="expiredRecaptchaCallback" />
                <input className="form-control d-none" data-recaptcha="true" required data-error="Please complete the Captcha" />
                <span className="help-block with-errors" />
              </span>
              <span className="ec-register-wrap ec-register-btn">
                <button className="btn btn-primary" type="submit">Register</button>
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

export default Register

