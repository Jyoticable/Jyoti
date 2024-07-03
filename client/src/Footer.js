import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import './Footer.css';

function Footer() {
    const navigate = useNavigate();
    const navigateTo = (path) => {
        navigate(path);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
      
         <section className='footer'>
             <div className='footer-main page-width'>
            <div className='logo-with-text'>
                <img src="./images/footer-logo.png" onClick={() => navigateTo('/')} />
                <p>
                We at <span style={{"color":"#D82927"}}>Stanley</span> work in tandem with our customers from diverse markets to design, manufacture and test our products to various demanding specifications.
                </p>
            </div>

            <div className='Quick-links'>
                <h3>QUICK LINKS</h3>
                <ul>
                    <li onClick={() => navigateTo('/company-profile')}>ABOUT STANLEY</li>
                    <li onClick={() => navigateTo('/quality')}>QUALITY</li>
                    <li onClick={() => navigateTo('/certificates')}>CERTIFICATE</li>
                    <li onClick={() => navigateTo('/catalouge')}>CATALOGUE</li>
                    <li onClick={() => navigateTo('/product-line')}>PROUCT LINE</li>
                    {/* <li onClick={() => navigateTo('/company-profile')}>LIBRARY</li> */}
                    <li onClick={() => navigateTo('/contact-us')}>CONTACT US</li>
                </ul>
            </div>

            <div className='contact-us-box'>
                <h3>CONTACT US</h3>
<<<<<<< HEAD
                <p><i class="fa-regular fa-envelope"></i>jyoticables7@gamil.com</p>
=======
                <p><i class="fa-regular fa-envelope"></i>stanley@gmail.com</p>
>>>>>>> 66135bbf1668af3b61e6f0900e54b6bd38ecde0e
                <p><i class="fa-solid fa-phone"></i>+91-9810399052 / 9810012942</p>
                <p><i class="fa-solid fa-location-dot"></i>Registered and Corporate Office <br></br> B-46/1, 1st 2nd & 3rd Floor, Jhilmil Industrial Area, Shahdara, Delhi-110095

                </p>
            </div>
        </div>
       
         </section>
     
    )
}

export default Footer