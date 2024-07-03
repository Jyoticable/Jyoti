import React from 'react'
// import MainSliderCard from './MainSliderCard.js'
import BannerImage from './BannerImage.js'
import ContactForm from './ContactForm.js'
function ContactUs() {
  return (
<<<<<<< HEAD
    <div className='page-width' style={{
=======
    <div className='page-width' style={{"margin-top":"50px",
>>>>>>> 66135bbf1668af3b61e6f0900e54b6bd38ecde0e
    "margin-bottom":"100px"}}>
<BannerImage desktopImage="./images/contact-banner.svg" heading="Contact us" color="#E4F5FD"/>

<div className='cont-us-details'>

    <h2>
    <span style={{"color":"#d82927"}}>STANLEY</span> INDUSTRIES LIMITED
    </h2>

    <div className='addres-container' data-aos="fade-up">
     <div className='detail-content'>
     <h3>
        ADDRESS
      </h3>
      <p>
      Registered and Corporate Office
B-46/1, 1st 2nd & 3rd Floor, Jhilmil Industrial Area, Shahdara, Delhi-110095</p>
     </div>

     <div className='detail-icon'>
     <i class="fa-solid fa-location-dot"></i>
     </div>

    </div>

    <div className='addres-container' data-aos="fade-up">
     <div className='detail-content'>
     <h3>
     PHONE
      </h3>
      <p style={{"color":"#d82927"}}>
      +91-9810399052 / 
9810012942
      </p>
     </div>

     <div className='detail-icon'>
     <i class="fa-solid fa-phone"></i>
     </div>

    </div>

    <div className='addres-container' data-aos="fade-up">
     <div className='detail-content'>
     <h3>
     EMAIL
      </h3>
      <p style={{"color":"#d82927"}}>
      stanley@gmail.com
      </p>
     </div>

     <div className='detail-icon'>
     <i class="fa-solid fa-envelope"></i>
     </div>

    </div>

</div>

<ContactForm/>
    </div>
  )
}

export default ContactUs