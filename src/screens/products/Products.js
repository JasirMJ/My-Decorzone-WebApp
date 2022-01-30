import React, { useState, useContext, useEffect } from 'react'
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
import GridProduct from '../../components/GridProduct'
import { baseurl, protocol, AppContext } from '../../common/Constants'
import Preloader from '../../components/Preloader';
import NoData from '../NoData/noData';



const Products = () => {
  const [open, setopen] = useState(false)
  const [prodcuts, setprodcuts] = useState([])
  const [loading, setloading] = useState(true)


  const [next, setNext] = useState(null);
  const [prev, setPrev] = useState(null);
  const { userToken, serachText } = useContext(AppContext)

  useEffect(() => {
    getproduct()
  }, [serachText])

  let param = serachText

  const getproduct = () => {
    var axios = require('axios');

    var config = {
      method: 'get',
      url: baseurl + '/items/items/?ordering=?&' + `search=${param}`,
      headers: {}
    };

    axios(config)
      .then(function (response) {
        setloading(false)
        console.log('prdts', response);
        setprodcuts(response.data.results)
        setNext(response.data.next);
        setPrev(response.data.previous);
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  const handlePrev = () => {
    // alert("prev");
    var axios = require('axios');
    var config = {
      method: "get",
      url: prev.replace("http:", protocol.replace('//', "")) + `&search=${param}`,
      // url: prev + "/?" + params,

      headers: {
      },
    };
    // console.log("Caed previousssssssssssssssss ", prev);
    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data.results));
        setprodcuts(response.data.results);
        setNext(response.data.next);
        setPrev(response.data.previous);
      })
      .catch(function (error) {
        // console.log(error);
      });
  };

  const handleNext = () => {
    var axios = require('axios');
    // alert("next")
    var config = {
      method: "get",
      url: next.replace("http:", protocol.replace('//', "")) + `&search=${param}`,
      // url: next + "/?" + params,

      headers: {
      },
    };
    // console.log(config.url)
    axios(config)
      .then(function (response) {
        // console.log((response));
        setprodcuts(response.data.results);
        setNext(response.data.next);
        setPrev(response.data.previous);
      })
      .catch(function (error) {
        // console.log(error);
      });
  };

  return (
    <div>
      <div>
        <div id="ec-overlay"><span className="loader_img" /></div>
        {/* ekka Cart Start */}
        <Header open={open} setopen={() => setopen(!open)} />

        <div className="ec-side-cart-overlay" />

        {/* Ec Shop page */}
        <section className="ec-page-content section-space-p">
          <div className="container">
            <div className="row">
              <div className="ec-shop-rightside col-lg-12 col-md-12">

                {/* Shop content Start */}
                <div className="shop-pro-content">
                  <div className="shop-pro-inner">
                    {
                      loading ?
                        <Preloader />
                        :
                        prodcuts.length != 0 ?
                          <>

                            <div className="row">
                              {
                                prodcuts.map((item, index) => {
                                  return <GridProduct key={index} Data={item} />
                                })
                              }
                            </div>
                          </>
                          :
                          <div className='d-flex justify-content-center'>
                            <NoData text={'No data found'} url={'/'} buttonName={'Return to Home '} />
                          </div>
                    }
                  </div>
                  {/* Ec Pagination Start */}
                  <div className="ec-pro-pagination">
                    <span></span>
                    <ul className="ec-pro-pagination-inner">
                      {
                        prev != null &&
                        <li><a className="next" href="#" onClick={() => { handlePrev() }}><i className="ecicon eci-angle-left" /> Previous</a></li>
                      }

                      {
                        next != null &&
                        <li><a className="next" href="#" onClick={() => { handleNext() }}>Next <i className="ecicon eci-angle-right" /></a></li>
                      }
                    </ul>
                  </div>
                  {/* Ec Pagination End */}
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
      <Footer />
      {/* Footer navigation panel for responsive display */}
      <FooterNav setopen={() => setopen(!open)} />

    </div>
  )
}

export default Products
