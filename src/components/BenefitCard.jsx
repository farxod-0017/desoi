import React from 'react'

function BenefitCard({img, title}) {
  return (
    <div className='benefit_card'>
        <img src={img} alt="" />
        <h4>{title}</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
    </div>
  )
}

export default BenefitCard