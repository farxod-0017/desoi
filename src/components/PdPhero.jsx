import React, { useRef } from 'react'
import PdPinfo from './PdPinfo'
import PdPprice from './PdPprice'
import PdPheroSwiper from './PdPheroSwiper'
import starsP from '../images/starsP.png'
import straw from '../images/straw.svg'
import birch from '../images/birch.png'
import apricod from '../images/apric.png'
import iconF from '../images/iconFace.svg'
import iconP from '../images/iconP.svg'
import iconS from '../images/iconS.svg'
import arrowP from '../images/arrowP.png'


function PdPhero() {
  let qwer = useRef()
  function Accordion(e) {
      if(e.target.id === "plus") {
        let take_elem = e.target.parentElement.nextElementSibling
        take_elem.classList.toggle("show_element")
        e.target.classList.toggle("replace_sign")
      }
}
  return (
    <section className='pdpHero'>
        <div className="container">
            <div className="pdpHero_wrap">
                <PdPinfo/>
                <PdPheroSwiper/>
                <PdPprice/>
            </div>
            <div className="pdpHero_wrap_mini">
              <div className="pdpHero_wrap_mini_swiper">
                <PdPheroSwiper/>
              </div>
              <div className="pdpHero_wrap_mini_text">
                <PdPinfo/>
                <PdPprice/>
              </div>
              <div className="pdpHero_content_mobile">
                <div className="pdpInfo">
                  <h3>Non-Alcoholic drink</h3>
                  <h2>Medium - bodied</h2>
                  <p>Light and easy to sip</p>
                  <div className="starInfo">
                      <img src={starsP} alt="" />
                      <span>124 reviews</span>
                  </div>
                  <div className='pdpPrice'><h1>$35.59</h1></div>
                  <h5>Made with natural birch, Strawberry and Apricot, an earthy and fruity taste. </h5>
                  <ul>
                    <li>・100% Natural ingredients</li>
                    <li>・Low Calories </li>
                    <li>・Perfect for every occassion</li>
                  </ul>
                  <div className="pdpPrice">
                    <h2>Ingredients</h2>
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
                    <button>Add to bag</button>
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
                  <div className="share">
                    <h6>Share on</h6>
                    <img src={iconF} alt="" />
                    <img src={iconP} alt="" />
                    <img src={iconS} alt="" />
                  </div>
                  <div className="shTc">
                      <h4>Shop the can</h4>
                      <img src={arrowP} alt="" />
                  </div>

                      
                 
                </div>
              </div>
            </div>
        </div>
    </section>
  )
}

export default PdPhero