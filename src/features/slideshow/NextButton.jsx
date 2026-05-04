import { ChevronRight } from "lucide-react";

const NextButton = ({ onClick }) => {
  return (
    <button className="next-btn" aria-label="Next" onClick={onClick}>
      <ChevronRight size={42} />
    </button>
  );
};

export default NextButton;
