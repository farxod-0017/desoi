import React from 'react'
import { useRef } from 'react'
import '../style/faq.css'

function Faq() {
    let qwer = useRef()

  function Accordion(e) {
    if(e.target.id === "plus") {
      let take_elem = e.target.parentElement.nextElementSibling
      take_elem.classList.toggle("show_element")
      e.target.classList.toggle("replace_sign")
    }
  }
  return (
    <section className ='faq'>
        <div className="container">
            <div className="faq_wrapper">
                <div className="faq_text">
                    <h1>Frequently Asked Questions</h1>
                </div>
                <div className="faq_accor">
                    <div className="accor" onClick={(e)=>Accordion(e)}>
                        <div className="liner"></div>
                        <div className="element">
                        <h6>What’s inside the bottle?</h6>
                        <span id='plus'></span>
                        </div>
                        <div className="elem_text" ref={qwer}>
                        <p>Medium-bodied is made with the following 14 botanicals: Strawberry, Birtch root, Apricot...etc. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                        </div>
                        <div className="liner"></div>
                        <div className="element">
                        <h6>How is it made?</h6>
                        <span id='plus'></span>
                        </div>
                        <div className="elem_text" ref={qwer}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, quidem. Praesentium excepturi architecto repellat ullam modi doloribus quae incidunt autem.</p>
                        </div>
                        <div className="liner"></div>
                        <div className="element">
                        <h6>how do you drink medium-bodied?</h6>
                        <span id='plus'></span>
                        </div>
                        <div className="elem_text" ref={qwer}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, quidem. Praesentium excepturi architecto repellat ullam modi doloribus quae incidunt autem.</p>
                        </div>
                        <div className="liner"></div>
                        <div className="element">
                        <h6>can i drink medium-bodied when i amd pragnant or driving?</h6>
                        <span id='plus'></span>
                        </div>
                        <div className="elem_text" ref={qwer}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, quidem. Praesentium excepturi architecto repellat ullam modi doloribus quae incidunt autem.</p>
                        </div>
                        <div className="liner"></div>
                        <div className="element">
                        <h6>How long does a bottle keep?</h6>
                        <span id='plus'></span>
                        </div>
                        <div className="elem_text" ref={qwer}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, quidem. Praesentium excepturi architecto repellat ullam modi doloribus quae incidunt autem.</p>
                        </div>
                        <div className="liner"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Faq