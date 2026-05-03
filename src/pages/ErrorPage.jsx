import { CircleX } from "lucide-react";

const ErrorPage = () => {
  return (
    <div className="error">
      <CircleX size={108} color="red" />
      <h2>Something went wrong, try again later.</h2>
    </div>
  );
};

export default ErrorPage;
