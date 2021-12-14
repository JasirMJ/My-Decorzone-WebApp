import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import CartComponent from './components/CartComponent';
import MainSlider from './components/MainSlider';
import ProductTabArea from './components/ProductTabArea';
import BannerSection from './components/BannerSection';
import CategorySection from './components/CategorySection';
import FeatureSection from './components/FeatureSection';
import ServiceSection from './components/ServiceSection';
import OfferSection from './components/OfferSection';
import NewProduct from './components/NewProduct';
import Testimonial from './components/Testimonial';
import BrandSection from './components/BrandSection';
import InstagramSection from './components/InstagramSection';
import Footer from './components/Footer';
import TemplateModal from './components/TemplateModal';
import Newsletter from './components/Newsletter';
import FooterNav from './components/FooterNav';
import PurchasePopup from './components/PurchasePopup';
import CartFloatingButton from './components/CartFloatingButton';
import WhatsappButton from './components/WhatsappButton';
import FeatureTools from './components/FeatureTools';

import { useState } from 'react';

function App() {
  const [open, setopen] = useState(false)

  const [test, settest] = useState("initialState")



  return (
    <>
      <div id="ec-overlay"><span className="loader_img" /></div>
      {/* Header start  */}
      <Header open={open} />
      {/* Header End  */}
      {/* ekka Cart Start */}
      <CartComponent/>
      {/* ekka Cart End */}

      {/* Main Slider Start */}
      <MainSlider/>
      {/* Main Slider End */}

      {/* Product tab Area Start */}
      <ProductTabArea/>
      {/* ec Product tab Area End */}

      {/* ec Banner Section Start */}
      <BannerSection/>
      {/* ec Banner Section End */}

      {/*  Category Section Start */}
      <CategorySection/>
      {/* Category Section End */}

      {/*  Feature & Special Section Start */}
      <FeatureSection/>
      {/* Feature & Special Section End */}

      {/*  services Section Start */}
      <ServiceSection/>
      {/*services Section End */}

      {/*  offer Section Start */}
      <OfferSection/>
      {/* offer Section End */}
      {/* New Product Start */}
      <NewProduct/>
      {/* New Product end */}
      {/* ec testmonial Start */}
      <Testimonial/>
      {/* ec testmonial end */}
      {/* Ec Brand Section Start */}
      <BrandSection/>
      {/* Ec Brand Section End */}
      {/* Ec Instagram Start */}
      <InstagramSection/>
      {/* Ec Instagram End */}
      {/* Footer Start */}
      <Footer />
      {/* Footer Area End */}

      {/* Modal */}
      <TemplateModal/>
      {/* Modal end */}
      {/* Newsletter Modal Start */}
      <Newsletter/>
      {/* Newsletter Modal end */}

      {/* Footer navigation panel for responsive display */}
      <FooterNav 
      data={"data"}
      // setopen={()=>setopen(!open)}
      testdata = {test}
      clicked={(e)=>{console.log("open ",e)}}
      
      />
      {/* Footer navigation panel for responsive display end */}
      
      {/* Recent Purchase Popup  */}
      <PurchasePopup/>
      {/* Recent Purchase Popup end */}
      {/* Cart Floating Button */}
      <CartFloatingButton/>
      {/* Cart Floating Button end */}
      {/* Whatsapp */}
      {/* <WhatsappButton/> */}
      {/* Whatsapp end */}
      {/* Feature tools */}
      <FeatureTools/>
      {/* Feature tools end */}


    </>
  );
}

export default App;
