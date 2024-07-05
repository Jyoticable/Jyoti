import React from 'react'
import './BannerImage.css'
function BannerImage(props) {
  
  return (
    <div className='banner_image' style={{
      backgroundImage: `url(${props.desktopImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      // height: '450px', // Adjust height as needed
      width: '100%',
      borderRadius:'30px'
    }} data-aos="fade-up">
    <h3 className='banner-heading' style={{color:`${props.color}`}}>{props.heading}</h3>
    </div>
  )
}

export default BannerImage
