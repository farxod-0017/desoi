import React from 'react'
import '../style/homeHero.css'
import hero_img from '../images/hero_img.png'
import { NavLink } from 'react-router-dom'
import hero_cc from '../images/hero_cc.svg'

function HomeHero() {
  return (
    <section className='homeHero'>
      <div className="w_container">
        <div className="homeHero_wrapper">
          <img className='hero_img' src={hero_img} alt="" />
          <div className="hero_card">
            <div className="hero_card_content" style={{backgroundImage:`url(${hero_cc})`}}>
              <h3>New arrival</h3>
              <h1> Lorem ipsum dolor sit amet</h1>
              <NavLink to="/PdP">Shop new</NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeHero