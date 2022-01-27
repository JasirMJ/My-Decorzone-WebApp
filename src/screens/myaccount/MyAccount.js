import React, { useState , useContext , useEffect } from 'react'
import SideCard from './components/SideCard'

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
import user from '../../assets/images/user.png'


const MyAccount = () => {
  const [open, setopen] = useState(false)

  const { userToken , userDetails } = useContext(AppContext)

  console.log({userDetails});

  return (
    <div>
      <div>
        <div id="ec-overlay"><span className="loader_img" /></div>
        <Header open={open} setopen={() => setopen(!open)} />
        {/* ekka Cart Start */}
        <div className="ec-side-cart-overlay" />

        {/* ekka Cart End */}
        {/* Ec breadcrumb start */}

        {/* Ec breadcrumb end */}
        {/* User history section */}
        <section className="ec-page-content ec-vendor-uploads ec-user-account section-space-p">
          <div className="container">
            <div className="row">
              {/* Sidebar Area Start */}
              <SideCard />
              {
                userDetails &&
                <div className="ec-shop-rightside col-lg-9 col-md-12">
                <div className="ec-vendor-dashboard-card ec-vendor-setting-card">
                  <div className="ec-vendor-card-body">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="ec-vendor-block-profile">
                          <div className="ec-vendor-block-img space-bottom-30">
                            <div className="ec-vendor-block-bg">
                              <a href="#" className="btn btn-lg btn-primary" data-link-action="editmodal" title="Edit Detail" data-bs-toggle="modal" data-bs-target="#edit_modal">Edit Detail</a>
                            </div>
                            <div className="ec-vendor-block-detail">
                              <img className="v-img" src={user} alt="vendor image" />
                              <h5 className="name">{userDetails.first_name}</h5>
                              {/* <p>( Business Man )</p> */}
                            </div>
                            <p>Hello <span>{userDetails.first_name}</span></p>
                            <p>From your account you can easily view and track orders. You can manage and change your account information like address, contact information and history of orders.</p>
                          </div>
                          <h5>Account Information</h5>
                          <div className="row">
                            <div className="col-md-6 col-sm-12">
                              <div className="ec-vendor-detail-block ec-vendor-block-email space-bottom-30">
                                <h6>E-mail address <a href="javasript:void(0)" data-link-action="editmodal" title="Edit Detail" data-bs-toggle="modal" data-bs-target="#edit_modal"><img src="assets/images/icons/edit.svg" className="svg_img pro_svg" alt="edit" /></a></h6>
                                <ul>
                                  <li><strong>Email 1 : </strong><a  className="__cf_email__" data-cfemail="1a696f6a6a75686e2b5a7f627b6a77767f34797577">{userDetails.email}</a></li>
                                  {/* <li><strong>Email 2 : </strong><a href="https://loopinfosol.in/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="b5c6c0c5c5dac7c187f5d0cdd4c5d8d9d09bd6dad8">[email&nbsp;protected]</a></li> */}
                                </ul>
                              </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                              <div className="ec-vendor-detail-block ec-vendor-block-contact space-bottom-30">
                                <h6>Contact nubmer<a href="javasript:void(0)" data-link-action="editmodal" title="Edit Detail" data-bs-toggle="modal" data-bs-target="#edit_modal"><img src="assets/images/icons/edit.svg" className="svg_img pro_svg" alt="edit" /></a></h6>
                                <ul>
                                  <li><strong>Phone Nubmer 1 : </strong>{userDetails.mobile}</li>
                                  {/* <li><strong>Phone Nubmer 2 : </strong>(123) 123 456 7890</li> */}
                                </ul>
                              </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                              <div className="ec-vendor-detail-block ec-vendor-block-address mar-b-30">
                                <h6>Address<a href="javasript:void(0)" data-link-action="editmodal" title="Edit Detail" data-bs-toggle="modal" data-bs-target="#edit_modal"><img src="assets/images/icons/edit.svg" className="svg_img pro_svg" alt="edit" /></a></h6>
                                <ul>
                                  <li><strong>Home : </strong>123, 2150 Sycamore Street, dummy text of
                                    the, San Jose, California - 95131.</li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                              <div className="ec-vendor-detail-block ec-vendor-block-address">
                                <h6>Shipping Address<a href="javasript:void(0)" data-link-action="editmodal" title="Edit Detail" data-bs-toggle="modal" data-bs-target="#edit_modal"><img src="assets/images/icons/edit.svg" className="svg_img pro_svg" alt="edit" /></a></h6>
                                <ul>
                                  <li><strong>Office : </strong>123, 2150 Sycamore Street, dummy text of
                                    the, San Jose, California - 95131.</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              }

            </div>
          </div>
        </section>
        <Footer />
        <FooterNav setopen={() => setopen(!open)} />
        {/* End User history section */}
      </div>

    </div>
  )
}

export default MyAccount
