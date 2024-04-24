import React from 'react'
import '../style/unique.css'
import UniqueSwiper from './UniqueSwiper'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

function Unique() {
  return (
    <section className='unique'>
        <div className="w_container">
            <div className="unique_top">
                <h5>De soi unique recipes</h5>
            </div>
            <div className="unique_wrapper">
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={1}
                        centeredSlides={true}
                        pagination={true}
                        navigation={true}
                        loop={true}
                        modules={[Navigation, Pagination]}
                        className="mySwiperUnique"
                    >
                        <SwiperSlide><UniqueSwiper/> </SwiperSlide>
                        <SwiperSlide><UniqueSwiper/></SwiperSlide>
                        <SwiperSlide><UniqueSwiper/></SwiperSlide>
                    </Swiper>
            </div>
        </div>
    </section>
  )
}

export default Unique