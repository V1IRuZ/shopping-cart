import Comment from "./Comment";

const CommentSection = ({ reviews }) => {
  return (
    <div className="comment-section">
      <h2>Comments</h2>
      <ul className="comments">
        {reviews.map((review) => (
          <Comment review={review} key={review.reviewerName} />
        ))}
      </ul>
    </div>
  );
};

export default CommentSection;
