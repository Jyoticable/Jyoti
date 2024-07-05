import React from 'react'
import { useNavigate } from 'react-router-dom';

function LeftimageRightText() {
    const navigate = useNavigate();
    const navigateTo = (path) => {
        navigate(path);
        window.scrollTo({
            top: 0,
            
            behavior: 'smooth'
        });
    };
    return (

       <div className='page-width' data-aos="fade-right">
         <div className="left-image-right-text-main " id="l-i-r-t-h-p">
            <div className="card-container-left ">
                <div className="red-card"></div>
                <img src="./images/men-engineer.webp" alt="Spool of Wire" className="left-image" />
            </div>
            <div className='left-image-right-text-content'>
                <h3 className='l-i-r-t-title'>ABOUT US</h3>
                <h2 className='l-i-r-t-heading'>How does your house breathe?  </h2>
                <p className='l-i-r-t-description'>How do commercial establishments respire? Today, right from homes to
institutions, factories to offices, malls to showrooms, spaces breathe 
through wires and cables. Yes! Wires and cables lend life to spaces!
</p>
                <button className='l-i-r-t-btn' onClick={() => navigateTo('/company-profile')}><a>Know More</a></button>
            </div>
        </div>
       </div>
    )
}

export default LeftimageRightText
