import { ChevronLeft } from "lucide-react";

const PreviousButton = ({ onClick }) => {
  return (
    <button className="previous-btn" aria-label="Previous" onClick={onClick}>
      <ChevronLeft size={42} color="white" />
    </button>
  );
};

export default PreviousButton;
