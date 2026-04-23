import { CircleCheck } from "lucide-react";

const AvailabilityStatus = ({ availability }) => {
  return (
    <div className="stock">
      {availability === "In Stock" ? (
        <CircleCheck data-testid="high" color="green" />
      ) : (
        <CircleCheck data-testid="low" color="orange" />
      )}
      <span>{availability}</span>
    </div>
  );
};

export default AvailabilityStatus;
