import React, { useRef } from 'react'
import straw from '../images/straw.svg'
import birch from '../images/birch.png'
import apricod from '../images/apric.png'
import { NavLink } from 'react-router-dom'

function PdPprice() {
  let qwer = useRef()

  function Accordion(e) {
    if(e.target.id === "plus") {
      let take_elem = e.target.parentElement.nextElementSibling
      //  console.log(take_elem.id);
      //  e.target.parentElement.nextElementSibling.current.classList.toggle("show_elemen")
      // qwer.current.style.display = "none"
      // take_elem.setAttribute("class", "show_element")
      // take_elem.style.display = "block"
      // console.log(qwer);
      take_elem.classList.toggle("show_element")
      e.target.classList.toggle("replace_sign")
    }
  }
  
  return (
    <div className='pdpPrice'>
      <h1>$35.59</h1>
      <h2>adaptogenic Ingredients</h2>
      <div className="ingrd">
        <img src={straw} alt="" />
        <p>Strawberry</p>
        <img src={birch} alt="" />
        <p>Birch</p>
        <img src={apricod} alt="" />
        <p>Apricot</p>
      </div>
      <h2>Quantity</h2>
      <p>Complimentary domestic shipping on 2+ bottles.</p>
      <div className="quantity">
        <div className="number">1</div>
        <div className="number">2</div>
        <div className="number">3</div>
        <div className="number">6</div>
        <div className="number">12</div>
      </div>
      <div className="check">
        <form action="as">
          <div className="one">
            <input type="radio" name="as" id="qw" />
            <h2>$35.59   One time purcahse     </h2>
          </div>
          <div className="one">
            <input type="radio" name="as" id="qw" />
            <h2>$35.59   One time purcahse     </h2>
          </div>
        </form>
      </div>
      <h5>Free domestic shipping over $50</h5>
      <NavLink to="/bag"><button>Add to bag</button></NavLink>
      <div className="accor" onClick={(e)=>Accordion(e)}>
        <div className="element">
          <h6>Details</h6>
          <span id='plus'></span>
        </div>
        <div className="elem_text" ref={qwer}>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, quidem. Praesentium excepturi architecto repellat ullam modi doloribus quae incidunt autem.</p>
        </div>
        <div className="element">
          <h6>Full Ingredients</h6>
          <span id='plus'></span>
        </div>
        <div className="elem_text" ref={qwer}>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, quidem. Praesentium excepturi architecto repellat ullam modi doloribus quae incidunt autem.</p>
        </div>
        <div className="element">
          <h6>Product features</h6>
          <span id='plus'></span>
        </div>
        <div className="elem_text" ref={qwer}>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, quidem. Praesentium excepturi architecto repellat ullam modi doloribus quae incidunt autem.</p>
        </div>
      </div>
    </div>
  )
}

export default PdPprice