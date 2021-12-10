import React, {Component} from 'react';
const AppContext = React.createContext()

// server
const protocol = 'https://' //live
// const host = '52.66.143.157';
const host = 'ctm.codedady.com'; // debug
// const host = 'api.lemagnolia.org'; //live

// local
// const protocol = 'http://'
// const host = '192.168.0.142:80';
// const host = '192.168.0.148:80';

const baseurl = `${protocol}${host}`; 

const version = "1.2"

export {
  AppContext,
   baseurl , 
   version ,
  };