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
import GridProduct from '../../components/GridProduct'

const Products = () => {
    return (
        <div>
<div>
  <div id="ec-overlay"><span className="loader_img" /></div>
  {/* ekka Cart Start */}
  <Header/>
  <div className="ec-side-cart-overlay" />
  
  {/* Ec Shop page */}
  <section className="ec-page-content section-space-p">
    <div className="container">
      <div className="row">
        <div className="ec-shop-rightside col-lg-12 col-md-12">
        
          {/* Shop content Start */}
          <div className="shop-pro-content">
            <div className="shop-pro-inner">
              <div className="row">
               <GridProduct />
               <GridProduct />
               <GridProduct />
               <GridProduct />
               <GridProduct />
               <GridProduct />
               <GridProduct />
               <GridProduct />
               <GridProduct />
               <GridProduct />
               <GridProduct />
               <GridProduct />
            
              </div>
            </div>
            {/* Ec Pagination Start */}
            <div className="ec-pro-pagination">
              <span></span>
              <ul className="ec-pro-pagination-inner">
                <li><a className="next" href="#"><i className="ecicon eci-angle-left" /> Previous</a></li>
                <li><a className="next" href="#">Next <i className="ecicon eci-angle-right" /></a></li>
              </ul>
            </div>
            {/* Ec Pagination End */}
          </div>
        </div>
 
      </div>
    </div>
  </section>
</div>
   <Footer/>
            {/* Footer navigation panel for responsive display */}
            <FooterNav/>
        </div>
    )
}

export default Products
