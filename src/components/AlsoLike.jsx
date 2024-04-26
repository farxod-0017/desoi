import React from 'react'
import "../style/alsoLike.css"

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import {Autoplay, Navigation } from 'swiper/modules';
import AlsoCard from './AlsoCard';

function AlsoLike() {
  return (
    <section className='alsoLike'>
        <div className="w_container">
            <h1>You might also like...</h1>
            <div className="alsoLike_wrapper">
            <Swiper
              spaceBetween={0}
              slidesPerView={3}
              centeredSlides={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                1000:{
                  slidesPerView:3,
                  spaceBetween:0
                },
                750:{
                  slidesPerView:3,
                  spaceBetween:0
                },
                350:{
                  slidesPerView:2,
                  spaceBetween:0
                },
                0:{
                  slidesPerView:1,
                }
              }}
              navigation={true}
              loop={true}
              modules={[Navigation, Autoplay]}
              className="mySwiperAlso"
            >
                <SwiperSlide><AlsoCard theme="Full - bodied" title="Bottle"/> </SwiperSlide>
                <SwiperSlide><AlsoCard theme="Light - bodied" title="Bottle"/> </SwiperSlide>
                <SwiperSlide><AlsoCard theme="Eral grey tote" title="Bottle"/></SwiperSlide>
                <SwiperSlide><AlsoCard theme="Medium - bodied" title="Bottle"/></SwiperSlide>
            </Swiper>
            </div>
        </div>
    </section>
  )
}

export default AlsoLike