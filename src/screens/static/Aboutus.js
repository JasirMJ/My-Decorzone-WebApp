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
import { useState } from 'react';
function Aboutus() {
  const [open, setopen] = useState(false)
  return (
    <>
      <div id="ec-overlay"><span className="loader_img" /></div>
      <Header open={open} setopen={() => setopen(!open)} />

  {/* Ec About Us page */}
  <section className="ec-page-content section-space-p">
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <div className="section-title">
            <h2 className="ec-bg-title">About Us</h2>
            <h2 className="ec-title">About Us</h2>
          </div>
        </div>
        <div className="ec-common-wrapper">
          <div className="row">
            {/* <div className="col-md-6 ec-cms-block ec-abcms-block text-center">
              <div className="ec-cms-block-inner">
                <img className="a-img" src="assets/images/offer-image/1.jpg" alt="about" />
              </div>
            </div> */}
            <div className="col-md-12 ec-cms-block ec-abcms-block text-center">
              <div className="ec-cms-block-inner">
                <h3 className="ec-cms-block-title">What is the My Decorzone?</h3>
                <p>Electronic typesetting text of the printing and typesetting industry. when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. Lorem Ipsum is
                  simply dutmmy text ever since the 1500s, It has survived not only,
                  but also the leap into electronic typesetting.</p>
                <p>Lorem Ipsum is simply dummy text of the printing. It has survived not only five centuries,
                  but also the leap into electronic typesetting.</p>
                <p>Also the leap into electronic typesetting printing and typesetting industry. It has survived not only five centuries,
                  but also the leap into electronic typesetting, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. It has survived not only five centuries,
                  but also the leap into electronic typesetting, remaining essentially unchanged.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <ServiceSection/>


      <Footer />
      <FooterNav setopen={() => setopen(!open)} />

      <FeatureTools/>


    </>
  );
}

export default Aboutus;
