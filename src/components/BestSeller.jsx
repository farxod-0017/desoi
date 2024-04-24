import React from 'react'
import '../style/bestSeller.css'
import { NavLink } from 'react-router-dom'

function BestSeller({img, title}) {
  return (
    <div className="seller_card">
      <img src={img} alt="" />
      <h3>{title}</h3>
      <p>Ut enim ad minim veniam, quis nostrud exerp ex ea commodo consequat. </p>
      <NavLink to="/PdP">Shop now</NavLink>
    </div>
  )
}

export default BestSeller