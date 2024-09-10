import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';

import cm5 from "./Assets/cm5.pdf"
import cm10 from "./Assets/cm10.pdf"
import cm20 from "./Assets/cm20.pdf"
import cm30 from "./Assets/cm30.pdf"
import eco from "./Assets/eco.pdf"
import "./productSlider.css"
import slide_image_1 from './Assets/cat1-1.png';
import slide_image_2 from './Assets/cat1-2.png';
import slide_image_3 from './Assets/cat1-3.png';
import slide_image_4 from './Assets/cat1-4.png';
import slide_image_5 from './Assets/cat-1-2.png';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import "./productSlider.css"
const ProductSlider =()=>{
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
          <div className="image">
            <img src={slide_image_1} alt="slide_image " />
            <div className="imgContent"><p><a className="lienstyle" href={cm5}>Fiche Technique</a></p></div>
            </div> 
          </SwiperSlide>
          <SwiperSlide>
          <div className="image">
            <img src={slide_image_2} alt="slide_image " />
            <div className="imgContent"><p><a className="lienstyle" href={cm30}>Fiche Technique</a></p></div>
            </div> 
          </SwiperSlide>
          <SwiperSlide>
          <div className="image">
            <img src={slide_image_3} alt="slide_image " />
            <div className="imgContent"><p><a className="lienstyle" href={cm20}>Fiche Technique</a></p></div>
            </div> 
          </SwiperSlide>
          <SwiperSlide>
          <div className="image">
            <img src={slide_image_4} alt="slide_image " />
            <div className="imgContent"><p><a className="lienstyle" href={eco}>Fiche Technique</a></p></div>
            </div> 
          </SwiperSlide>
       
          <SwiperSlide>
          <div className="image">
            <img src={slide_image_5} alt="slide_image " />
            <div className="imgContent"><p><a className="lienstyle" href={cm10}>Fiche Technique</a></p></div>
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
    export default ProductSlider;