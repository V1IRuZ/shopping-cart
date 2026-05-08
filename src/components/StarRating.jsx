import { Star } from "lucide-react";

const StarRating = ({ rating }) => {
  const integer = Math.floor(rating);
  const array = [0, 1, 2, 3, 4];

  return (
    <div style={{ display: "flex" }}>
      {array.map((value) =>
        value < rating && value < integer ? (
          <Star data-testid={value} key={value} fill="gold" />
        ) : value < rating && value === integer ? (
          <Star data-testid={value} key={value} fill="#fdec8a" />
        ) : (
          <Star data-testid={value} key={value} fill="white" />
        ),
      )}
      <span style={{ marginLeft: "8px", fontWeight: "500" }}>
        ({rating})
      </span>
    </div>
  );
};

export default StarRating;
