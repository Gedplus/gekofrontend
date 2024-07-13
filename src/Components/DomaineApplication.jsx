import React from "react";
import  "./DomaineApplication.css"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';



import video1 from "./Assets/video1.mp4"
import video2 from "./Assets/video2.mp4"
import video3 from "./Assets/video3.mp4"
import video4 from "./Assets/video4.mp4"
import video5 from "./Assets/video5.mp4"
import video6 from "./Assets/video6.mp4"
import video7 from "./Assets/video7.mp4"
import video8 from "./Assets/video8.mp4"

// import required modules
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
const DomaineApplication =()=>{
    return(
        <div class="content">
    
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="swiper-slide1">
        <video preload="auto"  controls>
        <source src={`${video1}` } />
    
        </video>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide1">
        <video preload="auto"  controls>
        <source src={`${video2}` } />
    
        </video>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide1">
        <video preload="auto"  controls>
        <source src={`${video3}` } />
    
        </video>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide1">
        <video preload="auto"  controls>
        <source src={`${video4}` } />
    
        </video>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide1">
        <video preload="auto"  controls>
        <source src={`${video5}` } />
    
        </video>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide1">
        <video preload="auto"  controls>
        <source src={`${video6}` } />
    
        </video>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide1">
        <video preload="auto"  controls>
        <source src={`${video7}` } />
    
        </video>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide1">
        <video preload="auto"  controls>
        <source src={`${video8}` } />
    
        </video>
        </SwiperSlide>
     
      </Swiper>
    
</div>


    )
}
    export default DomaineApplication;