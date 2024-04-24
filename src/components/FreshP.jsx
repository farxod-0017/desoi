import React from 'react'
import '../style/freshP.css'
import { NavLink } from 'react-router-dom'


function FreshP({type, title, text, img}) {
  return (
    <section className='freshP'>
        <div className="container">
            <div className="freshP_wrapper">
                <div className="freshP_content">
                    <h3>{type}</h3>
                    <h2>{title}</h2>
                    <p>{text}</p>
                    <NavLink to="/PdP">Shop now</NavLink>
                </div>
                <img src={img} alt="" />
            </div>
        </div>
    </section>
  )
}

export default FreshP