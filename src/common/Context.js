import React, {useState, useEffect} from 'react';
import {AppContext ,  } from './Constants';
import Router from './Router';
import axios from 'axios'


function Context() {
  
  // user Details
  const [userToken, setUserToken] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const [isLogined, setLogined] = useState(false);


  return (
        <AppContext.Provider
          value={{
            userToken , setUserToken,
            userDetails , setUserDetails , 
            isLogined , setLogined, 
          }}>
          <Router/>
        </AppContext.Provider>
  );
}

export default Context;