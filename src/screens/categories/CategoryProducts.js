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
import { useContext, useEffect, useState } from 'react';
import { baseurl, protocol, AppContext } from '../../common/Constants'
import Preloader from '../../components/Preloader';
import { useParams } from 'react-router-dom';
import NoData from '../NoData/noData';

const CategoryProducts = () => {
  const [open, setopen] = useState(false)

  const [loading, setloading] = useState(true)

  const [next, setNext] = useState(null);
  const [prev, setPrev] = useState(null);

  const { id } = useParams()
  const [Data, setData] = useState([]);

  const [nodata, setnodata] = useState(false);

  useEffect(() => {
    getCategoryProducts()
  }, [])

  const getCategoryProducts = () => {
    var axios = require('axios');
    var FormData = require('form-data');
    var data = new FormData();

    var config = {
      method: 'get',
      url: baseurl + '/items/items/?category=' + id,
      headers: {
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(response);
        setloading(false)
        if (response.data.results.length) {
          setData(response.data.results)
          setNext(response.data.next);
          setPrev(response.data.previous);
          setnodata(false)
        } else {
          // alert('no data')
          setnodata(true)
        }

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
      url: prev.replace("http:", protocol.replace('//', "")),
      // url: prev + "/?" + params,

      headers: {
      },
    };
    // console.log("Caed previousssssssssssssssss ", prev);
    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data.results));
        setData(response.data.results);
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
      url: next.replace("http:", protocol.replace('//', "")),
      // url: next + "/?" + params,

      headers: {
      },
    };
    // console.log(config.url)
    axios(config)
      .then(function (response) {
        // console.log((response));
        setData(response.data.results);
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
        {/* <div id="ec-overlay"><span className="loader_img" /></div> */}
        {/* ekka Cart Start */}
        <Header open={open} setopen={() => setopen(!open)} />

        <div className="ec-side-cart-overlay" />

        {/* Ec Shop page */}
        {!nodata ?
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
                          Data.length != 0 &&
                          <div className="row">
                            {
                              Data.map((item, index) => {
                                return <GridProduct key={index} Data={item} />
                              })
                            }
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
          :
          <div className='d-flex justify-content-center'>
            <NoData text={'No data found'} url={'/categories'} buttonName={'Return to categories '} />
          </div>
        }
      </div>
      <Footer />
      {/* Footer navigation panel for responsive display */}
      <FooterNav setopen={() => setopen(!open)} />

    </div>
  )
}

export default CategoryProducts
