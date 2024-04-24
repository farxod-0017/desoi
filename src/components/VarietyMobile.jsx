import React from 'react'
import ShopBottle from './ShopBottle'
import stars from '../images/stars.png'

function VarietyMobile() {
  return (
    <div>
        <ShopBottle title="Variety Pack" img={stars} price="$91.99 $101.00" mobile="A three-bottle kit with De Soi’s Light, Medium and Full bodied flavors."/>
    </div>
  )
}

export default VarietyMobile