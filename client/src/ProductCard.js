import React from 'react'

function ProductCard(props) {
  // console.warn(props)
  // console.warn("mldskj")
  return (
    <div className="prd-card-main" data-aos="fade-up" >
      <img src={props.image} alt="prd-wire" />
      <h3>{props.product_name}</h3>

      <div className="prd-card-overlay">
        <h2>{props.product_name}</h2>
        <p>{props.detail}</p>
      </div>
    </div>
  )
}

export default ProductCard