import React, { useRef } from 'react'
import '../style/header.css'
import { NavLink } from 'react-router-dom'
import Cocktail from '../images/Сocktail.png'
import usa from '../images/usa.svg'
import icon_bag from '../images/icon_bag.svg'
import burger from '../images/burger.svg'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';

function Header() {
  let modal = useRef()
  let m_window = "m_window"
  function showModal(e) {
    modal.current.classList.add("show_modal")
  }
  function closeModal(e) {
    if(e.target.id !== m_window) {
      modal.current.classList.remove("show_modal")
    }
  }
  return (
    <header>
        <div className="modal" ref={modal} onClick={(e)=>closeModal(e)}>
          <div className="modal_window" id='m_window'>
                <NavLink><nav>Home</nav></NavLink>
                <NavLink to="/shop"><select><option value="">Shop</option></select></NavLink>             
                <nav id='m_window'>About</nav>
                <select id='m_window'>
                  <option value="">Fun stuff</option>
                </select>
                <nav id='m_window'>Find us</nav>
                <div className="country" id='m_window'>
                  <img id='m_window' src={usa} alt="" />
                  <select id='m_window'>
                    <option value="">USA</option>
                  </select>
                </div>
                <nav id='m_window'>Contact</nav>
                <nav id='m_window'>Log in</nav>
          </div>
        </div>
        <div className="header_top">
            <div className="container">
                <div className="header_top_wrapper">
                <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        
        navigation={true}
        loop={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><h3>Free domestic shipping on orders over $50<span> Learn  more</span> </h3> </SwiperSlide>
        <SwiperSlide><h3>Free domestic shipping on orders over $50<span> Learn  more</span></h3> </SwiperSlide>
        <SwiperSlide><h3>Free domestic shipping on orders over $50<span> Learn  more</span></h3></SwiperSlide>
        <SwiperSlide><h3>Free domestic shipping on orders over $50<span> Learn  more</span></h3></SwiperSlide>
      </Swiper>
                </div>
            </div>
        </div>
        <div className="header_main">
          <div className="container">
            <div className="header_wrapper">
              <img id='burger' src={burger} alt="" onClick={showModal} />
              <div className="head_left">
                <NavLink to="/shop"><select><option value="">Shop</option></select></NavLink>             
                <nav>About</nav>
                <select>
                  <option value="">Fun stuff</option>
                </select>
                <nav>Find us</nav>
              </div>             
              <NavLink to="/"><img id='logo' src={Cocktail} alt="" /></NavLink>
              <div className="head_right">
                <img src={usa} alt="" />
                <select>
                  <option value="">USA</option>
                </select>
                <nav>Contact</nav>
                <nav>Log in</nav>
                <NavLink to="/bag"><img src={icon_bag} alt="" /></NavLink>
              </div>
              <NavLink to="/bag" id='mobile_bag'><img src={icon_bag} alt=""  /></NavLink>
            </div>
          </div>
        </div>
    </header>
  )
}

export default Header