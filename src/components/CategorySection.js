import React, { useContext, useEffect, useState } from 'react'
import { AppContext, baseurl } from '../common/Constants';

function CategorySection() {
  const [data, setdata] = useState([]);
  const { userToken } = useContext(AppContext);

  useEffect(() => {
    GetCategory()
  }, []);


  const GetCategory = () => {

    var axios = require('axios');
    var FormData = require('form-data');
    var data = new FormData();

    var config = {
      method: 'get',
      url: baseurl + '/items/category/',
      headers: {
        'Authorization': userToken,

      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        if (response.data.results) {
          setdata(response.data.results)
        }
      })

      .catch(function (error) {
        console.log(error);
      });

  }
  return (
    <>
      <section className="section ec-category-section ec-category-wrapper-3 section-space-p">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center"
            ><div className="section-title">
                <h2 className="ec-bg-title">Categories</h2>
                <h2 className="ec-title">Categories</h2>
                <p className="sub-title">Browse The Collection of Top Categories</p>
              </div>
            </div>
          </div>
          <div className="row cat-space-2 margin-minus-tb-15">
            {data.map(item => (

              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="cat-card">
                  <img className="cat-icon" src={item.image} alt="cat-icon" />
                  <div className="cat-detail">
                    <h4 style={{ color: 'rgb(255, 255, 255)' }}>{item.name}</h4><br /><a className="btn-primary" href={`/category/${item.id}`}>Shop now</a>
                  </div>
                </div>
              </div>
            ))}
          
          </div>
          {/* <div className="ec-pro-pagination"><span /><ul className="ec-pro-pagination-inner" /></div> */}
        </div>
      </section>

    </>
  )
}

export default CategorySection
