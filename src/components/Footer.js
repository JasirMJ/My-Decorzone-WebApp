import React, { useContext } from 'react'
import Logo from '../assets/images/logo.png'
import { AppContext, version } from '../common/Constants'
import Context from '../common/Context'

function Footer() {
  const {AdminMobile, AdminMail} = useContext(AppContext)
  return (
    <>

      <footer className="ec-footer section-space-mt">
        <div className="footer-container">
          <div className="footer-offer">
            <div className="container">
              <div className="row">

              </div>
            </div>
          </div>
          <div className="footer-top section-space-footer-p">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-lg-2 ec-footer-contact">
                  <div className="ec-footer-widget">
                    <div className="ec-footer-logo"><a href="#"><img src={Logo} alt /><img className="dark-footer-logo" src="assets/images/logo/dark-logo.png" alt="Site Logo" style={{ display: 'none' }} /></a></div>

                  </div>
                </div>
                <div className="col-sm-12 col-lg-3 ec-footer-info my-3">
                  <div className="ec-footer-widget">
                    <h4 className="ec-footer-heading">Contact us</h4>
                    {/* <div class="ec-heading-res"><i class="ecicon eci-angle-down"></i></div> */}
                    <div className="ec-footer-links">
                      <ul className="align-items-center">
                        <li className="ec-footer-link">57 13th Cross, Baldwins Road, Koramangala, Bengaluru, Karnataka 560030</li>
                        <li className="ec-footer-link"><span>Call Us:</span><a href={'tel:91'+AdminMobile}>{AdminMobile}</a></li>
                        <li className="ec-footer-link"><span>Email:</span><a ><span className="__cf_email__" >{AdminMail}</span></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-2 ec-footer-info my-3">
                  <div className="ec-footer-widget">
                    <h4 className="ec-footer-heading">Information</h4>
                    <div className="ec-footer-links">
                      <ul className="align-items-center">

                        <li className="ec-footer-link"><a href="/termsandcondition.html">Terms & Conditions</a></li>
                        <li className="ec-footer-link"><a href="/privacypolicy.html">Privacy Policy</a></li>
                        <li className="ec-footer-link"><a href="/Returnpolicymydecorzon.html">Return policy </a></li>
                        <li className="ec-footer-link"><a href="/Deliveryandshippingpolicy.html">Delivery and shipping policy</a></li>
                        <li className="ec-footer-link"><a href="/CancellationsandModificationsPolicy.html">Cancellations and Modifications Policy</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-2 ec-footer-account my-3">
                  <div className="ec-footer-widget">
                    <h4 className="ec-footer-heading">Account</h4>
                    <div className="ec-footer-links">
                      <ul className="align-items-center">
                        <li className="ec-footer-link"><a href="/myaccount">My Account</a></li>
                        <li className="ec-footer-link"><a href="/myorders">Order History</a></li>
                        <li className="ec-footer-link"><a href="/about">About us</a></li>
                        <li className="ec-footer-link"><a href="/contactus">Contact us</a></li>

                        {/* <li className="ec-footer-link"><a href="/cart">Cart</a></li> */}
                        {/* <li className="ec-footer-link"><a href="/offers">Offers</a></li> */}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-2 ec-footer-service my-3">
                  <div className="ec-footer-widget">
                    <h4 className="ec-footer-heading">Services</h4>
                    <div className="ec-footer-links">
                      <ul className="align-items-center">
                        <li className="ec-footer-link"><a href="track-order.html">Products</a></li>
                        <li className="ec-footer-link"><a href="privacy-policy.html">Categories</a></li>
                        {/* <li className="ec-footer-link"><a href="terms-condition.html">Customer Service</a></li>
                        <li className="ec-footer-link"><a href="terms-condition.html">Term &amp; condition</a>
                        </li> */}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-3 ec-footer-news my-3">
                  <div className="ec-footer-widget">
                    <div className="ec-footer-links">


                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container">
              <div className="row align-items-center">
                {/* Footer social Start */}

                {/* Footer social End */}
                {/* Footer Copyright Start */}
                <div className="col text-center footer-copy">
                  <div className="footer-bottom-copy ">
                    <div className="ec-copy">Copyright © 2022 My Decorzone. All Rights Reserved . Version {version}</div>
                  </div>
                </div>
                {/* Footer Copyright End */}
                {/* Footer payment */}

                {/* Footer payment */}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
