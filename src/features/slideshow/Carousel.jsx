import { useState } from "react";
import Slides from "./Slides.jsx";
import "../../styles/Carousel.css";

const Carousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className="carousel">
      <Slides activeSlide={activeSlide} />
    </div>
  );
};

export default Carousel;
