import React from 'react'
import MainSliderCard from './MainSliderCard'

function ProductLine() {
  return (
    <div className='product-line-main page-width' style={{
    "margin-bottom":"100px"}}>

<MainSliderCard heading="PRODUCT LINE" subheading="Stanley FR-FRLS and PVC cables stand firm in providing the best solutions to their customers for the last 43 years for providing fireproof and PVC cables and wires to build a safer future for the people." buttonTxt="READ MORE" buttonLink="#p-l-b-l" image="./images/product_line.webp"/>


<h3 class="product-line-stanley-heading" data-aos="fade-up" id="p-l-b-l"><span>Stanley Products</span></h3>

<div className='product-cards-main ' data-aos="fade-up">

    {
        products.map((product, index) => (
            <div className='prd-card' key={index} data-aos="fade-down">
                <img src={product.Prd_image} alt={product["Prd-name"]} />
            
            <h3>{product["Prd-name"]}</h3>
               
               <div className='prd-description-overlay'>
                <h4>{product["Prd-name"]}</h4>
                <p>{product["prd-desc"]}</p>
               </div>
           
            </div>
            
        ))
    }
</div>

    </div>
  )
}

export default ProductLine

const products = [
    {
        "Prd-name": "LT Power & Control Cable",
        "Prd_image": "./images/Control an Power Cable.jpg",
        "prd-desc": "Our LT XLPE Power Cables provide reliable and efficient performance for low voltage electrical systems. Featuring advanced cross-linked polyethylene insulation, these cables excel in durability and electrical performance, minimizing energy loss and maintenance needs. Ideal for residential, commercial, and industrial applications, they ensure a consistent and effective electricity supply."
    },
    {
        "Prd-name": "Submersible Cable",
        "Prd_image": "./images/Submersible cable.jpg",
        "prd-desc": "3-Core Flat Submersible Pump Cables feature PVC-insulated sheathing tailored for pump motor applications. They boast an abrasion-resistant outer layer and are impervious to grease, oil, and water, offering superior mechanical and electrical characteristics."
    },
    {
        "Prd-name": "Industrial Cable",
        "Prd_image": "./images/Building wire.webp",
        "prd-desc": "Modern houses emphasize safety and functionality in their electrical systems, primarily using two types of wiring cables: PVC and FR-FRLS. PVC cables are cost-effective, durable, and offer good insulation, with some also being flame-retardant. FR-FRLS cables, on the other hand, enhance safety by reducing fire spread and smoke emission, making them ideal for buildings requiring rapid evacuation, despite being slightly pricier than PVC cables."
    },
    {
        "Prd-name": "Instrumentational/ RTD Cable",
        "Prd_image": "./images/Instrumentaion Cable.webp",
        "prd-desc": "STANELY instrumentation and signaling cables ensure interference-free signal transmission, essential for electronically controlled and monitored manufacturing processes. These robust interconnection cables are designed for reliability and electromagnetic interference resistance, ensuring optimal performance."
    },
    {
        "Prd-name": "Thermocouple Extension Cable",
        "Prd_image": "./images/thermocouple-compensating-cable.jpg",
        "prd-desc": "Thermocouple wires, resilient to extreme heat, are sheathed in protective insulation, ideal for diverse applications. They find utility in industrial monitoring, oven and furnace operations, chemical plants, and food production facilities. Withstanding harsh conditions, these cables ensure reliable performance across varied environments."
    },
    {
        "Prd-name": "Fire Survival Cable",
        "Prd_image": "./images/fire-survival-cables-pro.webp",
        "prd-desc": "Vital communication relies on robust optical cables, crucial in emergencies. The sheath, resilient to UV and weather, shields against hazardous substances. Fire-resistant cables, reinforced with steel, ensure durability and mechanical strength, safeguarding the fibres within gel-filled tubes."
    },
    {
        "Prd-name": "Mining cable",
        "Prd_image": "./images/mining.svg",
        "prd-desc": "Robust optical cables, essential for vital communication, especially in emergencies, are protected by a UV and weather-resistant sheath that guards against hazardous substances. These cables are further reinforced with steel and are fire-resistant, ensuring their durability and mechanical strength. Inside, the fibers are safely housed in gel-filled tubes, ensuring uninterrupted and secure transmission."
    },
    {
        "Prd-name": "CCTV Cable",
        "Prd_image": "./images/CCTV cable (2).webp",
        "prd-desc": "The STANLEY copper braiding CCTV cable comes in 3+1, 4+1, and 6+1 configurations, blending communication and electrical conductors. It's a hybrid design, integrating both functionalities seamlessly."
    },
    {
        "Prd-name": "Telephone Cable",
        "Prd_image": "./images/telephone cable.png",
        "prd-desc": "Enjoy lightning-fast data transmission with our Telephone Cable, which ensures zero interference from noise, crosstalk, or signal attenuation. This guarantees impeccable clarity in both voice and data communication, making it the perfect choice for seamless connectivity. With this cable, experience crystal-clear conversations and swift data exchange like never before."
    },
    {
        "Prd-name": "Networking Cable",
        "Prd_image": "./images/Networking cable.png",
        "prd-desc": "The reliable backbone for connecting your computers and devices and helps in seamless data flow between your devices."
    },
    {
        "Prd-name": "Coaxial Cable",
        "Prd_image": "./images/Coaxial cable (2).webp",
        "prd-desc": "Block interference and ensure clear transmission for TV, internet, and audio/video connections. Co-axial cables support high bandwidth, are highly durable, and provide high signal strength."
    },
    {
        "Prd-name": "LT Aerial Bunch(A.B) Cable ",
        "Prd_image": "./images/Aerial Cable.webp",
        "prd-desc": "A novel innovation in electrical transmission, the LT Aerial Bunch (A.B) Cable, represents a breakthrough in power distribution. This cutting-edge technology streamlines the process of laying electrical cables, enhancing efficiency and reliability. Its compact design and seamless installation make it a preferred choice for modern electrical networks, revolutionizing the way electricity is transmitted and distributed."
    }
];
