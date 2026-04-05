import { Star } from "lucide-react";

const StarRating = ({ rating }) => {
  const integer = Math.floor(rating);
  const array = [0, 1, 2, 3, 4];

  return (
    <div className="star-rating" style={{display: "flex"}}>
      {array.map((value) =>
        value < rating && value < integer ? (
          <Star fill="gold" />
        ) : value < rating && value === integer ? (
          <Star fill="#fdec8a" />
        ) : (
          <Star fill="white" />
        ),
      )}
      <span className="rating">{rating}</span>
    </div>
  );
};

export default StarRating;
