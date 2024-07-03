import React from 'react'
// import MainSliderCard from './MainSliderCard.js'
import BannerImage from './BannerImage.js'
function LibraryCatalogues() {
    return (
        <div className='product-line-main page-width' style={{
            "margin-top": "50px",
            "margin-bottom": "100px"
        }}>

            <BannerImage desktopImage='./images/CT-banner.jpg' heading='Stanley Catalogue' color="#FFFFFF"/>
            <div className='catalouges-heading'><h3>Stanley Catalogue</h3></div>

            <div className='catalogue-certificates-list'>
                {catalogue.map((ctlg, index) => (

                    <div className='ctlg-card' data-aos="fade-down">
                        <div className='ctlg-card-wrapper'> <img src={ctlg.image} alt="catalogue"/>
                            <h3>{ctlg.name}</h3></div>

                            <a className='ctlg-dwnld-btn' href={ctlg.download} download>
                                Download
                            </a>
                    </div>
                ))}
            </div>

            {/* <a href="./images/prd2.png" download style={{ "text-decoration": "none" }}>
                <div className='certificate-dwnld-black-box'>
                    DOWNLOAD CATALOGUE
                </div>
            </a> */}
        </div>
    )
}

export default LibraryCatalogues


const catalogue = [
    {
        "name": "IS:694/2010",
        "image": "./images/Certified by-01.webp",
       "download":"STANLEY_694_Catalogue.pdf"
    },
    {
        "name": "IS:7098-1/88",
        "image": "./images/Certified by-02.webp",
        "download":"STALEY_CatalogueXLPE.pdf"
    },
    {
        "name": "IS:1554-1/88",
        "image": "./images/Certified by-03.webp",
        "download":"STANLE_Catalogue_746.pdf"
    },
   
]
