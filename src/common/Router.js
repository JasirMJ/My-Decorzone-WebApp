import { useState, useEffect } from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./../screens/home/Home";
import Categories from "./../screens/categories/Categories";
import CategoryProducts from "./../screens/categories/CategoryProducts";
import Products from "./../screens/products/Products";
import Offers from "./../screens/offers/Offers";
import ProductDetails from "./../screens/products/ProductDetails";
import Login from "./../screens/auth/Login";
import Register from "./../screens/auth/Register";
import MyAccount from "./../screens/myaccount/MyAccount";
import MyOrders from "./../screens/myaccount/MyOrders";
import Cart from "./../screens/cart/Cart";
import OrderDetails from "./../screens/myaccount/OrderDetails";
import Aboutus from "./../screens/static/Aboutus";
import Contactus from "./../screens/static/Contactus";
import Checkout from "../screens/Checkout/checkout";
import { Alerts } from "../components/Alert";

function RouterSet() {
  return (
    <>
      <Alerts />
      <Router>
        <Switch>
          <Route path={`/categories`}>
            <Categories />
          </Route>
          <Route path={`/category/:id`}>
            <CategoryProducts />
          </Route>

          <Route exact path={`/login`}>
            <Login />
          </Route>
          <Route exact path={`/register`}>
            <Register />
          </Route>
          <Route exact path={`/myaccount`}>
            <MyAccount />
          </Route>
          <Route exact path={`/myorders`}>
            <MyOrders />
          </Route>
          <Route exact path={`/checkout`}>
            <Checkout />
          </Route>
          <Route exact path={`/orderdetails/:id`}>
            <OrderDetails />
          </Route>
          <Route exact path={`/product/:id`}>
            <ProductDetails />
          </Route>
          <Route exact path={`/cart`}>
            <Cart />
          </Route>
          <Route exact path={`/products`}>
            <Products />
          </Route>
          <Route exact path={`/offers`}>
            <Offers />
          </Route>
          <Route exact path={`/`}>
            <Home />
          </Route>
          <Route exact path={`/about`}>
            <Aboutus />
          </Route>
          <Route exact path={`/contactus`}>
            <Contactus />
          </Route>

          {/* contactus */}
        </Switch>
      </Router>
    </>
  );
}

export default RouterSet;
