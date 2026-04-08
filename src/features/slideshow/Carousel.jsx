import { useState } from "react";
import Slides from "./Slides.jsx";
import SlideSelectionBar from "./SlideSelectionBar.jsx";
import NextButton from "./NextButton.jsx";
import PreviousButton from "./PreviousButton.jsx";
import "../../styles/Carousel.css";

const Carousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleNext = () => {
    if (activeSlide >= 3) {
      setActiveSlide(0);
      return;
    }

    setActiveSlide((prev) => prev + 1);
  };

  const handlePrevious = () => {
    if (activeSlide <= 0) {
      setActiveSlide(3);
      return;
    }

    setActiveSlide((prev) => prev - 1);
  };

  return (
    <div className="carousel">
      <PreviousButton onClick={handlePrevious} />
      <Slides activeSlide={activeSlide} />
      <NextButton onClick={handleNext} />
      <SlideSelectionBar
        activeSlide={activeSlide}
        setActiveSlide={setActiveSlide}
      />
    </div>
  );
};

export default Carousel;
