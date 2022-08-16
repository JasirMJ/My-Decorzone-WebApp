import React, { useState, useContext, useEffect } from "react";
import SideCard from "./components/SideCard";

import Header from "../../components/Header";
import CartComponent from "../../components/CartComponent";
import ProductTabArea from "../../components/ProductTabArea";
import BannerSection from "../../components/BannerSection";
import CategorySection from "../../components/CategorySection";
import FeatureSection from "../../components/FeatureSection";
import ServiceSection from "../../components/ServiceSection";
import OfferSection from "../../components/OfferSection";
import NewProduct from "../../components/NewProduct";
import Testimonial from "../../components/Testimonial";
import BrandSection from "../../components/BrandSection";
import InstagramSection from "../../components/InstagramSection";
import Footer from "../../components/Footer";
import TemplateModal from "../../components/TemplateModal";
import Newsletter from "../../components/Newsletter";
import FooterNav from "../../components/FooterNav";
import PurchasePopup from "../../components/PurchasePopup";
import CartFloatingButton from "../../components/CartFloatingButton";
import WhatsappButton from "../../components/WhatsappButton";
import FeatureTools from "../../components/FeatureTools";
import { baseurl, protocol, AppContext } from "../../common/Constants";
import user from "../../assets/images/user.png";
import Preloader from "../../components/Preloader";
import { Link } from "react-router-dom";

