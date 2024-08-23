import React from "react";
import  "./DomaineApplication.css"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';




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
        <iframe
    width="300"   
    height="315"    
    src="https://www.youtube.com/embed/LpsdF1XnCuM"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
></iframe>

        </SwiperSlide>
        <SwiperSlide className="swiper-slide1">
       
        <iframe
    width="300"   
    height="315"    
    src="https://www.youtube.com/embed/1Chj_txnE0A"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
></iframe>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide1">
        
        <iframe
    width="300"   
    height="315"    
    src="https://youtube.com/embed/iqWcStFQRmg"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
></iframe>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide1">
        
        <iframe
    width="300"   
    height="315"    
    src="https://youtube.com/embed/0qmplCPgQEU"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
></iframe>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide1">
       
        <iframe
    width="300"   
    height="315"    
    src="https://youtube.com/embed/-5PwwiWMkBw"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
></iframe>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide1">
        
        <iframe
    width="300"   
    height="315"    
    src="https://youtube.com/embed/rSvCL8m_0AY"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
></iframe>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide1">
        
        <iframe
    width="300"   
    height="315"    
    src="https://youtube.com/embed/R-6X3TXC7II?feature=share"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
></iframe>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide1">
        
        <iframe
    width="300"   
    height="315"    
    src="https://youtube.com/embed/ndc7vP1xk8c"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
></iframe>
        </SwiperSlide>
     
      </Swiper>
    
</div>


    )
}
    export default DomaineApplication;