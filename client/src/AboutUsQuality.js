import React from 'react'
import MainSliderCard from './MainSliderCard'
import './AboutUs.css'
function AboutUsQuality() {
  return (
    <div className='about-us-quality-main page-width' style={{
    "margin-bottom":"100px"}}>
<MainSliderCard heading="QUALITY" subheading="Stanley Cable is unwavering in its commitment to supplying superior quality PVC and FRS cables to our esteemed clientele. These cables are designed to surpass the most rigorous industry standards for safety, performance, and unwavering reliability." buttonTxt="READ MORE" buttonLink="#a-u-q-d" image="./images/hand-shake.jpeg"/>

<div className='about-us-qlty-detail' data-aos="fade-right" id="a-u-q-d">
      <div className='about-us-qlty-detail-left'>
      <h2>
        <span>STANLEY</span><br/> 
        Quality Policy :
        </h2>

        <div className='quality-points'>
            <p>
            <span style={{color:"#D82927"}}>Stanley Cable</span> is unwavering in its commitment to supplying superior quality PVC and FRS cables to our esteemed clientele. These cables are designed to surpass the most rigorous industry standards for safety, performance, and unwavering reliability. We achieve this steadfast commitment through the following core principles:

            </p>
           
        </div>

       
      </div>
      <div className='about-us-qlty-detail-right' >
        <div className="card-container-left ">
                {/* <div className="red-card"></div> */}
                <img src="./images/person.png" alt="Spool of Wire" className="left-image-person" />
            </div>
        </div>
</div>
<br/>
<br/>


<ul className='about-us-quality-ul' data-aos="fade-up">
  <li>
  <span>Uncompromising Product Quality:</span>
  <p>Our Raw Material  are procured from preeminent manufacturers who stringently adhere to meticulous quality control protocols. Every cable we offer is demonstrably compliant with all pertinent national and international standards.</p>
  </li>
  <li>
  <span>Material Traceability Assurance:</span>
  <p>We have implemented a comprehensive and robust material traceability system. This meticulous system empowers us to swiftly identify and effectively address any potential quality concerns that may arise.</p>
  </li>
  <li>
  <span>Relentless Pursuit of Improvement:</span>
  <p>Stanley Cable Solutions embraces a philosophy of continuous improvement across all operational facets, with quality control at the forefront. We conduct regular reviews of our quality management system, readily incorporating advancements based on industry best practices and invaluable customer feedback.</p>
  </li>
  <li>
  <span>Uncompromising Product Quality:</span>
  <p>Our team members are our greatest asset. We invest in their professional development through ongoing training programs encompassing cable selection, proper handling techniques, and optimal storage practices. This ensures they possess the necessary expertise and proficiency to consistently deliver exceptional quality products to our valued customers.</p>
  </li>
  <li>
  <span>Customer-Centric Focus:</span>
  <p>Exceeding customer expectations for quality is paramount to our mission. We foster open communication channels with our customers and address any quality concerns with the utmost urgency and professionalism.</p>
  </li>
</ul>


<div className='left-person-right-heading' data-aos="fade-left">

<img src="./images/person.png" className="left-image-person" alt="person_image"/>

<h3 className='right-reading-person-image'>
<span style={{color:"#D82927"}}>Supporting</span> 
<br></br>
Our Quality Policy:

</h3>

</div>

<ul className='about-us-quality-ul' data-aos="fade-right">
  <li>
  <span>Rigorous Incoming Material Inspection:</span>
  <p>Every incoming cable shipment undergoes a battery of meticulous inspections to verify absolute compliance with our exacting specifications. </p>
  </li>
  <li>
  <span>In-Process Quality Control Measures:</span>
  <p>We have strategically implemented stringent quality control measures throughout the entire production process to identify and effectively 
address any potential issues proactively.</p>
  </li>
  <li>
  <span>Final Product Testing:</span>
  <p>A representative sample from each cable production run is subjected to comprehensive final testing, ensuring unwavering adherence to all 
relevant standards.</p>
  </li>
  <li>
  <span>Valuing Customer Feedback:</span>
  <p>We actively and meticulously analyze customer feedback on our products. This invaluable information guides us in identifying areas for improvement and solidifying our position as a leading provider of superior-quality cable solutions.</p>
  </li>
  
</ul>

    </div>
  )
}

export default AboutUsQuality