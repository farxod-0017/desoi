import React from 'react'
import enjoy from '../images/enjoy.png'
import '../style/enjoy.css'

function Enjoy() {
  return (
    <section className='enjoy'>
        <div className="container">
            <div className="enjoy_wrapper">
                <div className="enjoy_content">
                    <h1>How to enjoy</h1>
                    <div className="enjoy_text">
                        <h4>On the Rocks</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    </div>
                </div>
                <img src={enjoy} alt="" />
                <div className="enjoy_text_mobile">
                    <div className="enjoy_text">                   
                        <h4>On the Rocks</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Enjoy