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
import {setDataOnCookie} from '../../common/Functions'

const Login = () => {

  const { userToken , localStorageName , setUserToken } = useContext(AppContext)

  const [username, setusername] = useState("adsalihac")
  const [password, setpassword] = useState("123123")

  const login = () => {
    // alert("ok")
    var axios = require('axios');
    var FormData = require('form-data');
    var data = new FormData();
    data.append('username', username);
    data.append('password', password);

    var config = {
      method: 'post',
      url: 'https://api.mydecorzone.com/users/login/',
      headers: { 
      },
      data : data
    };

    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      if (response.data.Status === true) {
        setUserToken(response.data.token)
        setDataOnCookie(localStorageName, response.data);
        window.location.replace('/')
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
                <span className="ec-login-wrap">
                  <label>Email Address*</label>
                  <input type="text" value={username} name="name" placeholder="Enter your email add..." required />
                </span>
                <span className="ec-login-wrap">
                  <label>Password*</label>
                  <input type="password" value={password} name="password" placeholder="Enter your password" required />
                </span>
                {/* <span className="ec-login-wrap ec-login-fp">
                  <label><a href="#">Forgot Password?</a></label>
                </span> */}
                <span className="ec-login-wrap ec-login-btn">
                  {/* <a href={()=>login()} className="btn btn-primary">Login</a> */}
                  <button  onClick={(e) => login(e)} className="btn btn-primary" >Login</button>
                  <a href="/register"  className="btn btn-secondary" type="submit">Register</a>
                </span>
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
