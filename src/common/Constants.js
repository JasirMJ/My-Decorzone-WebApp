import Cookies from "js-cookie";
import React, { Component } from "react";
const AppContext = React.createContext();

//  const protocol = 'http://'
//  const host = "localhost:8000";

const protocol = "https://";
const host = "api.mydecorzone.com";

const baseurl = protocol + host;

// const localStorageName = "onlinecart_token"

// const token = Cookies.getJSON(localStorageName) ? Cookies.getJSON(localStorageName).token : "";

const version = "1.05";

export { AppContext, baseurl, version, protocol };
