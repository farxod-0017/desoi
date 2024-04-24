import React from 'react'
import '../style/shopText.css'
import earl from '../images/earl.png'
import peach_s from '../images/peach.png'
import pear_s from '../images/PeaR_small.png'

function ShopText({title,}) {
  return (
    <div className='shopText'>
        <h3>{title}</h3>
        <p>-  Delicate and lean to sip -</p>
        <div className="adap">
        <span><h4>Adaptogenic ingredients:</h4>  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </span>
        </div>
        
        <div className="shopText_img">
          <img src={earl} alt="" />
          <img src={peach_s} alt="" />
          <img src={pear_s} alt="" />
        </div>
        <div className="adap">
        <span><h4>Adaptogenic ingredients:</h4>  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </span>
        </div>
    </div>
  )
}

export default ShopText