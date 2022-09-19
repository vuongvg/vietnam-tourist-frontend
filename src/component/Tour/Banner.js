import TourBannerImg from '../../images/tourbanner.jpeg';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Banner () {
    return (
      <>
        <div className='bg-cover bg-center bg-norepeat ratio ratio-21x9' style={{backgroundImage:`url(${TourBannerImg})`}}>
            <div className='position-absolute top-50 start-50 translate-middle w-auto h-auto text-white'>
                <div className='d-flex gap-3 justify-content-center mb-3'>
                  <Link to='/' className='text-white'>Home</Link>
                  <div>Tour</div>
                </div>
                <div>
                  <h1 className='text-center fw-bold'>Tour</h1>
                </div>
            </div>
        </div>
      </>
    )
}

export default Banner;