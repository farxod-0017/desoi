import React from 'react'
import '../style/join.css'
import join1 from '../images/join1.png'
import join2 from '../images/join2.png'
import join3 from '../images/join3.png'
import join4 from '../images/join4.png'

function Join() {
  return (
    <section className='join'>
        <div className="w_container">
            <h1>Join us @сocktail</h1>
            <div className="join_grid">
                <img src={join1} alt="" />
                <img src={join2} alt="" />
                <img src={join3} alt="" />
                <img src={join4} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Join