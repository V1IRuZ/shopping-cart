import SlideOne from "./SlideOne.jsx";
import SlideTwo from "./SlideTwo.jsx";
import SlideThree from "./SlideThree.jsx";
import SlideFour from "./SlideFour.jsx";

const Slides = ({ activeSlide }) => { 

  return (
    <div className="slideshow">
      <SlideOne active={activeSlide === 0} />
      <SlideTwo active={activeSlide === 1} />
      <SlideThree active={activeSlide === 2} />
      <SlideFour active={activeSlide === 3} />
    </div>
  );
};

export default Slides;
