import PauseButton from "./PauseButton.jsx";

const SlideSelectionBar = ({
  activeSlide,
  setActiveSlide,
  paused,
  setPaused,
}) => {
  return (
    <ul className="selection-bar">
      <li>
        <button
          aria-label="Slide 1"
          className={activeSlide === 0 ? "active" : null}
          onClick={() => {
            setActiveSlide(0);
          }}
        ></button>
      </li>
      <li>
        <button
          aria-label="Slide 2"
          className={activeSlide === 1 ? "active" : null}
          onClick={() => {
            setActiveSlide(1);
          }}
        ></button>
      </li>
      <li>
        <button
          aria-label="Slide 3"
          className={activeSlide === 2 ? "active" : null}
          onClick={() => {
            setActiveSlide(2);
          }}
        ></button>
      </li>
      <li>
        <button
          aria-label="Slide 4"
          className={activeSlide === 3 ? "active" : null}
          onClick={() => {
            setActiveSlide(3);
          }}
        ></button>
      </li>
      <li className="pause">
        <PauseButton paused={paused} setPaused={setPaused} />
      </li>
    </ul>
  );
};

export default SlideSelectionBar;
