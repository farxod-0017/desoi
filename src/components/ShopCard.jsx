import React from 'react'
import '../style/shopCard.css'

function ShopCard({text, bg}) {
  return (
    <div className='shopCard' style={{backgroundImage:`url(${bg})`}}>
        <h4>{text}</h4>
    </div>
  )
}

export default ShopCard