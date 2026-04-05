import Comment from "./Comment";

const CommentSection = ({ reviews }) => {
  const commentKey = crypto.randomUUID();

  return (
    <div className="comment-section">
      <h2>Comments</h2>
      <ul className="comments">
        {reviews.map((review) => (
          <Comment review={review} key={commentKey} />
        ))}
      </ul>
    </div>
  );
};

export default CommentSection;
