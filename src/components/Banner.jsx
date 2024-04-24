import React from 'react'
import '../style/banner.css'
import banner from '../images/banner.png'

function Banner() {
  return (
    <section className='banner' style={{backgroundImage:`url(${banner})`}}>
        <div className="container">
            <div className="banner_text">
                <h3>/de · swa/</h3>
                <h2>Ut enim ad minim veniam, quisnostrud exercitation ullamco</h2>
                <a href="">About us</a>
            </div>
        </div>
    </section>
  )
}

export default Banner