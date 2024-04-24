import React from 'react'
import '../style/banner.css'
import refer from '../images/refer.png'

function ReferF() {
  return (
    <div className='referF'>
        <section className='banner' style={{backgroundImage:`url(${refer})`}}>
        <div className="container">
            <div className="banner_text">
                <h3>Spread the word</h3>
                <h2>Refer a friend</h2>
                <a href="">Refer now</a>
            </div>
        </div>
    </section>
    </div>
  )
}

export default ReferF