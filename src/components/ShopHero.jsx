import React from 'react'
import '../style/shopHero.css'
import { NavLink } from 'react-router-dom'
import arrow_black from '../images/arrow_black.png'

function ShopHero() {
  return (
    <div className='shopHero'>
        <div className="container">
            <div className="shopHeroText">
                <NavLink to="/">Home</NavLink>
                <img src={arrow_black} alt="" />
                <span>Beverages</span>
            </div>
        </div>
    </div>
  )
}

export default ShopHero