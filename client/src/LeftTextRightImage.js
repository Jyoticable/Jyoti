import React from 'react'
import { useNavigate } from 'react-router-dom';
function LeftTextRightImage() {
  const navigate = useNavigate();
    const navigateTo = (path) => {
        navigate(path);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
  return (
    <div className='page-width' data-aos="fade-left">
        <div className="left-text-right-image-main ">
            
            <div className='left-text-right-image-content'>
                <h3 className='l-i-r-t-title'>INFRASTRUCTURE</h3>
                <h2 className='l-i-r-t-heading'>STANLEY is located in 
prime industrial area in 
Northern India.</h2>
                <p className='l-i-r-t-description'>Our reputation precedes us. We boast one of the industry's most extensive 
cable portfolios, actively supporting major infrastructure projects around 
the world. This deep experience translates into unparalleled know-how for 
your infrastructure needs.
We offer a vast selection of cables adhering to various national and international 
standards, while also customizing solutions to meet your specific project requirements.
</p>
                <button className='l-i-r-t-btn' onClick={() => navigateTo('/company-profile')}><a>Know More</a></button>
            </div>
            <div className="card-container-left ">
                <div className="red-card"></div>
                <img src="./images/slider-big-image.jpeg" alt="Spool of Wire" className="left-image" />
            </div>
        </div>
    </div>
  )
}

export default LeftTextRightImage