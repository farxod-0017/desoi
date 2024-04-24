import React from 'react'
import '../style/brands.css'
import Brand from './Brand'
import forbes from '../images/forbes.svg'
import saveur from '../images/saveur.svg'
import foodW from '../images/foodW.svg'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import {Pagination } from 'swiper/modules';

function Brands() {
  return (
    <section className='brands'>
        <div className="w_container">
            <div className="brands_wrapper">
            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                slidesPerView={3}
                breakpoints={{
                    200:{
                        slidesPerView:1,
                        spaceBetween:0
                    },
                    700:{
                        slidesPerView:2,
                        spaceBetween:0
                    },
                    999:{
                        slidesPerView:3,
                        spaceBetween:0
                    },
                }}
                loop={true}
                modules={[Pagination]}
                className="mySwiperBrand"
            >
                <SwiperSlide><Brand text="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." img={forbes}/> </SwiperSlide>
                <SwiperSlide><Brand text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " img={saveur}/> </SwiperSlide>
                <SwiperSlide><Brand text="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." img={foodW}/></SwiperSlide>
                <SwiperSlide><Brand text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " img={forbes}/></SwiperSlide>
                <SwiperSlide><Brand text="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." img={saveur}/></SwiperSlide>
                <SwiperSlide><Brand text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " img={foodW}/></SwiperSlide>
            </Swiper>
                
            </div>
        </div>
    </section>
  )
}

export default Brands