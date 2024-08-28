import React, { useState } from 'react';
import './slider.css';

// Importer les images
import img1 from "../Assets/img/2.png";
import img2 from "../Assets/img/3.png";
import img3 from "../Assets/img/4.png";
import img4 from "../Assets/img/6.png";
import img5 from "../Assets/gekolite.png";
import img6 from "../Assets/img/5.png";
import img7 from "../Assets/1 (42).png";
import img77 from "../Assets/G1.png";
import img8 from "../Assets/img/1.png";

// Les données du slider
const dataSlider = [
  { id: 1, image: img77 },
  { id: 2, image: img8 },
  { id: 3, image: img1 },
  { id: 4, image: img2 },
  { id: 5, image: img3 },
  { id: 6, image: img4 },
  { id: 7, image: img5 },
  { id: 8, image: img6},
];

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % dataSlider.length);
  };

  const prevSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex - 1 + dataSlider.length) % dataSlider.length);
  };

  return (
    <div className='carousel-container'>
      <div className='carousel-slider' style={{ transform: `translateX(-${slideIndex * 100}%)` }}>
        {dataSlider.map((slide) => (
          <div
            key={slide.id}
            className='carousel-slide'
          >
            <img src={slide.image} alt={`Slide ${slide.id}`} />
            <div >
       
            </div>
          </div>
        ))}
      </div>
      <button className='carousel-control prev' onClick={prevSlide}>&lt;</button>
      <button className='carousel-control next' onClick={nextSlide}>&gt;</button>
    </div>
  );
};

export default Slider;
