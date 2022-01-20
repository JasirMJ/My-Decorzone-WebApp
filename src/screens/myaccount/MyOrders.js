import { useState } from 'react';

import React from 'react'
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

const MyOrders = () => {

  const [open, setopen] = useState(false)


    return (
        <div>
          <div>
            <div id="ec-overlay"><span className="loader_img" /></div>
            <Header />
            {/* ekka Cart Start */}
            <div className="ec-side-cart-overlay" />
      
            <section className="ec-page-content ec-vendor-uploads ec-user-account section-space-p">
              <div className="container">
                <div className="row">
                  {/* Sidebar Area Start */}
             <SideCard/>
             <div className="ec-shop-rightside col-lg-9 col-md-12">
                <div className="ec-vendor-dashboard-card">
                    <div className="ec-vendor-card-header">
                    <h5>My Orders</h5>
                    {/* <div className="ec-header-btn">
                        <a className="btn btn-lg btn-primary" href="#">Shop Now</a>
                    </div> */}
                    </div>
                    <div className="ec-vendor-card-body">
                    <div className="ec-vendor-card-table">
                        <table className="table ec-table">
                        <thead>
                            <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Image</th>
                            <th scope="col">Name</th>
                            <th scope="col">Date</th>
                            <th scope="col">Price</th>
                            <th scope="col">Status</th>
                            <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row"><span>225</span></th>
                            <td><img className="prod-img" src="assets/images/product-image/1.jpg" alt="product image" /></td>
                            <td><span>Stylish baby shoes</span></td>
                            <td><span>16 Jul 2021-2022</span></td>
                            <td><span>$65</span></td>
                            <td><span>Active</span></td>
                            <td><span className="tbl-btn"><a className="btn btn-lg btn-primary" href="/orderdetails">View</a></span></td>
                            </tr>
                            <tr>
                            <th scope="row"><span>548</span></th>
                            <td><img className="prod-img" src="assets/images/product-image/2.jpg" alt="product image" /></td>
                            <td><span>Sweat Pullover Hoodie</span></td>
                            <td><span>13 Aug 2016</span></td>
                            <td><span>$68</span></td>
                            <td><span>On Hold</span></td>
                            <td><span className="tbl-btn"><a className="btn btn-lg btn-primary" href="/orderdetails">View</a></span></td>
                            </tr>
                            <tr>
                            <th scope="row"><span>684</span></th>
                            <td><img className="prod-img" src="assets/images/product-image/3.jpg" alt="product image" /></td>
                            <td><span>T-shirt for girl</span></td>
                            <td><span>20 Jul 2015</span></td>
                            <td><span>$360</span></td>
                            <td><span>On Hold</span></td>
                            <td><span className="tbl-btn"><a className="btn btn-lg btn-primary" href="/orderdetails">View</a></span></td>
                            </tr>
                            <tr>
                            <th scope="row"><span>987</span></th>
                            <td><img className="prod-img" src="assets/images/product-image/4.jpg" alt="product image" /></td>
                            <td><span>Wool hat for men</span></td>
                            <td><span>05 Feb 2014</span></td>
                            <td><span>$584</span></td>
                            <td><span>On Hold</span></td>
                            <td><span className="tbl-btn"><a className="btn btn-lg btn-primary" href="/orderdetails">View</a></span></td>
                            </tr>
                            <tr>
                            <th scope="row"><span>225</span></th>
                            <td><img className="prod-img" src="assets/images/product-image/5.jpg" alt="product image" /></td>
                            <td><span>Women leather purse</span></td>
                            <td><span>23 Jul 2013</span></td>
                            <td><span>$65</span></td>
                            <td><span>On Hold</span></td>
                            <td><span className="tbl-btn"><a className="btn btn-lg btn-primary" href="#">View</a></span></td>
                            </tr>
                            <tr>
                            <th scope="row"><span>548</span></th>
                            <td><img className="prod-img" src="assets/images/product-image/6.jpg" alt="product image" /></td>
                            <td><span>Doctor kit toy</span></td>
                            <td><span>28 Mar 2011</span></td>
                            <td><span>$68</span></td>
                            <td><span>Disabled</span></td>
                            <td><span className="tbl-btn"><a className="btn btn-lg btn-primary" href="#">View</a></span></td>
                            </tr>
                            <tr>
                            <th scope="row"><span>684</span></th>
                            <td><img className="prod-img" src="assets/images/product-image/7.jpg" alt="product image" /></td>
                            <td><span>Teddy bear for baby</span></td>
                            <td><span>16 Apr 2010</span></td>
                            <td><span>$360</span></td>
                            <td><span>On Hold</span></td>
                            <td><span className="tbl-btn"><a className="btn btn-lg btn-primary" href="#">View</a></span></td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    </div>
                </div>
                </div>

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

export default MyOrders
