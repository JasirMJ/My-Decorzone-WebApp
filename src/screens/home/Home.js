// import './App.css';
import React, { useState, useContext, useEffect } from 'react'
import Header from '../../components/Header'
import CartComponent from '../../components/CartComponent';
import MainSlider from './components/MainSlider';
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
import { baseurl, protocol, AppContext } from '../../common/Constants'
import NoData from '../NoData/noData';
import Preloader from '../../components/Preloader';

function Home() {
  const [open, setopen] = useState(false)

  const [popular, setpopular] = useState([])
  const [is_new, setis_new] = useState([])
  const [is_recommended, setis_recommended] = useState([])
  const [Brands, setBrands] = useState([]);
  const [loading, setloading] = useState(true)
  const [banners, sebanners] = useState([])


  useEffect(() => {
    getPopularProducts()
    getNewProducts()
    getRecommenderProducts()
    GetBrandsLogos()
    getBanners()
  }, [])

  const getPopularProducts = () => {
    var axios = require('axios');
    var config = {
      method: 'get',
      url: baseurl + '/items/items/?ordering=?&pagination=false&is_popular=true',
      headers: {}
    };

    axios(config)
      .then(function (response) {
        setpopular(response.data)
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const getNewProducts = () => {
    var axios = require('axios');
    var config = {
      method: 'get',
      url: baseurl + '/items/items/?ordering=?&pagination=false&is_new=true',
      headers: {}
    };

    axios(config)
      .then(function (response) {
        setis_new(response.data)
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const getRecommenderProducts = () => {
    var axios = require('axios');
    var config = {
      method: 'get',
      url: baseurl + '/items/items/?ordering=?&pagination=false&is_recommended=true',
      headers: {}
    };

    axios(config)
      .then(function (response) {
        setis_recommended(response.data)
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const getBanners = () => {
    var axios = require('axios');
    var FormData = require('form-data');
    var data = new FormData();

    var config = {
      method: 'get',
      url: baseurl + '/landing/banners/',
      headers: {
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(response.data)
        setloading(false)
        if (response.data.results) {
          sebanners(response.data.results)
        }
      })
      .catch(function (error) {
        console.log(error);
        setloading(false)
      });

  }

  const GetBrandsLogos = () => {
    var axios = require('axios');
    // var FormData = require('form-data');
    // var data = new FormData();
    // data.append('name', 'test');

    var config = {
      method: 'get',
      url: baseurl + '/items/brand/',
      // headers: {

      // },
      // data: data
    };

    axios(config)
      .then(function (response) {
        console.log("BRANDS",response.data);
        setBrands(response.data.results)
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <>
      {/* <div id="ec-overlay"><span className="loader_img" /></div> */}
      {/* Header start  */}
      <Header open={open} setopen={() => setopen(!open)} />
      {/* Header End  */}

      {
                  loading ?
                      <Preloader/>
                      :
                   <>
      {/* Main Slider Start */}
      <MainSlider banners={banners} />
      {/* Main Slider End */}

      {/* Product tab Area Start */}
      {/* <ProductTabArea/> */}
      {
        popular.length > 0 &&
        <NewProduct
          title={"Our Top Popular Products"}
          subtitle={"Browse The Collection of Top Popular Products"}
          Data={popular}
        />
      }

      {
        is_new.length > 0 &&
        <NewProduct
          title={"Our Top New Products"}
          subtitle={"Browse The Collection of Top New Products"}
          Data={is_new}
        />
      }

      {
        is_recommended.length > 0 &&
        <NewProduct
          title={"Our Top Recommended Products"}
          subtitle={"Browse The Collection of Top Recommended Products"}
          Data={is_recommended}
        />
      }

      {/* ec Product tab Area End */}

      {/* ec Banner Section Start */}
      {/* <BannerSection /> */}
      {/* ec Banner Section End */}

      {/*  Category Section Start */}
      <CategorySection />
      {/* Category Section End */}

      {/*  Feature & Special Section Start */}
      {/* <FeatureSection /> */}
      {/* Feature & Special Section End */}

      {/*  services Section Start */}
      {/* <ServiceSection /> */}
      {/*services Section End */}

      {/*  offer Section Start */}
      {/* <OfferSection /> */}
      {/* offer Section End */}
      {/* New Product Start */}
      {/* <NewProduct
        title={"New Arrivals"}
        subtitle={"Browse The Collection of Top Products"}
        Data={[{}, {}, {}, {}, {}, {}, {}, {}]}
      /> */}
      {/* New Product end */}
      {/* ec testmonial Start */}
      {/* <Testimonial /> */}
      {/* ec testmonial end */}
      {/* Ec Brand Section Start */}
      {/* <BrandSection /> */}
      {/* Ec Brand Section End */}
      {/* Ec Instagram Start */}

      

    

   

      </>
      }
  
  {
    
    <InstagramSection brands={Brands} />
  }

  <div className="row">
            <div className="col-md-12 text-center"
            ><div className="section-title">
                <h2 className="ec-bg-title">My Decorzone</h2>
                <h2 className="ec-title">My Decorzone</h2>
                <p style={{marginHorizontal:'140px'}} className="sub-title">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type spinter took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
              </div>
            </div>
          </div>

         {/* Ec Instagram End */}
      {/* Footer Start */}
      <Footer />
      {/* Footer Area End */}

      {/* Modal */}
      <TemplateModal />
      {/* Modal end */}
      {/* Newsletter Modal Start */}
      {/* <Newsletter/> */}
      {/* Newsletter Modal end */}

      {/* Footer navigation panel for responsive display */}
      <FooterNav setopen={() => setopen(!open)} />
      {/* Footer navigation panel for responsive display end */}

      {/* Recent Purchase Popup  */}
      {/* Recent Purchase Popup end */}
      {/* Cart Floating Button */}
      {/* <CartFloatingButton/> */}
      {/* Cart Floating Button end */}
      {/* Whatsapp */}
      {/* <WhatsappButton/> */}
      {/* Whatsapp end */}
      {/* Feature tools */}
      {/* <FeatureTools/> */}
      {/* Feature tools end */}


    </>
  );
}

export default Home;
