import React from 'react'
import '../style/freshP.css'
import { NavLink } from 'react-router-dom'
import shield from '../images/shield.png'
function NewP() {
  return (
    <div className='newP'>
        <section className='freshP'>
        <div className="container">
            <div className="freshP_wrapper">
                <img src={shield} alt="" />
                <div className="freshP_content">
                    <h3>Learn</h3>
                    <h2>Ut enim</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    <NavLink to="/PdP">Shop now</NavLink>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default NewP