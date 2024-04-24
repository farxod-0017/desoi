import React from 'react'
import '../style/brand.css'
import comma from '../images/comma.svg'
import commaF from '../images/commaF.svg'

function Brand({text, img}) {
  return (
    <div className="brand_card">
        <img src={comma} alt="" />
        <p>{text}</p>
        <img src={commaF} alt="" />
        <img src={img} alt="" id='brand_logo' />
    </div>
  )
}

export default Brand