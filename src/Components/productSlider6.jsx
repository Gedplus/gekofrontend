import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';


import "./productSlider.css"
import slide_image_1 from './Assets/cat6-1.png';
import slide_image_2 from './Assets/cat6-2.png';
import slide_image_3 from './Assets/cat6-3.png';
import slide_image_4 from './Assets/cat6-4.png';
import slide_image_5 from './Assets/cat6-5.png';
import slide_image_6 from './Assets/cat6-6.png';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';
const ProductSlidercat6 =()=>{
    return(
        <div className="container1 html ">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container html "
        >
          <SwiperSlide>
            <img src={slide_image_1} alt="slide_image " />
          </SwiperSlide>
     
       
          <SwiperSlide>
            <img src={slide_image_2} alt="slide_image " />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_3} alt="slide_image " />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_4} alt="slide_image " />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_5} alt="slide_image " />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_6} alt="slide_image " />
          </SwiperSlide>
    
     
      
  
          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline" style={{color:"#f6a117"}}></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"  style={{color:"#f6a117"}}></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>


    )
}
    export default ProductSlidercat6;