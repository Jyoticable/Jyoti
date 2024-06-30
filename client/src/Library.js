import React from 'react'
// import MainSliderCard from './MainSliderCard'
import BannerImage from './BannerImage'

function Library() {
  return (
    <div className='library-main page-width' style={{"margin-top":"50px",
    "margin-bottom":"100px"}}>
    

    <BannerImage desktopImage='./images/certificate-banner.svg' heading='Certificate' color="#792C18"/>

    <div className='certificates' >
            <img src="./images/certificate.jpeg" alt="certificates" data-aos="fade-up"/>
            <img src="./images/certificate.jpeg" alt="certificates" data-aos="fade-up"/>
            <img src="./images/certificate.jpeg" alt="certificates" data-aos="fade-up"/>
            <img src="./images/certificate.jpeg" alt="certificates" data-aos="fade-up"/>
    </div>

    <a href="./images/prd2.png" download style={{"text-decoration":"none"}}>
  <div className='certificate-dwnld-black-box'>
    CE COMPLIANCE CERTIFICATION
  </div>
</a>

    </div>
  )
}

export default Library