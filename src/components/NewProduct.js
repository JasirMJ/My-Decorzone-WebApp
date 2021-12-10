import React from 'react'
import GridProduct from '../components/GridProduct'


function NewProduct({title, subtitle , Data}) {
    return (
        <>
         <section className="section ec-new-product section-space-p">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="section-title">
                <h2 className="ec-bg-title">{title}</h2>
                <h2 className="ec-title">{title}</h2>
                <p className="sub-title">{subtitle}</p>
              </div>
            </div>
          </div>
          <div className="row">
            {/* New Product Content */}
            <GridProduct />
               <GridProduct />
               <GridProduct />
               <GridProduct />
               <GridProduct />
               <GridProduct />
               <GridProduct />
               <GridProduct />
               <GridProduct />
               <GridProduct />
               <GridProduct />
               <GridProduct />
        
            <div className="col-sm-12 shop-all-btn"><a href="/products">Shop All Collection</a>
            </div>
          </div>
        </div>
      </section>   
        </>
    )
}

export default NewProduct
