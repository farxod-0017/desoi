import React from 'react'
import '../style/medium.css'

import ShopText from './ShopText'
import ShopCard from './ShopCard'
import ShopBottle from './ShopBottle'
import stars_bl from '../images/star_bl.png'

import lifestyle from '../images/lifestyle.png'

function Medium() {
  return (
    <div className='medium'>
        <div className='light'>
        <div className="w_container">
            <div className="light_grid">
                
                <ShopText title="Medium - bodied"/>
                <div className="light_wrap">
                    <ShopBottle title="Bottle" img={stars_bl} price="$35.59"/>
                    <ShopCard bg={lifestyle} text={`New lifestyle`}/>
                </div>
            </div>
        </div>
        
        </div>
    </div>
  )
}

export default Medium