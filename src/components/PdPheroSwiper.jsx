import React from 'react'
import '../style/pdpHero.css'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import {Navigation, Pagination } from 'swiper/modules';

import funkinP from '../images/funkinP.png'

function PdPheroSwiper() {
  return (
    <div className='PdPswiper'>
        <Swiper
                    slidesPerView={1}
                    spaceBetween={0}
                    centeredSlides={true}
                    navigation={true}
                    pagination={true}
                    loop={true}
                    modules={[ Navigation, Pagination]}
                    className="mySwiperPdP"
                  >
                    <SwiperSlide><img src={funkinP} alt="" /> </SwiperSlide>
                    <SwiperSlide><img src={funkinP} alt="" /> </SwiperSlide>
                    <SwiperSlide><img src={funkinP} alt="" /> </SwiperSlide>
                    <SwiperSlide><img src={funkinP} alt="" /> </SwiperSlide>
                    <SwiperSlide><img src={funkinP} alt="" /> </SwiperSlide>
                  </Swiper>
    </div>
  )
}

export default PdPheroSwiper