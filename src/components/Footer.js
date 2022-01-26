import React from 'react'
import Logo from '../assets/images/logo.png'

function Footer() {
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
                <div className="col-sm-12 col-lg-3 ec-footer-contact">
                  <div className="ec-footer-widget">
                    <div className="ec-footer-logo"><a href="#"><img src={Logo} alt /><img className="dark-footer-logo" src="assets/images/logo/dark-logo.png" alt="Site Logo" style={{ display: 'none' }} /></a></div>
                    <h4 className="ec-footer-heading">Contact us</h4>
                    <div className="ec-footer-links">
                      <ul className="align-items-center">
                        <li className="ec-footer-link">71 Pilgrim Avenue Chevy Chase, east california.</li>
                        <li className="ec-footer-link"><span>Call Us:</span><a href="tel:+440123456789">+44
                          0123 456 789</a></li>
                        <li className="ec-footer-link"><span>Email:</span><a href="https://loopinfosol.in/cdn-cgi/l/email-protection#204558414d504c456045430d454d41494c0e434f4d"><span className="__cf_email__" data-cfemail="240f415c4549544841644147094149454d480a474b49">[email&nbsp;protected]</span></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* <div className="col-sm-12 col-lg-2 ec-footer-info">
                  <div className="ec-footer-widget">
                    <h4 className="ec-footer-heading">Information</h4>
                    <div className="ec-footer-links">
                      <ul className="align-items-center">
                        <li className="ec-footer-link"><a href="about-us.html">About us</a></li>
                        <li className="ec-footer-link"><a href="faq.html">FAQ</a></li>
                        <li className="ec-footer-link"><a href="track-order.html">Delivery Information</a></li>
                        <li className="ec-footer-link"><a href="contact-us.html">Contact us</a></li>
                      </ul>
                    </div>
                  </div>
                </div> */}
                {/* <div className="col-sm-12 col-lg-2 ec-footer-account">
                  <div className="ec-footer-widget">
                    <h4 className="ec-footer-heading">Account</h4>
                    <div className="ec-footer-links">
                      <ul className="align-items-center">
                        <li className="ec-footer-link"><a href="user-profile.html">My Account</a></li>
                        <li className="ec-footer-link"><a href="track-order.html">Order History</a></li>
                        <li className="ec-footer-link"><a href="wishlist.html">Wish List</a></li>
                        <li className="ec-footer-link"><a href="offer.html">Specials</a></li>
                      </ul>
                    </div>
                  </div>
                </div> */}
                {/* <div className="col-sm-12 col-lg-2 ec-footer-service">
                  <div className="ec-footer-widget">
                    <h4 className="ec-footer-heading">Services</h4>
                    <div className="ec-footer-links">
                      <ul className="align-items-center">
                        <li className="ec-footer-link"><a href="track-order.html">Discount Returns</a></li>
                        <li className="ec-footer-link"><a href="privacy-policy.html">Policy &amp; policy </a></li>
                        <li className="ec-footer-link"><a href="terms-condition.html">Customer Service</a></li>
                        <li className="ec-footer-link"><a href="terms-condition.html">Term &amp; condition</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div> */}
                <div className="col-sm-12 col-lg-3 ec-footer-news">
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
                    <div className="ec-copy">Copyright © 2022 My Decorzone. All Rights Reserved</div>
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
