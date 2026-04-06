import Comment from "./Comment";

const CommentSection = ({ reviews }) => {

  return (
    <div className="comment-section">
      <h2>COMMENTS</h2>
      <ul className="comments">
        {reviews.map((review, index) => (
          <Comment review={review} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default CommentSection;
