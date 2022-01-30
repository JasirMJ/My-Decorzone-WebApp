import { useContext, useEffect, useState } from 'react';

import React from 'react'
import SideCard from './components/SideCard'
import Preloader from '../../components/Preloader';
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
import { AppContext, baseurl } from '../../common/Constants';
import { Link } from 'react-router-dom';
import NoData from '../NoData/noData';

const MyOrders = () => {

  const [open, setopen] = useState(false)
  const [data, setdata] = useState([]);
  const { userToken } = useContext(AppContext);
  const [loading, setloading] = useState(true)

  useEffect(() => {
    Getdata()
  }, []);


  const Getdata = () => {
    var axios = require('axios');
    var FormData = require('form-data');
    var data = new FormData();

    var config = {
      method: 'get',
      url: baseurl + '/order/?ordering=-id',
      headers: {
        'Authorization': userToken,
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        setloading(false)


        if (response.data.results) {
          setdata(response.data.results)
        }
      })
      .catch(function (error) {
        console.log(error);
        setloading(false)

      });

  }

  console.log({ data });

  return (
    <div>
      <div>
        {/* <div id="ec-overlay"><span className="loader_img" /></div> */}
        <Header />
        {/* ekka Cart Start */}
        <div className="ec-side-cart-overlay" />

        <section className="ec-page-content ec-vendor-uploads ec-user-account section-space-p">
          <div className="container">
            <div className="row">
              {/* Sidebar Area Start */}
              <SideCard />
              <div className="ec-shop-rightside col-lg-9 col-md-12">
                <div className="ec-vendor-dashboard-card">
                  <div className="ec-vendor-card-header">
                    <h5>My Orders</h5>
                    {/* <div className="ec-header-btn">
                        <a className="btn btn-lg btn-primary" href="#">Shop Now</a>
                    </div> */}
                  </div>
                  {
                      loading ?
                      <Preloader/>
                      :
                      data.length == 0 ?
                   <div className='d-flex justify-content-center'>
                    <NoData />
                  </div>
                  :
                  <div className="ec-vendor-card-body">
                    <div className="ec-vendor-card-table">
                      <table className="table ec-table">
                        <thead>
                          <tr>
                            <th scope="col">ID</th>
                            {/* <th scope="col">Image</th> */}
                            {/* <th scope="col">Name</th> */}
                            <th scope="col">Date</th>
                            <th scope="col">Price</th>
                            <th scope="col">Status</th>
                            <th scope="col">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {data.map(item => (

                            <tr>
                              <th scope="row"><span>{item.id}</span></th>
                              {/* <td><img className="prod-img" src="assets/images/product-image/1.jpg" alt="product image" /></td> */}
                              {/* <td><span>Stylish baby shoes</span></td> */}
                              <td><span>{item.date.slice(0, 10)}</span></td>
                              <td><span>{item.net_amount}</span></td>
                              <td><span>{item.status.replaceAll('_',' ')}</span></td>
                              <td><span className="tbl-btn"><Link className="btn btn-lg btn-primary" to={`/orderdetails/${item.id}`}>View</Link></span></td>
                            </tr>
                          ))}

                        </tbody>
                      </table>
                    </div>
                  </div>
                  }
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
