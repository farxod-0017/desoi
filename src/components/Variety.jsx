import React from 'react'
import '../style/variety.css'
import ShopText from './ShopText'
import ShopBottle from './ShopBottle'
import star_bl from '../images/star_bl.png'
import star_wh from '../images/stars_wh.png'
import VarietyMobile from './VarietyMobile'

function Variety() {
  return (
    <div className='variety'>
        <div className="w_container">
            <h1>Shop beverages</h1>
            <div className="variety_grid">
                <ShopText title="Variety Pack"/>
                <ShopBottle title="Bottle" img={star_bl} price="$35.59"/>
                <ShopBottle title="Can" img={star_wh} price="$15.00"/>
            </div>
            <div className="variety_grid_mobile">
              <VarietyMobile/>
            </div>
        </div>
    </div>
  )
}

export default Variety