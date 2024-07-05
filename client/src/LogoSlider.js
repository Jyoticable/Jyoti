import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

function LogoSlider() {
  
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: false,
        
        autoplaySpeed: 2000,
        prevArrow:<img src="./images/logo-slider-arrow-2.svg"/> , // Custom previous arrow component
    nextArrow:<img src="./images/logo-slider-arrow-1.svg"/> ,
    responsive: [
      {
        breakpoint: 1000, // screens up to 768px wide
        settings: {
          slidesToShow: 5,
          
        },
      
      },
        {
          breakpoint: 768, // screens up to 768px wide
          settings: {
            slidesToShow:3,
          },
        
        },
        {
          breakpoint: 500, // screens up to 768px wide
          settings: {
            slidesToShow:2,
          },
        
        },
      ],
    };
  
  return (
    <div className='page-width' style={{"margin":"0 auto"}} data-aos="fade-up">
    <div className="logo-slider-main">
        <Slider {...settings}>
            {logo_images.map((data, index) => (
                <div key={index} className="slider-wrapper-logo">
                    <img src={data.image}/>
                </div>
            ))}
        </Slider>
    </div>
</div>
  )
}


const logo_images = [
  {
    image:"./images/logo1.png",
  },
  {
    image:"./images/logo2.svg",
  },
  {
    image:"./images/logo3.svg",
  },
  {
    image:"./images/logo4.svg",
  },
  {
    image:"./images/logo5.svg",
  },
  {
    image:"./images/logo6.svg",
  },
  {
    image:"./images/logo7.svg",
  },
]


export default LogoSlider