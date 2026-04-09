import { Play, Pause } from "lucide-react";

const PauseButton = ({ paused, setPaused }) => {
  return (
    <button
      aria-label={paused ? "Play slideshow" : "Pause slideshow"}
      className="pause-btn"
      onClick={() => (paused ? setPaused(false) : setPaused(true))}
    >
      {paused ? <Play fill="black" /> : <Pause fill="black" />}
    </button>
  );
};

export default PauseButton;
