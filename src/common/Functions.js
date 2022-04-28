import Cookies from "js-cookie";
import {baseurl , protocol , AppContext} from "../common/Constants";
import noimagesqaure from '../assets/images/noimagesqaure.png'
import { Store } from "react-notifications-component";


export const showMessage = (
  message,
  type,
  title,
  insert,
  container,
  duration
) => {
  // reusable funciton
  // console.log("showMessage worked", message);
  Store.addNotification({
    title: title,
    message: message,
    type: type, //success, default, warning, info, danger
    insert: insert, //top,bottom
    container: container, //top-left, top-right, top-center, bottom-left, bottom-right, bottom-center
    // content: <h1>Hallo</h1>,
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: type === "danger" ? 5000 : 2000,
      //duration: 0,
      //click: true,
      //onScreen: true
    },
  });
};
 // Get Offer Price max offer % in product
 export const getOffer = (Varients) => {
  if(Varients) {
    var offeravailable = false

    Varients.map(item=>{
        if(item.offer_enabled) {
            offeravailable = true
        }
    })

    if(offeravailable){
        var discounts = []
        Varients.map(item=>{
            if(item.offer_enabled) {
                var discount = 100 * (item.rate - item.offer_rate) / item.rate
                discounts.push(discount.toFixed(0))
            }
        })
        var maxDiscount = discounts.reduce(function(a, b) {
            return Math.max(a, b);
        }, 0);
        return maxDiscount !=0 ? maxDiscount : false
    }else {
        return false
    }
  } else {
    return false
}
}

export const ResponseValidation = (response) => {
  let status_code = null;
  let response_data = null;
  let message = null;

  // console.log("Response validation Started :", response);
  if (response) {
    if (response.status) {
      // console.log("Status Code :", response.status);
      if (response.status === 200) {
        message = "Success";
        status_code = response.status;
        response_data = response;
        //showMessage(JSON.stringify(response.data),"success","Success!","top","top-right", 0)
      } else if (response.status === 401) {
        unsetDataOnCookie();
        // history.push("/login");
        // alert("Your section has expired, please login")
        showMessage(
          JSON.stringify(response.data),
          "danger",
          "Unauthorized!",
          "top",
          "top-right",
          0
        );
        window.location.replace("/login");
        message = "Unauthorised user, you dont have permission to access this";
        status_code = response.status;
        response_data = 0;
      } else if (response.status === 404) {
        message = "Page Not found";
        status_code = response.status;
        response_data = 0;
        showMessage(
          JSON.stringify(response.data),
          "danger",
          "Not found!",
          "top",
          "top-right",
          0
        );
      } else if (response.status === 500) {
        // alert("Internal Server Error")
        message = "Internal Server Error";
        status_code = response.status;
        response_data = 0;
        showMessage(
          JSON.stringify(response.data),
          "danger",
          "Server error!",
          "top",
          "top-right",
          0
        );
      } else if (response.status === 503) {
        // alert("Internal Server Error")
        // console.log("503 FOUNDDDDDDDDDDDDD")
        message = "Seems like server is not running";
        status_code = response.status;
        response_data = 0;
        //alert(message);
        showMessage(
          message,
          "danger",
          "Server not running!",
          "top",
          "top-right",
          0
        );
      } else {

        // console.log(response)
        message = "Unhandled Condition met";
        response_data = 0;
        const loginFailedMessage = JSON.stringify(response.data)
        if (loginFailedMessage.match("Unable to log in with provided credentials.")) {
          showMessage(
            "invalid username or email ",
            "danger",
            "Unhandled!",
            "top",
            "top-right",
            0
          );
        } else {
          showMessage(
            JSON.stringify(response.data),
            "danger",
            "Unhandled!",
            "top",
            "top-right",
            0
          );
        }


        // alert(message)
      }

      // console.log(status_code +" :" + message);
      // console.log("validated data is", response_data);
      return response_data;
    } else {
      message = "unexpected response got";
      // console.log(message);
      //alert(message);
      showMessage(
        JSON.stringify(response.data),
        "danger",
        "Unexpected response!",
        "top",
        "top-right",
        0
      );
      return 0;
    }
  }
  // else if(response.data)
  else {
    let message = "Unhandled condition met";
    //alert(message);
    // console.log(message);
    return 0;
  }
};

export const setDataOnCookie = (storageName, data) => {

  if (!data) {
    return 0;
  }
  Cookies.set(storageName, JSON.stringify(data));
};

export const unsetDataOnCookie = (storageName) => {
  Cookies.remove(storageName);
};




export const addDomainInImage = (image) => {
  // console.log("addDomainInImage ",image)
  let formattedImage = ""
  if (image == ""||image == null) {
    let noimage = noimagesqaure
    // console.log("formatted Image ",)
    formattedImage = noimage
    return formattedImage
  }
  if (typeof (image) === "string") {
    if (image === "") {
      let noimage = noimagesqaure
      // console.log("formatted Image ",)
      formattedImage = noimage
    }
    else {

      let img = image.includes('http')
      if (img) {
        formattedImage = image.replace('http://', protocol)
      } else {
        formattedImage = baseurl + image

      }
    }
    // console.log("formatted Image ", formattedImage)
    return formattedImage
  } else {
    if (image == "") {
      let noimage = noimagesqaure
      // console.log("formatted Image ",)
      formattedImage = noimage
      return formattedImage
    }
    // console.log("Cannot format type ",typeof(image))
  }

}

export const formatAMPM = (date) => {
  // console.log("Date before : ", date)
  // console.log(date,)
  // console.log(new Date())

  // var hours = date.getHours();
  // var minutes = date.getMinutes();
  // var ampm = hours >= 12 ? "pm" : "am";
  // hours = hours % 12;
  // hours = hours ? hours : 12; // the hour '0' should be '12'
  // minutes = minutes < 10 ? "0" + minutes : minutes;
  // var strTime = hours + ":" + minutes + " " + ampm;
  // return strTime;

  // let time = ""
  // var dateUTC = (date);
  // var dateUTC = dateUTC.getTime()
  // var dateIST = new Date(dateUTC);

  // // substract 5:30 here
  // // dateIST.setHours(dateIST.getHours() - 5);
  // // dateIST.setMinutes(dateIST.getMinutes() - 30);
  // dateIST.setHours(dateIST.getHours());
  // dateIST.setMinutes(dateIST.getMinutes());

  // let date_time = dateIST.toString().slice(16, 24)
  // // console.log("IST ",date_time);
  // time = date_time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
  // // console.log("Time ",time);



  // if (time.length > 1) { // If time format correct
  //   time = time.slice(1); // Remove full string match value
  //   time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
  //   time[0] = +time[0] % 12 || 12; // Adjust hours
  // }
  // // console.log(time, date)
  // // console.log("Date after : ", date)
  // // console.log("Time after : ", time)
  // return time

  var date = new Date(date)
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}


export const validURL = (str) => {
  var pattern = new RegExp('^(https?:\\/\\/)?' + // web protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name of the business
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address not considered v6
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path of url
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string of url
    '(\\#[-a-z\\d_]*)?$', 'i'); // url fragment locator
  return !!pattern.test(str);
}

export const pop_by_name = (array, name) => {
  const index = array.indexOf(name);
  // console.log("Pop",index)
  if (index > -1) {
    array.splice(index, 1);
  }
  return array
}