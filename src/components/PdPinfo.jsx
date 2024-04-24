import React from 'react'
import '../style/pdpHero.css'
import starsP from '../images/starsP.png'
import iconF from '../images/iconFace.svg'
import iconP from '../images/iconP.svg'
import iconS from '../images/iconS.svg'
import arrowP from '../images/arrowP.png'

function PdPinfo() {
  return (
    <div className='pdpInfo'>
        <h3>Non-Alcoholic drink</h3>
        <h2>Medium - bodied</h2>
        <p>Light and easy to sip</p>
        <div className="starInfo">
            <img src={starsP} alt="" />
            <span>124 reviews</span>
        </div>
        <h5>Made with natural birch, Strawberry and Apricot, an earthy and fruity taste. </h5>
        <ul>
            <li>・100% Natural ingredients</li>
            <li>・Low Calories </li>
            <li>・Perfect for every occassion</li>
        </ul>
        <div className="share">
            <h6>Share on</h6>
            <img src={iconF} alt="" />
            <img src={iconP} alt="" />
            <img src={iconS} alt="" />
        </div>
        <div className="shTc">
            <h4>Shop the can</h4>
            <img src={arrowP} alt="" />
        </div>
    </div>
  )
}

export default PdPinfo