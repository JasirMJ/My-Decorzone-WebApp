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
      {/* <div id="ec-overlay"><span className="loader_img" /></div> */}
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
                <p>
                Mydecorzone is an online retailer of modern and elegant Home, Office, Business and other Space decor and lifestyle products. We aim to curate a collection which can be used to decorate and accessorise your home and other spaces to bring the best out of your interiors. So start decorating your space now.
                </p>
                <p>
                Our Categories include Modern Lights, Furnitures, Bathroom Fittings, Sanitaries,  Wooden Fittings, Wall Sealing and Floor decor items ,Smart Electrical and Plumbing Fittings, Security Systems, Solar power systems, Kitchen Appliances and Exterior Decor Items etc.
                </p>
                <p>
                We continuously strive to give our customers excellent customer service through quality products, timely delivery and a competitive price. For this we handpick the products that are sold on our website and each product goes through a rigorous quality check before making it to the website. Also we have tied up with leading logistics partners such as Fed ex  and others to ensure a smooth delivery experience for our customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  {/* <ServiceSection/> */}


      <Footer />
      <FooterNav setopen={() => setopen(!open)} />

      <FeatureTools/>


    </>
  );
}

export default Aboutus;
