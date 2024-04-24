import React from 'react'
import '../style/light.css'
import ShopText from './ShopText'
import ShopCard from './ShopCard'
import bg_light from '../images/bglight.png'
import ShopBottle from './ShopBottle'

import stars_bl from '../images/star_bl.png'

function Light() {
  return (
    <div className='light'>
        <div className="w_container">
            <div className="light_grid">
                <ShopText title="Light - bodied"/>
                <div className="light_wrap">
                    <ShopCard bg={bg_light} text="Happy hour 24/7"/>
                    <ShopBottle title="Bottle" img={stars_bl} price="$35.59"/>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Light