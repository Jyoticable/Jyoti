import React from 'react';
import BannerImage from './BannerImage.js';

function LibraryCatalogues() {
    const catalogue = [
        {
            name: "IS:694/2010",
            image: "./images/Certified by-01.webp",
            download: "./images/STANLEY_694_Catalogue.pdf"
        },
        {
            name: "IS:7098-1/88",
            image: "./images/Certified by-02.webp",
            download: "./images/STALEY_CatalogueXLPE.pdf"
        },
        {
            name: "IS:1554-1/88",
            image: "./images/Certified by-03.webp",
            download: "./images/STANLEY_Catalogue_746.pdf"
        }
    ];
    
    return (
        <div className='product-line-main page-width' style={{
           
            marginBottom: '100px'
        }}>

            <BannerImage desktopImage='./images/CT-banner.jpg' heading='Stanley Catalogue' color="#FFFFFF"/>
            <div className='catalouges-heading'><h3>Stanley Catalogue</h3></div>

            <div className='catalogue-certificates-list'>
                {catalogue.map((ctlg, index) => (
                    <div className='ctlg-card' data-aos="fade-down" key={index}>
                        <div className='ctlg-card-wrapper'>
                            <img src={ctlg.image} alt="catalogue"/>
                            <h3>{ctlg.name}</h3>
                        </div>
                        <a className='ctlg-dwnld-btn' href={ctlg.download} download={ctlg.download.split('/').pop()}>
                            Download
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LibraryCatalogues;

