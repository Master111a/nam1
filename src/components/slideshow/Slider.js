import React, { useEffect, useRef, useState } from "react";
import SliderContent from "./SliderContent";
import imageSlider from "./imageSlider";
import Dots from "./Dots";
import Arrows from "./Arrows";
import "./slider.css";
const len = imageSlider.length - 1;
function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const interval = useRef();
  useEffect(() => {
    interval.current = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 4000);
    return () => clearInterval(interval.current);
  }, [activeIndex]);
  return (
    <div className="slider-container">
      <SliderContent activeIndex={activeIndex} imageSlider={imageSlider} />
      <Arrows
        prevSlide={() =>
          setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
        }
        nextSlide={() =>
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }
      />
      <Dots
        activeIndex={activeIndex}
        imageSlider={imageSlider}
        onclick={(activeIndex) => setActiveIndex(activeIndex)}
      />
    </div>
  );
}

export default Slider;
