import React from "react";
import "./DomaineApplication.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import required modules
import { EffectCoverflow, Pagination, Navigation } from 'swiper';

const DomaineApplication = () => {
  return (
    <div className="content">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'3'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }} // Add navigation arrows
        speed={600} // Adjust speed for smooth transitions
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        {/* Array of video URLs */}
        {[
          "https://youtube.com/embed/Yfj0zDYYz6E",
          "https://youtube.com/embed/NO4CcB9Ij2E",
          "https://youtube.com/embed/9vX_ybnwNV0",
          "https://youtube.com/embed/1Q9xmc2qyAg",
          "https://youtube.com/embed/FEqnWyHEs2E",
          "https://youtube.com/embed/SOkDJDPxTnU"
        ].map((src, index) => (
          <SwiperSlide key={index} className="swiper-slide1">
            <iframe
              src={src}
              title={`YouTube video player ${index}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="swiper-iframe"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation buttons */}
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </div>
  );
};

export default DomaineApplication;
