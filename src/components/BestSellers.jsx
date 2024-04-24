import React from 'react'
import '../style/bestSellers.css'
import BestSeller from './BestSeller'
import seller1 from '../images/seller1.png'
import seller2 from '../images/seller2.png'
import seller3 from '../images/seller3.png'
import seller4 from '../images/seller4.png'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import {Navigation } from 'swiper/modules';


function BestSellers() {
  return (
    <section className='bestSellers'>
        <div className="container">
            <h1>Our best sellers</h1>
            <div className="sellers_wrapper">
                  <Swiper
                    slidesPerView={4}
                    spaceBetween={0}
                    centeredSlides={true}
                    breakpoints={{
                      0: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                      },
                      350: {
                        slidesPerView: 2,
                        spaceBetween: 0,
                      },
                      650: {
                        slidesPerView: 3,
                        spaceBetween: 0,
                      },
                      1050: {
                        slidesPerView: 3,
                        spaceBetween: 0,
                      },
                      1300: {
                        slidesPerView: 4,
                        spaceBetween: 0,
                      },
                    }}
                    navigation={true}
                    loop={true}
                    modules={[ Navigation]}
                    className="mySwiperSeller"
                  >
                    <SwiperSlide><BestSeller img={seller1} title="Ipsum dolor"/> </SwiperSlide>
                    <SwiperSlide><BestSeller img={seller2} title="Consectetur adipiscing"/> </SwiperSlide>
                    <SwiperSlide><BestSeller img={seller3} title="Consequat"/></SwiperSlide>
                    <SwiperSlide><BestSeller img={seller4} title="Commodo"/></SwiperSlide>
                    <SwiperSlide><BestSeller img={seller3} title="Example"/></SwiperSlide>
                  </Swiper>
            </div>
              
        </div>
    </section>
  )
}

export default BestSellers