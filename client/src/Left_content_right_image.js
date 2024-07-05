import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Left_content_right_image.css'
function Left_content_right_image() {
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
            <div className='left-content-right-image-main '>
            <div className='lcri-content'>
                <h3>
                    STANILEY QUALITY POLICY:
                </h3>
                <p>
                Stanley Cable is unwavering in its commitment to supplying superior quality PVC and FRS cables to our esteemed clientele. These cables are designed to surpass the most rigorous industry standards for safety, performance, and unwavering reliability. We achieve this steadfast commitment through the following core principles:

                </p>

                <button onClick={() => navigateTo('/mission')}>
                    <a>
                        READ MORE
                    </a>
                </button>
            </div>
            <div className='lcri-image'>
                <img src="./images/wire-bundles.png" alt='wire' />
            </div>
        </div>
        </div>
    )
}

export default Left_content_right_image