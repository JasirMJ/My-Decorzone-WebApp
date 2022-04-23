import React, { useState, useContext, useEffect, useRef } from 'react'
import { baseurl, protocol, AppContext } from '../common/Constants'
import { unsetDataOnCookie } from '../common/Functions'
import Logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'
import ScrollContainer from 'react-indiana-drag-scroll'
import Slider from "react-slick";



function Header({ open, setopen }) {

  const { userToken, localStorageName, cartObjs, serachText, setserachText } = useContext(AppContext)

  const ref = useRef(null)

  const [products, setproducts] = useState([])
  const [data, setdata] = useState([])
  const [widthOver, setWidthOver] = useState()

  console.log("TOKEN", userToken);

  useEffect(() => {
    // console.log('api calling')

    getproduct()
  }, [serachText])

  useEffect(() => {
    getCategories()
  }, [])

  // useEffect(() => {
  //   let slickSlider = document.querySelector('.slick-track')
  //   slickSlider.style.transform = '0'
  //   // console.log({slickSlider})
  // }, [])

  useEffect(() => {


    console.log(ref.current.clientWidth, window.innerWidth)
    console.log(ref.current.clientWidth > window.innerWidth)

    if (ref.current.clientWidth > window.innerWidth) {
      setWidthOver(true)
    } else {
      setWidthOver(false)
    }
  }, [ref.current])

  const getproduct = () => {
    var axios = require('axios');

    var config = {
      method: 'get',
      url: baseurl + '/items/items/?ordering=?&' + `search=${serachText}`,
      headers: {}
    };

    axios(config)
      .then(function (response) {
        // setloading(false)
        console.log('prdts', response.data);
        if (response.data.results) {
          setproducts(response.data.results)

          console.log(response.data.results)
        }

      })
      .catch(function (error) {
        console.log(error);
      });

  }
  const getCategories = () => {
    var axios = require('axios');
    var FormData = require('form-data');
    var data = new FormData();

    var config = {
      method: 'get',
      url: baseurl + '/items/category/',
      headers: {
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        // setLoading(false)
        console.log('categories----', response.data);
        setdata(response.data.results);
        // setNext(response.data.next);
        // setPrev(response.data.previous);
      })
      .catch(function (error) {
        // setLoading(false)
        console.log(error);
      });

  }



  const settings = {
    className: "",
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 8,
    initialSlide: 0,
    swipeToSlide: true,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 8,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 6,
          initialSlide: 2,
        }
      },
      // {
      //   breakpoint: 480,
      //   settings: {
      //     slidesToShow: 3,
      //   }
      // }
    ]
  };

  return (
    <>
      <header className="ec-header">
        {/*Ec Header Top Start */}
        {/* Ec Header Top  End */}
        {/* Ec Header Bottom  Start */}
        <div className="ec-header-bottom d-none d-lg-block">
          <div className="container position-relative">
            <div className="row">
              <div className="ec-flex">
                {/* Ec Header Logo Start */}
                <div className="align-self-center">
                  <div className="header-logo">
                    <Link to="/"><img src={Logo} alt="Site Logo" /><img className="dark-logo" src="assets/images/logo/dark-logo.png" alt="Site Logo" style={{ display: 'none' }} /></Link>
                  </div>
                </div>
                {/* Ec Header Logo End */}
                {/* Ec Header Search Start */}
                {window.location.pathname != ('/login' || '/checkout' || '/cart' || '/myorders') &&
                  <div className="align-self-center">
                    <div className="header-search">
                      <form className="ec-btn-group-form" action="#">
                        <input className="form-control" placeholder="Enter Your Product Name..." type="text" style={{ borderRadius: '6px' }} onChange={e => setserachText(e.target.value)} value={serachText} />
                        <button className="submit" type='button'><i class="fas fa-search" style={{ color: '#8196dc' }}></i></button>
                      </form>

                      {/* serach result component start */}
                      {serachText.length > 0 &&
                        <div className='w-100 p-2' style={{
                          position: 'absolute',
                          background: '#f4f4f4',
                          top: '48px',
                          maxHeight: '10rem',
                          minHeight: '16rem',
                          zIndex: '10',
                          boxShadow: '0 5px 4px lightgrey',
                          borderRadius: '7px',
                          overflowY: 'scroll'
                        }}>
                          {products.map(item => (
                            <div className='py-1'>
                              <a href={`/product/${item.id}`}  >{item.name}</a>
                              <div style={{ borderBottom: '1px solid #ccc' }}></div>
                            </div>
                          ))}

                        </div>
                      }
                      {/* serach result component en*/}

                    </div>
                  </div>
                }
                {/* Ec Header Search End */}
                {/* Ec Header Button Start */}
                <div className="align-self-center">
                  <div className="ec-header-bottons">
                    {/* Header User Start */}
                    <div className="ec-header-user dropdown">
                      <button className="dropdown-toggle" data-bs-toggle="dropdown"><i class="far fa-user svg_img header_svg" style={{ fontSize: 'x-large' }}></i></button>
                      <ul className="dropdown-menu dropdown-menu-right">
                        {
                          userToken == "" &&
                          <>
                            <li><Link className="dropdown-item" to="/register">Register</Link></li>
                            <li><Link className="dropdown-item" to="/login">Login</Link></li>
                          </>
                        }

                        {
                          userToken != "" &&
                          <>
                            <li><Link className="dropdown-item" to="/myaccount">My Account</Link></li>
                            <li><Link className="dropdown-item" to="#" onClick={() => { unsetDataOnCookie(localStorageName); window.location.replace('/login') }}>Logout</Link></li>
                          </>
                        }


                      </ul>
                    </div>
                    {/* Header User End */}
                    {/* Header wishlist Start */}

                    {/* Header wishlist End */}
                    {/* Header Cart Start */}
                    <Link to="/cart" className="ec-header-btn ec-side-toggle">
                      <div className="header-icon"><i class="fas fa-shopping-cart svg_img header_svg" style={{ fontSize: 'x-large' }}></i></div>
                      <span className="ec-header-count cart-count-lable">{cartObjs.length}</span>
                    </Link>
                    {/* Header Cart End */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Ec Header Button End */}
        {/* Header responsive Bottom  Start */}
        <div className="ec-header-bottom d-lg-none">
          <div className="container position-relative">
            <div className="row ">
              {/* Ec Header Logo Start */}
              <div className="lg-col">
                <div className="header-logo d-flex justify-content-center">
                  <Link to="/"><img src={Logo} alt="Site Logo" /><img className="dark-logo" src="assets/images/logo/dark-logo.png" alt="Site Logo" style={{ display: 'none' }} /></Link>
                </div>
              </div>
              {/* Ec Header Logo End */}
              {/* Ec Header Search Start */}
              {window.location.pathname != ('/login' || '/checkout' || '/cart' || '/myorders') &&
                <div className="col">
                  <div className="header-search">
                    <form className="ec-btn-group-form" action="#">
                      <input className="form-control" placeholder="Enter Your Product Name..." type="text" style={{ borderRadius: '6px' }} onChange={e => setserachText(e.target.value)} value={serachText} />
                      <button className="submit" type='button'><i class="fas fa-search" style={{ color: '#8196dc' }}></i></button>
                    </form>

                    {/* serach result component start */}
                    {serachText.length > 0 &&
                      <div className='w-100 p-2' style={{
                        position: 'absolute',
                        background: 'rgb(244 244 244 / 75%)',
                        top: '48px',
                        maxHeight: '10rem',
                        minHeight: '16rem',
                        zIndex: '10',
                        boxShadow: '0 5px 4px lightgrey',
                        borderRadius: '7px',
                        overflow: 'scroll'
                      }}>
                        {products.map(item => (
                          <div className='py-1'>
                            <a href={`/product/${item.id}`}  >{item.name}</a>
                            <div style={{ borderBottom: '1px solid #ccc' }}></div>
                          </div>
                        ))}

                      </div>
                    }
                    {/* serach result component en*/}



                  </div>

                </div>
              }


              {/* Ec Header Search End */}
            </div>
          </div>
        </div>
        {/* Header responsive Bottom  End */}
        {/* EC Main Menu Start */}
        <div id="ec-main-menu-desk" className="d-none d-lg-block sticky-nav">
          <div className="container position-relative">
            <div className="row">
              <div className="col-md-12 align-self-center">
                <div className="ec-main-menu">
                  <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/categories">Categories</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/offers">Offers</Link></li>
                    <li><Link to={userToken == '' ? "/login" : "/myorders"} >My Orders</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="contactus">Contact Us</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Ec Main Menu End */}


        {/* small screen category slider */}
        {window.location.pathname != ('/login' || '/checkout' || '/cart' || '/myorders') &&
          <div className="d-block mt-3" style={{
            width: '100%',
            overflowX: 'overlay'
          }}>
            {/* <ScrollContainer horizontal={true} className={`d-flex justify-content-${widthOver ? 'center' : 'start'}`}> */}
            {/* <div style={{ display: 'inline-flex', marginTop: '10px' }} ref={ref}> */}
            {/* <Slider {...settings}> */}
            <div className='d-flex pr-3 scroller' ref={ref} style={{
              width: '100%',
              justifyContent: 'start' ,

              overflowX: 'scroll',
              flexGrow: '1'
            }}>

              {data.map(item => (
                <a href={`/category/${item.id}`} className={'category__slides '} >
                  <img style={{ width: '5rem', height: '5rem', objectFit: 'cover', borderRadius: '4px' }} src={item.image} alt="" />
                  <p style={{ fontSize: '10px', marginTop: '5px' }}>{item.name}</p>
                </a>

              ))}
            </div>
            {/* </Slider> */}
          </div>
        }

        {/* ekka Mobile Menu Start */}
        <div id="ec-mobile-menu" className={`ec-side-cart ec-mobile-menu ${open ? 'ec-open' : ""}`}>
          <div className="ec-menu-title">
            <span className="menu_title">My Menu</span>
            <button className="ec-close" onClick={() => setopen()}>×</button>
          </div>
          <div className="ec-menu-inner">
            <div className="ec-menu-content">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/categories">Categories</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/offers">Offers</Link></li>
                <li><Link to={userToken == '' ? "/login" : "/myorders"} >My Orders</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="contactus">Contact Us</Link></li>
              </ul>
            </div>

          </div>
        </div>

        {/* ekka mobile Menu End */}
      </header>


      {/* ekka Cart Start */}
      <div className="ec-side-cart-overlay"
        style={{ display: open === true ? 'block' : 'none' }}
      />
      <div id="ec-side-cart" className="ec-side-cart">
        <div className="ec-cart-inner">
          <div className="ec-cart-top">
            <div className="ec-cart-title">
              <span className="cart_title">My Cart</span>
              <button className="ec-close">×</button>
            </div>
            <ul className="eccart-pro-items">
              <li>
                <Link to="product-left-sidebar.html" className="sidekka_pro_img"><img src="assets/images/product-image/6_1.jpg" alt="product" /></Link>
                <div className="ec-pro-content">
                  <Link to="product-left-sidebar.html" className="cart_pro_title">T-shirt For Women</Link>
                  <span className="cart-price"><span>$76.00</span> x 1</span>
                  <div className="qty-plus-minus">
                    <input className="qty-input" type="text" name="ec_qtybtn" defaultValue={1} />
                  </div>
                  <Link to="javascript:void(0)" className="remove">×</Link>
                </div>
              </li>
              <li>
                <Link to="product-left-sidebar.html" className="sidekka_pro_img"><img src="assets/images/product-image/12_1.jpg" alt="product" /></Link>
                <div className="ec-pro-content">
                  <Link to="product-left-sidebar.html" className="cart_pro_title">Women Leather Shoes</Link>
                  <span className="cart-price"><span>$64.00</span> x 1</span>
                  <div className="qty-plus-minus">
                    <input className="qty-input" type="text" name="ec_qtybtn" defaultValue={1} />
                  </div>
                  <Link to="javascript:void(0)" className="remove">×</Link>
                </div>
              </li>
              <li>
                <Link to="product-left-sidebar.html" className="sidekka_pro_img"><img src="assets/images/product-image/3_1.jpg" alt="product" /></Link>
                <div className="ec-pro-content">
                  <Link to="product-left-sidebar.html" className="cart_pro_title">Girls Nylon Purse</Link>
                  <span className="cart-price"><span>$59.00</span> x 1</span>
                  <div className="qty-plus-minus">
                    <input className="qty-input" type="text" name="ec_qtybtn" defaultValue={1} />
                  </div>
                  <Link to="javascript:void(0)" className="remove">×</Link>
                </div>
              </li>
            </ul>
          </div>
          <div className="ec-cart-bottom">
            <div className="cart-sub-total">
              <table className="table cart-table">
                <tbody>
                  <tr>
                    <td className="text-left">Sub-Total :</td>
                    <td className="text-right">$300.00</td>
                  </tr>
                  <tr>
                    <td className="text-left">VAT (20%) :</td>
                    <td className="text-right">$60.00</td>
                  </tr>
                  <tr>
                    <td className="text-left">Total :</td>
                    <td className="text-right primary-color">$360.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="cart_btn">
              <Link to="cart.html" className="btn btn-primary">View Cart</Link>
              <Link to="checkout.html" className="btn btn-secondary">Checkout</Link>
            </div>
          </div>
        </div>
      </div>
      {/* ekka Cart End */}
    </>

  )
}

export default Header
