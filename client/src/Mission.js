import React from 'react'
import BannerImage from './BannerImage'

function Mission() {
  return (
    <div className='page-width mission_page' >
        <BannerImage desktopImage="./images/mission-desktop.svg"  heading="MISSION & 
VISION" color="#262626"/>


        <div className='heading-subheading-image-desc' data-aos="fade-right">
            <h3>Our Mission <span> (Why we exist) </span></h3>
                <div style={{"backgroundImage":"url(./images/Our-Mission-scaled.jpg)"}} class="mission_images">

                </div>
            {/* <img src="./images/Our-Mission-scaled.jpg" alt="mission"/> */}

            <p>Stanley Wire and cable's mission is to engineer and manufacture high-performance PVC and FR-FRLS wire and cable solutions that ensure electrical safety, optimize building operation efficiency, and deliver exceptional value to our customer's vision.</p>
        </div>

        <div className='heading-subheading-image-desc' data-aos="fade-left">
            <h3>Our Vision <span>(Where are we going)</span></h3>
            <div style={{"backgroundImage":"url(./images/Our-Vision-scaled.jpg)"}} class="mission_images">

</div>
            {/* <img src="./images/Our-Vision-scaled.jpg" alt="Vision"/> */}

            <p>To be the preeminent choice for electrical infrastructure by providing innovative PVC and FR-FRLS wire and cable solutions that empower safer, more sustainable, and future-proofed buildings.</p>
        </div>

    </div>
  )
}

export default Mission