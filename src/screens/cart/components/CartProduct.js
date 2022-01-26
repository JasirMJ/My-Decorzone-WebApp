import React, { useState, useContext, useEffect } from 'react'
import { baseurl, protocol, AppContext } from '../../../common/Constants'
import { addDomainInImage } from '../../../common/Functions'

export default function CartProduct({ Data }) {

  const { userToken, cartObjs, setCartObjs } = useContext(AppContext)

  const [quantity, setquantity] = useState()
  const [updateCart, setupdateCart] = useState(false)

  useEffect(() => {
    setquantity(Data.quantity)
  }, [cartObjs])

  useEffect(() => {
    if (updateCart) {
      console.log("cart");
      const delayDebounceFn = setTimeout(() => {
        //   console.log(searchKey)
        // Send Axios request here
        cartUpdate(quantity)
        // searchproducts(searchText)
        // searchrestaurants(searchText)
      }, 1000)
      return () => clearTimeout(delayDebounceFn)
    }
  }, [quantity])

  const cartUpdate = (count) => {
    var item = [{
      "varient": Data.varient.id,
      "quantity": count
    }]

    console.log("ITEM", item);

    var axios = require('axios');
    var FormData = require('form-data');
    var fdata = new FormData();
    fdata.append('varient_lst', JSON.stringify(item));
    fdata.append('keyword', 'add');

    var config = {
      method: 'post',
      url: baseurl + '/cart/',
      headers: {
        'Authorization': userToken,
      },
      data: fdata
    };

    axios(config)
      .then(function (response) {
        setupdateCart(false)
        console.log(response.data);
        if (response.data.Error) {
          console.log("Sorry , product is unavialable right now", response.data);
          // getCart()
        } else {
          setCartObjs(response.data.basket)
        }
      })
      .catch(function (error) {
        // console.log(error);
        console.log("CART UPDATE ERR",error);
      });
  }

  const removeItem = (e) => {
  
  }

  return (
    <tr>
      <td data-label="Product" className="ec-cart-pro-name"><a href="product-left-sidebar.html">
        <img className="ec-cart-pro-img mr-4" src={addDomainInImage(Data.varient.item_status.images.length != 0 ? Data.varient.item_status.images[0].image : "")} alt />
        {Data.varient.item_status.name + "-" + Data.varient.name}</a></td>
      <td data-label="Price" className="ec-cart-pro-price"><span className="amount">₹{Data.varient.final_rate}</span></td>
      <td data-label="Quantity" className="ec-cart-pro-qty" style={{ textAlign: 'center' }}>
        <div className="cart-qty-plus-minus">
          <button type='button' 
           onClick={()=>{
            setquantity((r) => {
              if (r > 0) {
                      return r - 1;
                  }
                      return r;
              });
        setupdateCart(true) 
        }}
          disabled={!quantity}><i class="fas fa-minus"></i></button>
          <input className="qty-input" type="text" name="ec_qtybtn" value={quantity} />
          <button type='button' 
          onClick={() => { setquantity(quantity + 1); setupdateCart(true) }}
         
          ><i class="fas fa-plus"></i></button>
          {/* <input className="cart-plus-minus" type="text" name="quantity" value={quantity} onChange={(e) => update(e)} /> */}
        </div>
      </td>
      <td data-label="Total" className="ec-cart-pro-subtotal">₹{Data.varient.final_rate * quantity}</td>
      <td data-label="Remove" className="ec-cart-pro-remove">
        <a href="#" onClick={() => { cartUpdate(0) }}><i className="ecicon eci-trash-o" /></a>
      </td>
    </tr>
  );
}
