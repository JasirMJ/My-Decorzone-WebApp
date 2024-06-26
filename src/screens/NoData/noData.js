import React from 'react';
import Gif from '../../assets/gif/No data.gif'
const NoData = ({ text, url, buttonName }) => {
    return <div className=' w-100 d-flex justify-content-center align-items-center' style={{ height: '50vh', flexDirection: 'column' }}>
        <img src={Gif} alt="" height={'50%'} />
        <h3>{text}</h3>

        <a href={url}>
        {buttonName &&
            <button className='btn btn-danger'>
                {buttonName}
            </button>
        }
        </a>
    </div>

};

export default NoData;
