import React from 'react'
import alsoCardImg from '../images/alsoCardImg.svg'
import alsoStrars from '../images/alsoStars.svg'

function AlsoCard({theme, title}) {
  return (
    <div className='alsoCard'>
        <img src={alsoCardImg} alt="" />
        <h2>{theme}</h2>
        <h4>{title}</h4>
        <img className='alsoStars' src={alsoStrars} alt="" />
        <h3>$35.59</h3>
        <button>Shop now</button>
    </div>
  )
}

export default AlsoCard