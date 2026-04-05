import StarRating from "../../components/StarRating";

const Comment = ({ review }) => {
  const formattedDate = new Date(review.date).toLocaleDateString();

  return (
    <li className="comment">
      <h3>{review.reviewerName}</h3>
      <div className="rating-date">
          <span>{formattedDate}</span>
          <StarRating rating={review.rating} />
      </div>
      <p>{review.comment}</p>
    </li>
  );
};

export default Comment;