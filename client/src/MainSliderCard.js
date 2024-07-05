import React from 'react';

function MainSliderCard({ heading, subheading, buttonTxt, buttonLink, image }) {
    const handleClick = () => {
        const element = document.querySelector(buttonLink);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='slider-card' data-aos="fade-up">
            <div className="slider-content-box">
                {heading && (
                    <h2>{heading}</h2>
                )}
                {subheading && (
                    <p>{subheading}</p>
                )}
                {buttonLink && (
                    <button className='main-slider-button' onClick={handleClick}>
                    {buttonTxt}
                    </button>
                )}
            </div>
            <div className="slider-image-box">
                <img src={image} alt="bundle"/>
            </div>
        </div>
    );
}

export default MainSliderCard;
