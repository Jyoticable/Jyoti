import React from 'react'
import MainSliderCard from './MainSliderCard';
import './AboutUs.css'
function AboutUs() {
  
  return (
    <div className='about-us-main' style={{"margin-top":"50px"}} >
<div className='page-width'>
      <MainSliderCard heading="COMPANY PROFILE" subheading="Stanley FR-FRLS PVC Insulated Cables have built trust among many houses and corporate buildings since 1980. In the last 43 years, Stanley has stayed firm in its mission to provide fire-proof and PVC-equipped wires to build a safer world for people." buttonTxt="READ MORE" buttonLink="#l-i-r-t-a-u" image="./images/About Stanley Banner.jpg"/>

      </div>
      <div className="left-text-right-image-main page-width" data-aos="fade-right" id="l-i-r-t-a-u">
            
            <div className='left-text-right-image-content'>
                <h3 className='about-us-l-t-r-i'>Our Journey Towards A <span>Better Tomorrow</span></h3>
                {/* <h2 className='l-i-r-t-heading'>Lorem ipsum dolor sit amet consectetur.
                    Suspendisse vel </h2> */}
                <p className='l-i-r-t-description'><span style={{ color: '#D82927', fontWeight: "600" }}
>STANLEY</span> has been serving an assortment of industries for over 40 years now. During this time, our company went beyond its call of duty to create maximum client satisfaction and retention with our state-of-the-art services. Over the years, the stakeholders persisted in evolving and strengthening, which has helped us improvise on our high-value orders.
 <br></br>
<br></br>
                <span style={{ color: '#D82927', fontWeight: "600" }}
>STANLEY</span> has always driven its strength to innovate through evolving market needs. By adapting to these changes with an ethos of endeavour, we succeeded in building a robust business just in time. These factors acted as a driving force to help us establish better services on our manufacturing grounds at Bhiwadi and Pathredi, Rajasthan.
<br></br>
<br></br>
With time, the latest technologies and advanced machinery were introduced into these manufacturing regions, which encouraged our team to plummet into other untapped sectors too. Today, <span style={{ color: '#D82927', fontWeight: "600" }}
>STANLEY</span> contains a powerful line-up of professionals who are career-driven and visualise a more progressive future for our customers, available through our contemporary cable services.
                 </p>
                {/* <button className='l-i-r-t-btn'><a href="google.com">READ MORE</a></button> */}
            </div>
            <div className="card-container-left ">
                <div className="red-card"></div>
                <img src="./images/photo.svg" alt="Spool of Wire" className="left-image" />
            </div>
        </div>


       <div style={{display:"flex", justifyContent:"center" }}> <h3 className='about-black-bg-text-h3' data-aos="fade-left">
                WHO WE ARE
                </h3></div>
                <div className='about-black-bg-text' >
         
                <p>
                From diverse markets to design, manufacture and test our products to various demanding specifications. For us, quality, prompt delivery and competitive prices assure customer satisfaction, our strongest defence against competition and the only path to sustained growth and earnings. It is our progressive corporate culture which allows us to develop and leverage our knowledge, skills, imagination and courage so that a dynamic and result oriented organization is created. <br></br><br></br>
Every worker within our company is a team player. STANLEY increases their potential for development in the company. The company rewards personnel for excellent contributions to its business. It is in this context that we have formulated our HR Policy, which ensures that: <br></br><br></br>
All employees are provided with equal opportunities & challenges and the staff are provided with a safe and healthy work environment and it also enables employees to perform their work efficiently and at the same time provides the flexibility to attand to family and personal responsibilities. <br></br><br></br>
Every effort is made to achieve and maintain effective two-way communication at all levels of management.
                </p>
        </div>



        {/* <div className="left-image-right-text-main about-us-l-i-r-t-main">
            <div className="card-container-left ">
                <div className="red-card"></div>
                <img src="./images/slider-big-image.jpeg" alt="Spool of Wire" className="left-image" />
            </div>
            <div className='about-l-i-r-t'>
                <h3>Management Team</h3>
                <h2><span>STANLEY</span> is handled by a board of directors that Comprises</h2>
                <p>Lorem ipsum dolor sit amet consectetur. Nec amet diam posuere vitae egestas non.
                    Tortor semper sodales elit convallis faucibus faucibus. Amet lobortis nisi id risus nibh ut
                    aliquet at. Tristique eleifend proin dignissim ac donec.</p>
                
            </div>
        </div> */}


        <div className="left-person-right-heading-subheading page-width" data-aos="fade-right">
            <div className='person-with-name'>
                <img src="./images/person.png" alt="person_image"/>
                <h3 className='person-name'>Sunil Agrawal</h3>
                <h4 className='person-position'>Executive Director</h4>
            </div>

            <div className='person-hedading-subheading'>
            <h3 className='p-h-s-h'>
            BOARD OF DIRECTORS
            </h3>
            <p className='p-h-s-s'>
            <span style={{ color: '#D82927' }} >STANLEY</span> is handled by a 
board of director that 
Comprises
            </p>
            </div>
        </div>



        <div className="right-person-left-heading-subheading page-width" data-aos="fade-left">
            <div className='person-with-name'>
                <img src="./images/person.png" alt="person_image"/>
                <h3 className='person-name'>Sunil Agrawal</h3>
                <h4 className='person-position'>Executive Director</h4>
            </div>

            <div className='person-hedading-subheading'>
            <h3 className='p-h-s-h'>
            BOARD OF DIRECTORS
            </h3>
            <p className='p-h-s-s'>
            <span style={{ color: '#D82927' }} >STANLEY</span> is handled by a 
board of director that 
Comprises
            </p>
            </div>
        </div>
    </div>
  )
}

export default AboutUs