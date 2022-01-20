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
import {setDataOnCookie , showMessage} from '../../common/Functions'

const Register = () => {

  const { userToken , localStorageName , setUserToken } = useContext(AppContext)

  const [data, setData] = useState({
    name: "",
    password: "",
    mobile: "",
    username: '',
    email: "",
  });

  const register = () => {
      var axios = require('axios');
      var FormData = require('form-data');
      var fdata = new FormData();
      fdata.append('first_name', data.name);
      fdata.append('password', data.password);
      fdata.append('mobile', data.mobile);
      fdata.append('username', data.username);
      fdata.append('email', data.email);
      
      var config = {
        method: 'post',
        url: baseurl + '/users/',
        headers: { 
       
        },
        data : fdata
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
          setUserToken(response.data.token)
          setDataOnCookie(localStorageName, response.data);
          window.location.replace('/')
      })
      .catch(function (error) {
        console.log(error);
        showMessage(
          "Login Failed , Check Username / Password",
          "danger",
          "Loading error",
          "top",
          "top-right",
          0
        );
      });
  }

  const onChangeFun = (e) => {
    console.log("Target ", e.target)
    let field_name = e.target.name

    if (field_name === "is_active") {
        console.log("Check box : " + field_name + " - " + e.target.checked);
        setData({ ...data, [e.target.name]: e.target.checked })
    } else {
        setData({ ...data, [e.target.name]: e.target.value })
    }
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
          <h2 className="ec-bg-title">Register</h2>
          <h2 className="ec-title">Register</h2>
          <p className="sub-title mb-3">Best place to buy and sell digital products</p>
        </div>
      </div>
      <div className="ec-register-wrapper">
        <div className="ec-register-container">
          <div className="ec-register-form">
              <span className="ec-register-wrap ec-register-half">
                <label>Name*</label>
                <input type="text" name="name" value={data.name} onChange={(e) => onChangeFun(e)}  placeholder="Enter your name" required />
              </span>

              <span className="ec-register-wrap ec-register-half">
                <label>Username*</label>
                <input type="text" name="username" value={data.username} onChange={(e) => onChangeFun(e)}  placeholder="Enter your username" required />
              </span>
            
              <span className="ec-register-wrap ec-register-half">
                <label>Email*</label>
                <input type="email" name="email" value={data.email} onChange={(e) => onChangeFun(e)}  placeholder="Enter your email" required />
              </span>
              
              <span className="ec-register-wrap ec-register-half">
                <label>Phone Number*</label>
                <input type="number" name="mobile" value={data.mobile}  onChange={(e) => onChangeFun(e)}  placeholder="Enter your phone number" required />
              </span>

              <span className="ec-register-wrap ec-register-half">
                <label>Password*</label>
                <input type="text" name="password" value={data.password} onChange={(e) => onChangeFun(e)}   placeholder="Enter your password" required />
              </span>
             
           
             
              <span className="ec-register-wrap ec-register-btn">
              <button  onClick={(e) => register(e)} className="btn btn-primary" >Register</button>
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

export default Register

