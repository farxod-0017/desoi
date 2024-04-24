import React from 'react'
import '../style/footer.css'

import insta from '../images/insta.svg'
import face from '../images/facebook.svg'
import icon_p from '../images/icon_P.svg'
import twitter from '../images/twitter.svg'
import youtube from '../images/youtube.svg'
import arrow_wh from '../images/Arrow_white.svg'

function Footer() {
  return (
    <footer className='footer'>
        <div className="container">
            <div className="footer_wrapper">
                <div className="letter">
                    <h2>Newsletter</h2>
                    <p>Sign up to save 10% on your next order</p>
                    <div className="input_card">
                        <input type="text" placeholder='Email Address' />
                        <img id='inpt_arrw' src={arrow_wh} alt="" />
                    </div>
                    <div className="footer_icons">
                        <img src={insta} alt="" />
                        <img src={face} alt="" />
                        <img src={icon_p} alt="" />
                        <img src={twitter} alt="" />
                        <img src={youtube} alt="" />
                    </div>
                </div>
                <ul>
                    <h3>explore</h3>
                    <li>Account</li>
                    <li>Gift Card</li>
                    <li>Refer a Friend</li>
                    <li>Affiliates</li>
                    <li>Corporate Gifting</li>
                </ul>
                <ul>
                    <h3>get help</h3>
                    <li>Shop</li>
                    <li>FAQ</li>
                    <li>Shipping & Returns</li>
                    <li>Store Locator</li>
                </ul>
                <ul>
                    <h3>Company</h3>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Blog</li>
                    <li>Press</li>
                </ul>
            </div>
            <div className="footer_bottom">
                <h4>/de · swa/</h4>
                <h5>®2021 Сocktail</h5>
                <a href="#!">Privacy policy</a>
                <a href="#!">Terms of use</a>
                <a href="#!">AMASS</a>
            </div>
        </div>
    </footer>
  )
}

export default Footer