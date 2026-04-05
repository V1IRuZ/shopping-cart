import { CircleCheck } from "lucide-react";

const AvailabilityStatus = ({ availability }) => {
  return (
    <div className="stock">
      {availability === "In Stock" ? (
        <CircleCheck color="green" />
      ) : (
        <CircleCheck color="orange" />
      )}
      <span>{availability}</span>
    </div>
  );
};

export default AvailabilityStatus;
