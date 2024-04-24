import React from 'react'
import '../style/ingredients.css'
import earl_gray from '../images/earl_gray.svg'
import rose from '../images/rose.svg'
import pear from '../images/pear.svg'
import birch from '../images/birch-tree.svg'
import black_current from '../images/black-currant.svg'
import bergamot from '../images/bergamot.svg'

function Ingredients() {
  return (
    <section className='ingrds'>
        <div className="container">
            <div className="ingrds_card">
                <h2>Ingredients</h2>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <a href="#!">Ingredient glossAry</a>
            </div>
            <div className="ingrds_grid">
                <div className="grid_card">
                    <img src={earl_gray} alt="" />
                    <h4>earl gray</h4>
                </div>
                <div className="grid_card">
                    <img src={rose} alt="" />
                    <h4>rose</h4>
                </div>
                <div className="grid_card">
                    <img src={pear} alt="" />
                    <h4>pear</h4>
                </div>
                <div className="grid_card">
                    <img src={birch} alt="" />
                    <h4>birch</h4>
                </div>
                <div className="grid_card">
                    <img src={black_current} alt="" />
                    <h4>black currant</h4>
                </div>
                <div className="grid_card">
                    <img src={bergamot} alt="" />
                    <h4>bergamot</h4>
                </div>
            </div>
            <a href="#!" id='IgEg'>Ingredient glossAry</a>
        </div>
    </section>
  )
}

export default Ingredients