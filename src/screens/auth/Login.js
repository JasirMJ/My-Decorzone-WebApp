import React, { useState , useContext , useEffect } from 'react'
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
import {baseurl , protocol , AppContext} from '../../common/Constants'
import {setDataOnCookie , showMessage} from '../../common/Functions'

const Login = () => {

  const { userToken , localStorageName , setUserToken } = useContext(AppContext)

  const [open, setopen] = useState(false)
  const [data, setData] = useState({
    username: "adsalihac",
    password: "123123",
  });

  const login = () => {
    // alert("ok")
    var axios = require('axios');
    var FormData = require('form-data');
    var fdata = new FormData();
    fdata.append('username', data.username);
    fdata.append('password', data.password);

    var config = {
      method: 'post',
      url: baseurl + '/users/login/',
      headers: { 
      },
      data : fdata
    };

    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      if (response.data.Status === true) {
        setUserToken(response.data.token)
        setDataOnCookie(localStorageName, response.data);
        window.location.replace('/')
      } else {
        showMessage(
          "Login Failed , Check Username / Password",
          "danger",
          "Loading error",
          "top",
          "top-right",
          0
        );
      }
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
  <Header open={open} setopen={() => setopen(!open)} />
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
                  <input type="text" value={data.username} onChange={(e) => onChangeFun(e)} name="username" placeholder="Enter your username" required />
                </span>
                <span className="ec-login-wrap">
                  <label>Password*</label>
                  <input type="password"  value={data.password} onChange={(e) => onChangeFun(e)} name="password" placeholder="Enter your password" required />
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
  <FooterNav setopen={() => setopen(!open)} />


</div>

        </div>
    )
}

export default Login
