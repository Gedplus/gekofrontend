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
          "https://www.youtube.com/embed/LpsdF1XnCuM",
          "https://www.youtube.com/embed/1Chj_txnE0A",
          "https://youtube.com/embed/iqWcStFQRmg",
          "https://youtube.com/embed/0qmplCPgQEU",
          "https://youtube.com/embed/-5PwwiWMkBw",
          "https://youtube.com/embed/rSvCL8m_0AY",
          "https://youtube.com/embed/R-6X3TXC7II?feature=share",
          "https://youtube.com/embed/ndc7vP1xk8c"
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
