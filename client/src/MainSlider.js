import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import MainSliderCard from './MainSliderCard';

function MainSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: <img src="./images/Group 10.png" alt="prev"/>, // Custom previous arrow component
        nextArrow: <img src="./images/Group 11.png" alt="next"/>,
        responsive: [
            {
                breakpoint: 768, // screens up to 768px wide
                settings: {
                    dots: false,
                },
            },
        ],
    };

    return (
        <div className='page-width' style={{"margin":"0 auto"}} data-aos="fade-up">
            <div className="main-slider-box slider">
                <Slider {...settings}>
                    {sliderData.map((data, index) => (
                        <div key={index} className="slider-wrapper">
                            <MainSliderCard
                                heading={data.heading}
                                subheading={data.subheading}
                                buttonTxt={data.buttonTxt}
                                buttonLink={data.buttonLink}
                                image={data.image}
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

const sliderData = [
    {
        heading: "STANLEY CABLES",
        subheading: "Your Trusted partner Since 1980 at your home and office, leading towards the innovative and sustainable approach for a better and safer future.",
        buttonTxt: "Get Started",
        buttonLink: "#l-i-r-t-h-p",
        image: 'images/slider-big-image.jpeg'
    },
    {
        heading: "STANLEY CABLES",
        subheading: "Your Trusted partner Since 1980 at your home and office, leading towards the innovative and sustainable approach for a better and safer future.",
        buttonTxt: "Get Started",
        buttonLink: "#l-i-r-t-h-p",
        image: 'images/Our-Mission-scaled.jpg'
    },
    {
        heading: "STANLEY CABLES",
        subheading: "Your Trusted partner Since 1980 at your home and office, leading towards the innovative and sustainable approach for a better and safer future.",
        buttonTxt: "Get Started",
        buttonLink: "#l-i-r-t-h-p",
        image: 'images/Slier 3.jpg'
    },
    {
        heading: "STANLEY CABLES",
        subheading: "Your Trusted partner Since 1980 at your home and office, leading towards the innovative and sustainable approach for a better and safer future.",
        buttonTxt: "Get Started",
        buttonLink: "#l-i-r-t-h-p",
        image: 'images/Slide 4.jpg'
    }
    // Add more slides as needed
];

export default MainSlider;
