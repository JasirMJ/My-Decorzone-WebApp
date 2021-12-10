import React from 'react'

function Newsletter() {
    return (
        <>
         <div id="ec-popnews-bg" />
      <div id="ec-popnews-box">
        <div id="ec-popnews-close"><i className="ecicon eci-close" /></div>
        <div className="row">
          <div className="col-md-6 disp-no-767">
            <img src="assets/images/banner/newsletter.png" alt="newsletter" />
          </div>
          <div className="col-md-6">
            <div id="ec-popnews-box-content">
              <h2>Subscribe Newsletter</h2>
              <p>Subscribe the ekka ecommerce to get in touch and get the future update. </p>
              <form id="ec-popnews-form" action="#" method="post">
                <input type="email" name="newsemail" placeholder="Email Address" required />
                <button type="button" className="btn btn-primary" name="subscribe">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>   
        </>
    )
}

export default Newsletter
