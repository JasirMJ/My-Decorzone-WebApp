import React, {useState, useEffect} from 'react';
import {AppContext ,  } from './Constants';
import Router from './Router';
import axios from 'axios'
import Cookies from "js-cookie";

function Context() {

  const localStorageName = "onlinecart_token"
  
  // user Details
  const [userToken, setUserToken] = useState(Cookies.getJSON(localStorageName) ? Cookies.getJSON(localStorageName).token : "");
  const [userDetails, setUserDetails] = useState(null);
  const [isLogined, setLogined] = useState(false);


  return (
        <AppContext.Provider
          value={{
            userToken , setUserToken, localStorageName, 
            userDetails , setUserDetails , 
            isLogined , setLogined, 
          }}>
          <Router/>
        </AppContext.Provider>
  );
}

export default Context;