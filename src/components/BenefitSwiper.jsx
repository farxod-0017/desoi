import React from 'react'
import BenefitCard from './BenefitCard'
import strawberry from '../images/strawberry.png'
import birch from '../images/birchB.png'
import apricot from "../images/apricot.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination } from 'swiper/modules';

function BenefitSwiper() {
  return (
    <section className='benefit_swiper'>
        <div className="container">
            <div className="benefit_text">
                <h2>Benefits and Ingredients</h2>
                <p><span>Benefits:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
            <div className="benefit_wrap">
                <Swiper
                    spaceBetween={30}
                    slidesPerView={3}
                    centeredSlides={true}
                    autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                    }}
                    breakpoints={{
                        800:{
                            slidesPerView: 3,
                            spaceBetween:30,
                        },
                        730:{
                            slidesPerView: 2,
                            spaceBetween:100,
                        },
                        600:{
                            slidesPerView: 2,
                            spaceBetween:10,
                        },
                        0:{
                            slidesPerView: 1,
                            spaceBetween:10,
                        }
                    }}
                    pagination={true}
                    loop={true}
                    modules={[Autoplay, Pagination]}
                    className="mySwiperBenefit"
                >
                    <SwiperSlide><BenefitCard img={strawberry} title="Strawberry"/> </SwiperSlide>
                    <SwiperSlide><BenefitCard img={birch} title="Birch"/> </SwiperSlide>
                    <SwiperSlide><BenefitCard img={apricot} title="Apricot"/></SwiperSlide>
                    <SwiperSlide><BenefitCard img={birch} title="Birch"/></SwiperSlide>
                </Swiper>                
            </div>
            <h5>Ingredient Glossary</h5>
        </div>
    </section>
  )
}

export default BenefitSwiper