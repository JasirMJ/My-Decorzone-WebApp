import React from 'react'
// import gif from "../assets/images/gif/trans.gif"
// import gif from "../assets/images/loadergif.gif"
import gif from "../assets/gif/swing.gif"
function Preloader() {
    return (
        <div className="se-pre-con">
            <div className="pre-loader d-flex justify-content-center">
                <img className="img-fluid" src={gif} alt="loading" style={{width:'25%'}}  />
            </div>
        </div>
    )
}

export default Preloader
// 222248