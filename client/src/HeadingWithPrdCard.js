import React from 'react'
import ProductCard from './ProductCard'
function HeadingWithPrdCard() {
    return (
        <div className='page-width ' data-aos="fade-up">
            
            <div className='heading-width-prdcard-main our-products-box'>
                <h3 className='heading-width-prdcard-main-heading'>OUR PRODUCTS</h3>
                <div className='product-list'>

                    {products.map((product, index) => (
                        <ProductCard key={index} product_name={product.product_name} image={product.image} detail={product.detail} />
                    ))}
                </div>


            </div>


        </div>
    )
}

export default HeadingWithPrdCard



const products = [
    {
        product_name: "LT Power & Control Cable",
        image: "./images/Control an Power Cable.jpg",
        detail:"Our LT XLPE Power Cables provide reliable and efficient performance for low voltage electrical systems. Featuring advanced cross-linked polyethylene insulation, these cables excel in durability and electrical performance, minimizing energy loss and maintenance needs. Ideal for residential, commercial, and industrial applications, they ensure a consistent and effective electricity supply. "
    },
    {
        product_name: "Fire Survival Cable",
        image: "./images/fire-survival-cables-pro.jpg",
        detail:"Vital communication relies on robust optical cables, crucial in emergencies. The sheath, resilient to UV and weather, shields against hazardous substances. Fire-resistant cables, reinforced with steel, ensure durability and mechanical strength, safeguarding the fibres within gel-filled tubes."
    },
    {
        product_name: "Building Wires/ House Wires",
        image: "./images/Building wire.webp",
        detail:"Modern houses emphasize safety and functionality in their electrical systems, primarily using two types of wiring cables: PVC and FR-FRLS. PVC cables are cost-effective, durable, and offer good insulation, with some also being flame-retardant. FR-FRLS cables, on the other hand, enhance safety by reducing fire spread and smoke emission, making them ideal for buildings requiring rapid evacuation, despite being slightly pricier than PVC cables."
    },
    {
        product_name: "Instrumentation/ RTD Cable",
        image: "./images/Instrumentaion Cable.jpg",
        detail:"STANELY instrumentation and signaling cables ensure interference-free signal transmission, essential for electronically controlled and monitored manufacturing processes. These robust interconnection cables are designed for reliability and electromagnetic interference resistance, ensuring optimal performance."
    }, 
    {
        product_name: "Submersible Cable",
        image: "./images/Submersible cable.jpg",
        detail:"3-Core Flat Submersible Pump Cables feature PVC-insulated sheathing tailored for pump motor applications. They boast an abrasion-resistant outer layer and are impervious to grease, oil, and water, offering superior mechanical and electrical characteristics."
    }, 
    {
        product_name: "Thermocouple Extension Cable",
        image: "./images/thermocouple-compensating-cable.jpg",
        detail:"Thermocouple wires, resilient to extreme heat, are sheathed in protective insulation, ideal for diverse applications. They find utility in industrial monitoring, oven and furnace operations, chemical plants, and food production facilities. Withstanding harsh conditions, these cables ensure reliable performance across varied environments."
    }

];