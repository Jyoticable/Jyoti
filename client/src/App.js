
import './App.css';
import Home from './Home.js'
import { Routes, Route } from 'react-router-dom';
import Nav from './Nav.js';
import Footer from './Footer.js';
import CopyrightFooter from './CopyrightFooter.js';
import AboutUs from './AboutUs.js';
import AboutUsQuality from './AboutUsQuality.js';
import ProductLine from './ProductLine.js';
import Library from './Library.js';
import LibraryCatalogues from './Library_catalogues.js';
import ContactUs from './ContactUs.js';
import Mission from './Mission.js';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AOS from 'aos';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in milliseconds
    });
  }, [])
  return (
    <div className="App">
    <Nav/>
     <Routes>
     
      <Route path="/" element={<Home/>} />
      <Route path="/company-profile" element={<AboutUs/>}/>
      <Route path="/mission" element={<Mission/>}/>
      <Route path="/quality" element={<AboutUsQuality/>}/>
      <Route path="/product-line" element={<ProductLine/>}/>
      <Route path="/certificates" element={<Library/>}/>
      <Route path="/catalouge" element={<LibraryCatalogues/>}/>
      <Route path="/contact-us" element={<ContactUs/>}/>

      </Routes>
      <Footer/>
   <CopyrightFooter/>
    </div>
  );
}

export default App;