const MyAccount = () => {
  const [open, setopen] = useState(false);
  const [loading, setloading] = useState(true);

  const { AdminMail, AdminMobile, userToken, userDetails } =
    useContext(AppContext);
  const [userdata, setuserdata] = useState({
    first_name: "",
    email: "",
    mobile: "",
  });

  console.log({ userDetails });

  const handleSubmit = () => {
    var axios = require("axios");
    var FormData = require("form-data");
    var data = new FormData();
    data.append("first_name", userdata.first_name);
    data.append("mobile", userdata.mobile);
    data.append("email", userdata.email);

    var config = {
      method: "put",
      url: baseurl + "/users/" + userDetails.id,
      headers: {
        Authorization: userToken,
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        if (response.data) {
          // userDetails()
          setuserdata({ first_name: "", email: "", mobile: "" });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {loading ? (
        <Preloader />
      ) : (
        <div>
          {/* <div id="ec-overlay"><span className="loader_img" /></div> */}
          <Header open={open} setopen={() => setopen(!open)} />
          {/* ekka Cart Start */}
          {/* <div className="ec-side-cart-overlay" /> */}

          {/* ekka Cart End */}
          {/* Ec breadcrumb start */}

          {/* Ec breadcrumb end */}
          {/* User history section */}

          <>
            <section className="ec-page-content ec-vendor-uploads ec-user-account section-space-p">
              <div className="container">
                <div className="row">
                  {/* Sidebar Area Start */}
                  {userToken == "" && (
                    <div className="d-flex justify-content-center">
                      <div
                        className=" w-100 d-flex justify-content-center align-items-center"
                        style={{ height: "50vh", flexDirection: "column" }}
                      >
                        {/* <img src={Gif} alt="" height={"50%"} /> */}
                        <h3>Please login to show user details</h3>

                        <a href="/login">
                          <button className="btn btn-danger">Login</button>
                        </a>
                      </div>
                    </div>
                  )}
                  {userDetails && (
                    <>
                      <SideCard />
                      <div className="ec-shop-rightside col-lg-9 col-md-12">
                        <div className="ec-vendor-dashboard-card ec-vendor-setting-card">
                          <div className="ec-vendor-card-body">
                            <div className="row">
                              <div className="col-md-12">
                                <div className="ec-vendor-block-profile">
                                  <div className="ec-vendor-block-img space-bottom-30">
                                    <div className="ec-vendor-block-bg">
                                      <a
                                        href="#"
                                        className="btn btn-lg btn-primary"
                                        data-link-action="editmodal"
                                        title="Edit Detail"
                                        data-bs-toggle="modal"
                                        data-bs-target="#edit_modal"
                                        onClick={() => {
                                          setuserdata({
                                            ...userdata,
                                            first_name: userDetails.first_name,
                                            mobile: userDetails.mobile,
                                            email: userDetails.email,
                                          });
                                        }}
                                      >
                                        Edit Detail
                                      </a>
                                    </div>
                                    <div className="ec-vendor-block-detail">
                                      <img
                                        className="v-img"
                                        src={user}
                                        alt="vendor image"
                                      />
                                      <h5 className="name">
                                        {userDetails.first_name}
                                      </h5>
                                      {/* <p>( Business Man )</p> */}
                                    </div>
                                    <p>
                                      Hello{" "}
                                      <span>{userDetails.first_name}</span>
                                    </p>
                                    <p>
                                      From your account you can easily view and
                                      track orders. You can manage and change
                                      your account information like address,
                                      contact information and history of orders.
                                    </p>
                                  </div>
                                  <h5>Account Information</h5>
                                  <div className="row">
                                    <div className="col-md-6 col-sm-12">
                                      <div className="ec-vendor-detail-block ec-vendor-block-email space-bottom-30">
                                        <h6>
                                          E-mail address{" "}
                                          <a
                                            href="javasript:void(0)"
                                            data-link-action="editmodal"
                                            title="Edit Detail"
                                            data-bs-toggle="modal"
                                            data-bs-target="#edit_modal"
                                          ></a>
                                        </h6>
                                        <ul>
                                          <li>
                                            <a
                                              className="__cf_email__"
                                              data-cfemail="1a696f6a6a75686e2b5a7f627b6a77767f34797577"
                                            >
                                              {userDetails.email}
                                            </a>
                                          </li>
                                          {/* <li><strong>Email 2 : </strong><a href="https://loopinfosol.in/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="b5c6c0c5c5dac7c187f5d0cdd4c5d8d9d09bd6dad8">[email&nbsp;protected]</a></li> */}
                                        </ul>
                                      </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                      <div className="ec-vendor-detail-block ec-vendor-block-contact space-bottom-30">
                                        <h6>
                                          Contact nubmer
                                          <a
                                            href="javasript:void(0)"
                                            data-link-action="editmodal"
                                            title="Edit Detail"
                                            data-bs-toggle="modal"
                                            data-bs-target="#edit_modal"
                                          ></a>
                                        </h6>
                                        <ul>
                                          <li>{userDetails.mobile}</li>
                                          {/* <li><strong>Phone Nubmer 2 : </strong>(123) 123 456 7890</li> */}
                                        </ul>
                                      </div>
                                    </div>
                                    {/* <div className="col-md-6 col-sm-12">
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
                              </div> */}
                                  </div>
                                  <h5>Contact Us</h5>
                                  <div className="row">
                                    <div className="col-md-6 col-sm-12">
                                      <div className="ec-vendor-detail-block ec-vendor-block-email space-bottom-30">
                                        <h6>
                                          E-mail address{" "}
                                          <a
                                            href="javasript:void(0)"
                                            data-link-action="editmodal"
                                            title="Edit Detail"
                                            data-bs-toggle="modal"
                                            data-bs-target="#edit_modal"
                                          ></a>
                                        </h6>
                                        <ul>
                                          <li>
                                            <a
                                              className="__cf_email__"
                                              data-cfemail="1a696f6a6a75686e2b5a7f627b6a77767f34797577"
                                            >
                                              {AdminMail}
                                            </a>
                                          </li>
                                          {/* <li><strong>Email 2 : </strong><a href="https://loopinfosol.in/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="b5c6c0c5c5dac7c187f5d0cdd4c5d8d9d09bd6dad8">[email&nbsp;protected]</a></li> */}
                                        </ul>
                                      </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                      <div className="ec-vendor-detail-block ec-vendor-block-contact space-bottom-30">
                                        <h6>
                                          Contact nubmer
                                          <a
                                            href="javasript:void(0)"
                                            data-link-action="editmodal"
                                            title="Edit Detail"
                                            data-bs-toggle="modal"
                                            data-bs-target="#edit_modal"
                                          ></a>
                                        </h6>
                                        <ul>
                                          <li>{AdminMobile}</li>
                                          {/* <li><strong>Phone Nubmer 2 : </strong>(123) 123 456 7890</li> */}
                                        </ul>
                                      </div>
                                    </div>
                                    {/* <div className="col-md-6 col-sm-12">
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
                              </div> */}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </section>
            <Footer />
            <FooterNav setopen={() => setopen(!open)} />
          </>

          {/* End User history section */}
        </div>
      )}

      {/* Modal */}
      <div className="modal fade" id="edit_modal" tabIndex={-1} role="dialog">
        <div className="modal-dialog d-flex align-items-center" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <div className="row">
                <div
                  className="ec-vendor-block-img space-bottom-30"
                  style={{ height: "32vh" }}
                >
                  <div className="ec-vendor-block-bg cover-upload d-none">
                    <div className="thumb-upload">
                      <div className="thumb-edit">
                        <input
                          type="file"
                          id="thumbUpload01"
                          className="ec-image-upload"
                          accept=".png, .jpg, .jpeg"
                        />
                        <label>
                          <img
                            src="assets/images/icons/edit.svg"
                            className="svg_img header_svg"
                            alt="edit"
                          />
                        </label>
                      </div>
                      <div className="thumb-preview ec-preview">
                        <div className="image-thumb-preview">
                          <img
                            className="image-thumb-preview ec-image-preview v-img"
                            src="assets/images/banner/8.jpg"
                            alt="edit"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ec-vendor-block-detail d-none">
                    <div className="thumb-upload">
                      <div className="thumb-edit">
                        <input
                          type="file"
                          id="thumbUpload02"
                          className="ec-image-upload"
                          accept=".png, .jpg, .jpeg"
                        />
                        <label>
                          <img
                            src="assets/images/icons/edit.svg"
                            className="svg_img header_svg"
                            alt="edit"
                          />
                        </label>
                      </div>
                      <div className="thumb-preview ec-preview">
                        <div className="image-thumb-preview">
                          <img
                            className="image-thumb-preview ec-image-preview v-img"
                            src="assets/images/user/1.jpg"
                            alt="edit"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ec-vendor-upload-detail">
                    <form className="row g-3">
                      <div className="col-md-6 space-t-15">
                        <label className="form-label">First name</label>
                        <input
                          type="text"
                          className="form-control"
                          onChange={(e) =>
                            setuserdata({
                              ...userdata,
                              first_name: e.target.value,
                            })
                          }
                          value={userdata.first_name}
                        />
                      </div>
                      {/* <div className="col-md-12 space-t-15">
                        <label className="form-label">Address 1</label>
                        <input type="text" className="form-control" />
                      </div> */}
                      {/* <div className="col-md-12 space-t-15">
                        <label className="form-label">Address 2</label>
                        <input type="text" className="form-control" />
                      </div> */}
                      {/* <div className="col-md-12 space-t-15">
                        <label className="form-label">Address 3</label>
                        <input type="text" className="form-control" />
                      </div> */}
                      <div className="col-md-6 space-t-15">
                        <label className="form-label">Email id </label>
                        <input
                          type="text"
                          className="form-control"
                          onChange={(e) =>
                            setuserdata({ ...userdata, email: e.target.value })
                          }
                          value={userdata.email}
                        />
                      </div>
                      {/* <div className="col-md-6 space-t-15">
                        <label className="form-label">Email id 2</label>
                        <input type="text" className="form-control" />
                      </div> */}
                      <div className="col-md-6 space-t-15">
                        <label className="form-label">Phone number </label>
                        <input
                          type="text"
                          className="form-control"
                          onChange={(e) =>
                            setuserdata({ ...userdata, mobile: e.target.value })
                          }
                          value={userdata.mobile}
                        />
                      </div>
                      {/* <div className="col-md-6 space-t-15">
                        <label className="form-label">Phone number 2</label>
                        <input type="text" className="form-control" />
                      </div> */}
                      <div className="col-md-12 space-t-15">
                        <a
                          href="#"
                          className="btn btn-lg btn-secondary qty_close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        >
                          Close
                        </a>
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={handleSubmit}
                        >
                          Update
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal end */}
    </div>
  );
};

export default MyAccount;
