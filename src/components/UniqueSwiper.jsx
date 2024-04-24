import React from 'react'
import '../style/unique.css'

import unique from '../images/unique.png'
import funkinU from '../images/funkinU.png'

function UniqueSwiper() {
  return (
    <div className='uniqueSwiper'>
        <div className="unique_img">
            <img src={unique} alt="" />
            <img id='funkinU' src={funkinU} alt="" />
        </div>
        <div className="unique_text">
            <h2>Tom Collins Jr.</h2>
            <h4>Ingredients</h4>
            <ul>
                <li>3 oz Riverine</li>
                <li>3/4 oz Lemon Juice</li>
                <li>3/4 oz Simple Syrup</li>
                <li>Club Soda</li>
            </ul>
            <h3>View Full recipe</h3>
        </div>
    </div>
  )
}

export default UniqueSwiper