import React from 'react'

function CategorySection() {
    return (
        <>
            <section className="section ec-category-section section-space-p">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="section-title">
                <h2 className="ec-bg-title">Our Top Collection</h2>
                <h2 className="ec-title">Choose Categories</h2>
                <p className="sub-title">Browse The Collection of Top Categories</p>
              </div>
            </div>
          </div>
          <div className="row">
            {/*Category Nav Start */}
            <div className="col-lg-3">
              <ul className="ec-cat-tab-nav nav">
                <li className="cat-item"><a className="cat-link active" data-bs-toggle="tab" href="#tab-cat-1">
                  <div className="cat-icons"><img className="cat-icon" src="assets/images/icons/cat_1.png" alt="cat-icon" /><img className="cat-icon-hover" src="assets/images/icons/cat_1_1.png" alt="cat-icon" /></div>
                  <div className="cat-desc"><span>Clothes</span><span>440 Products</span></div>
                </a></li>
                <li className="cat-item"><a className="cat-link" data-bs-toggle="tab" href="#tab-cat-2">
                  <div className="cat-icons"><img className="cat-icon" src="assets/images/icons/cat_2.png" alt="cat-icon" /><img className="cat-icon-hover" src="assets/images/icons/cat_2_1.png" alt="cat-icon" /></div>
                  <div className="cat-desc"><span>Watches</span><span>510 Products</span></div>
                </a></li>
                <li className="cat-item"><a className="cat-link" data-bs-toggle="tab" href="#tab-cat-3">
                  <div className="cat-icons"><img className="cat-icon" src="assets/images/icons/cat_3.png" alt="cat-icon" /><img className="cat-icon-hover" src="assets/images/icons/cat_3_1.png" alt="cat-icon" /></div>
                  <div className="cat-desc"><span>Bags</span><span>620 Products</span></div>
                </a></li>
                <li className="cat-item"><a className="cat-link" data-bs-toggle="tab" href="#tab-cat-4">
                  <div className="cat-icons"><img className="cat-icon" src="assets/images/icons/cat_4.png" alt="cat-icon" /><img className="cat-icon-hover" src="assets/images/icons/cat_4_1.png" alt="cat-icon" /></div>
                  <div className="cat-desc"><span>Shoes</span><span>320 Products</span></div>
                </a></li>
              </ul>
            </div>
            {/* Category Nav End */}
            {/*Category Tab Start */}
            <div className="col-lg-9">
              <div className="tab-content">
                {/* 1st Category tab end */}
                <div className="tab-pane fade show active" id="tab-cat-1">
                  <div className="row">
                    <img src="assets/images/cat-banner/1.jpg" alt />
                  </div>
                  <span className="panel-overlay">
                    <a href="shop-left-sidebar-col-3.html" className="btn btn-primary">View All</a>
                  </span>
                </div>
                {/* 1st Category tab end */}
                <div className="tab-pane fade" id="tab-cat-2">
                  <div className="row">
                    <img src="assets/images/cat-banner/2.jpg" alt />
                  </div>
                  <span className="panel-overlay">
                    <a href="shop-left-sidebar-col-3.html" className="btn btn-primary">View All</a>
                  </span>
                </div>
                {/* 2nd Category tab end */}
                {/* 3rd Category tab start */}
                <div className="tab-pane fade" id="tab-cat-3">
                  <div className="row">
                    <img src="assets/images/cat-banner/3.jpg" alt />
                  </div>
                  <span className="panel-overlay">
                    <a href="shop-left-sidebar-col-3.html" className="btn btn-primary">View All</a>
                  </span>
                </div>
                {/* 3rd Category tab end */}
                {/* 4th Category tab start */}
                <div className="tab-pane fade" id="tab-cat-4">
                  <div className="row">
                    <img src="assets/images/cat-banner/4.jpg" alt />
                  </div>
                  <span className="panel-overlay">
                    <a href="shop-left-sidebar-col-3.html" className="btn btn-primary">View All</a>
                  </span>
                </div>
                {/* 4th Category tab end */}
              </div>
              {/* Category Tab End */}
            </div>
          </div>
        </div>
      </section>
        </>
    )
}

export default CategorySection
