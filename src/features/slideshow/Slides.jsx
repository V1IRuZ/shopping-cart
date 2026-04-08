import SlideOne from "./SlideOne.jsx";
import SlideTwo from "./SlideTwo.jsx";
import SlideThree from "./SlideThree.jsx";
import SlideFour from "./SlideFour.jsx";

const Slides = () => {
  return (
    <div className="slideshow">
      <SlideOne />
      <SlideTwo />
      <SlideThree />
      <SlideFour />
    </div>
  );
};

export default Slides;
