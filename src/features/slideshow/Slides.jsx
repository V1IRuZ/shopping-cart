import SlideOne from "./SlideOne.jsx";
import SlideTwo from "./SlideTwo.jsx";
import SlideThree from "./SlideThree.jsx";
import SlideFour from "./SlideFour.jsx";

const Slides = ({ data, activeSlide }) => {
  if (!data) return null;

  const position = activeSlide * 100;

  return (
    <div
      className="slideshow"
      style={{
        transform: `translateX(-${position}%)`,
        transition: "transform 0.5s ease-in-out",
      }}
    >
      <SlideOne data={data} active={activeSlide === 0} />
      <SlideTwo data={data} active={activeSlide === 1} />
      <SlideThree data={data} active={activeSlide === 2} />
      <SlideFour data={data} active={activeSlide === 3} />
    </div>
  );
};

export default Slides;
