import React, {useState, useEffect} from 'react';
import Router from './Router';
import axios from 'axios'
import Cookies from "js-cookie";
import {baseurl , protocol , AppContext} from '../common/Constants'

function Context() {

  const localStorageName = "onlinecart_token"
  
  // user Details
  const [userToken, setUserToken] = useState(Cookies.getJSON(localStorageName) ? Cookies.getJSON(localStorageName).token : "");
  const [userAddressId, setUserAddressId] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const [isLogined, setLogined] = useState(false);

  //delivery Note
  const [deliveryNotes, setdeliveryNotes] = useState("")
  const [deliveryCharge, setdeliveryCharge] = useState(0)

  // extra charge
  const [extraCharges, setextraCharges] = useState(0)
  const [extraDescription, setextraDescription] = useState("")

   // cart
   const [ordercancellationTime, setordercancellationTime] = useState(5)
   const [cartObjs, setCartObjs] = useState([]);
   const [cartDiscountTotalAmount, setcartDiscountTotalAmount] = useState(0)
   const [cartTotalAmount, setcartTotalAmount] = useState(0)

   // Total Pay Amount
   const [totalPayAmount, settotalPayAmount] = useState(0)

   const CART_TOTAL_ITEM_AMOUNT = parseFloat(cartTotalAmount - cartDiscountTotalAmount);

  const CART_GRAND_AMOUNT =   (CART_TOTAL_ITEM_AMOUNT + parseFloat(deliveryCharge) + parseFloat(extraCharges) )  


   const calculateCartAmount = () => {
    var carttotal = 0
    var totalsellingprice = 0
      cartObjs.map(item=>{
         carttotal = carttotal + ( item.varient.mrp  *item.quantity )
         totalsellingprice = totalsellingprice +( item.varient.final_rate * item.quantity )
      })
      setcartTotalAmount(carttotal)
      setcartDiscountTotalAmount(carttotal-totalsellingprice)
  }

   //Cart Amount Changes
useEffect(() => {
  if(cartObjs != 0) {
    calculateCartAmount()
  } else {
    setcartTotalAmount(0)
    setcartDiscountTotalAmount(0)
  }
}, [cartObjs])

useEffect(() => {
  settotalPayAmount(CART_GRAND_AMOUNT)
}, [CART_GRAND_AMOUNT ])

useEffect(() => {
  getSettings()
}, [])

useEffect(() => {
  if(userToken != "") {
    getUserDetails(userToken)
    getCart(userToken)
  }
}, [userToken])

const getSettings = () => {
  var axios = require('axios');

  var config = {
    method: 'get',
    url: baseurl + '/conf/?pagination=false',
    headers: { }
  };

  axios(config)
  .then(function (response) {
    console.log("GET SETTINGS" , response.data);
    var enableextracharge = false
    var extracharge = 0
    response.data.map(item=>{
      if (item.param_name == 'delivery_charge') {
        setdeliveryCharge(item.param_value)
      } else if (item.param_name == 'Enable_extra_charge') {
        enableextracharge = item.param_value
      } else if (item.param_name == 'Extra_charge_description') {
        setextraDescription(item.param_value)
      } else if (item.param_name == 'Extra_charge') {
        extracharge = item.param_value
        // setextraCharges(item.param_value)
      } 
    })
    if(enableextracharge == "false") {
      setextraCharges(0)
    } else {
      setextraCharges(extracharge)
    }
  })
  .catch(function (error) {
    console.log(error);
  });

}


const getUserDetails = (token) => {
  var axios = require('axios');

  var config = {
    method: 'get',
    url: 'https://api.mydecorzone.com/users/',
    headers: { 
      'Authorization': token,
    }
  };
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
    if(response.data.results.length!=0) {
      setLogined(true);
      if(response.data.results[0].address.length!=0) {
        setUserAddressId(response.data.results[0].address[0].id)
      }
    } else{
      setLogined(false);
    }
  })
  .catch(function (error) {
    console.log(error);
  });
  
}

const getCart = (value) => {
  var axios = require('axios');

  var config = {
    method: 'get',
    url: baseurl + '/cart/',
    headers: { 
      'Authorization': value,
    },
  };

  axios(config)
  .then(function (response) {
    console.log("CART",JSON.stringify(response.data));
    if(response.data.results.length !=0) {
      console.log("CART DATA",JSON.stringify(response.data.results[0].basket));
      setCartObjs(response.data.results[0].basket)
    }
  })
  .catch(function (error) {
    console.log(error);
  });
}


  return (
        <AppContext.Provider
          value={{
            userToken , setUserToken, localStorageName, 
            userDetails , setUserDetails , 
            isLogined , setLogined, 
            userAddressId, setUserAddressId,
          deliveryNotes, setdeliveryNotes,
          deliveryCharge, setdeliveryCharge,

          cartObjs, setCartObjs,
          cartTotalAmount, setcartTotalAmount,
          cartDiscountTotalAmount, setcartDiscountTotalAmount,
          extraCharges, setextraCharges, extraDescription ,
          totalPayAmount, settotalPayAmount,
          }}>
          <Router/>
        </AppContext.Provider>
  );
}

export default Context;