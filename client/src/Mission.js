import React from 'react'
import BannerImage from './BannerImage'

function Mission() {
  return (
<<<<<<< HEAD
    <div className='page-width mission_page' >
=======
    <div className='page-width mission_page' style={{"paddingTop":"40px"}}>
>>>>>>> 66135bbf1668af3b61e6f0900e54b6bd38ecde0e
        <BannerImage desktopImage="./images/mission-desktop.svg"  heading="MISSION & 
VISION" color="#262626"/>


        <div className='heading-subheading-image-desc' data-aos="fade-right">
            <h3>Our Mission <span> (Why we exist) </span></h3>
<<<<<<< HEAD
                <div style={{"backgroundImage":"url(./images/Our-Mission-scaled.jpg)"}} class="mission_images">

                </div>
            {/* <img src="./images/Our-Mission-scaled.jpg" alt="mission"/> */}
=======

            <img src="./images/Our-Mission-scaled.jpg" alt="mission"/>
>>>>>>> 66135bbf1668af3b61e6f0900e54b6bd38ecde0e

            <p>Stanley Wire and cable's mission is to engineer and manufacture high-performance PVC and FR-FRLS wire and cable solutions that ensure electrical safety, optimize building operation efficiency, and deliver exceptional value to our customer's vision.</p>
        </div>

        <div className='heading-subheading-image-desc' data-aos="fade-left">
            <h3>Our Vision <span>(Where are we going)</span></h3>
<<<<<<< HEAD
            <div style={{"backgroundImage":"url(./images/Our-Vision-scaled.jpg)"}} class="mission_images">

</div>
            {/* <img src="./images/Our-Vision-scaled.jpg" alt="Vision"/> */}
=======

            <img src="./images/Our-Vision-scaled.jpg" alt="Vision"/>
>>>>>>> 66135bbf1668af3b61e6f0900e54b6bd38ecde0e

            <p>To be the preeminent choice for electrical infrastructure by providing innovative PVC and FR-FRLS wire and cable solutions that empower safer, more sustainable, and future-proofed buildings.</p>
        </div>

    </div>
  )
}

export default Mission