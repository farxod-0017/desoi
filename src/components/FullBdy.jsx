import React from 'react'

import ShopText from './ShopText'
import ShopCard from './ShopCard'
import ShopBottle from './ShopBottle'
import stars_bl from '../images/star_bl.png'
import rich from '../images/richF.png'

function FullBdy() {
  return (
    <div className="medium">
        <div className='fullBdy'>
            <div className='light'>
                <div className="w_container">
                    <div className="light_grid">
                        
                        <ShopText title="Full - bodied"/>
                        <div className="light_wrap">
                            <ShopCard bg={rich} text={`Rich in flavor`}/>
                            <ShopBottle title="Bottle" img={stars_bl} price="$35.59"/>
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
    </div>
    
  )
}

export default FullBdy