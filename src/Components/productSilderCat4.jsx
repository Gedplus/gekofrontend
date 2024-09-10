import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';

import gekodur from "./Assets/gekodur.pdf"
import "./productSlider.css"
import slide_image_1 from './Assets/cat4-1.png';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import "./productSlider.css"
const ProductSlidercat4 =()=>{
    return(
        <div className="container1 html ">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
         
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
          <div className="image">
            <img src={slide_image_1} alt="slide_image " />
            <div className="imgContent"><p><a className="lienstyle" href={gekodur}>Fiche Technique</a></p></div>
            </div> 
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
    export default ProductSlidercat4;