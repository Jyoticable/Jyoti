import React from 'react'
import Nav from './Nav.js'
import MainSlider from './MainSlider.js'
import LeftimageRightText from './LeftimageRightText.js'
import LeftTextRightImage from './LeftTextRightImage.js'
import HeadingWithPrdCard from './HeadingWithPrdCard.js'
import Left_content_right_image from './Left_content_right_image.js'
import LogoSlider from './LogoSlider.js'
import Footer from './Footer.js'
import CopyrightFooter from './CopyrightFooter.js'



function Home() {
  return (
    <div>
        
        <MainSlider/>
        <LeftimageRightText/>
        <LeftTextRightImage/>
        <HeadingWithPrdCard/>
       <Left_content_right_image/>
       {/* <LogoSlider/> */}
      
      
    </div>
  )
}

export default Home