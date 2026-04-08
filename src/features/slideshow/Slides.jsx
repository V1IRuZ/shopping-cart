import SlideOne from "./SlideOne.jsx";
import SlideTwo from "./SlideTwo.jsx";
import SlideThree from "./SlideThree.jsx";
import SlideFour from "./SlideFour.jsx";

const Slides = ({ activeSlide }) => {
  const position = activeSlide * 100;

  return (
    <div
      className="slideshow"
      style={{
        transform: `translateX(-${position}%)`,
        transition: "transform 0.5s ease-in-out",
      }}
    >
      <SlideOne active={activeSlide === 0} />
      <SlideTwo active={activeSlide === 1} />
      <SlideThree active={activeSlide === 2} />
      <SlideFour active={activeSlide === 3} />
    </div>
  );
};

export default Slides;
