import React from 'react'
import '../style/shopBottle.css'
import funkin from '../images/funkin.png'
import { NavLink } from 'react-router-dom'

function ShopBottle({theme, title, img, price, mobile}) {
  return (
    <div className='shopBottle'>
        <div className="bottle_card">
            <img className='bottle' src={funkin} alt="" />
            <div className="new_round">
                <p>New</p>
            </div>
        </div>
        <h2>{theme}</h2>
        <h4>{title}</h4>
        <div className="star">
            <img src={img} alt="" />
        </div>
        <span>{price}</span>
        <h6>{mobile}</h6>
        <NavLink to="/PdP">Shop now</NavLink>
    </div>
  )
}

export default ShopBottle