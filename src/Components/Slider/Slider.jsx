import React ,{useState} from 'react'
import './slider.css'
import img1 from "../Assets/banner1.jpg"
import dataSlider from './dataSlider'
import BtnSlider from './BtnSlider'
const Slider = () => {
    const [slideIndex, setSlideIndex] =useState(1)
    const nextSlide =() => {
        if(slideIndex !==dataSlider.length )
      {  setSlideIndex(slideIndex + 1)}
      else if(slideIndex === dataSlider.length){ setSlideIndex(1)}
    }
    const prevSlide =() => {
        if(slideIndex !== 1 )
        {  setSlideIndex(slideIndex - 1)}
        else if (slideIndex === 1) { setSlideIndex(dataSlider.length)}

    }
return(
    <div className='container-slider'>
        {dataSlider.map((obj,index) => {
            return(
                <div  key={obj.id} className={slideIndex === index +1 ? "slide active-anim" : "slide"} >
               
                    <img src={obj.image} />
                    </div>
            )
        })}
        <BtnSlider moveSlide={nextSlide}  direction={"next"}/>
        <BtnSlider moveSlide ={prevSlide} direction={"prev"}/>
    </div>
)


}
export default Slider