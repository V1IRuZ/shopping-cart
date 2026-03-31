import { CircleX } from "lucide-react";

const ErrorPage = () => {
  return (
    <div className="error">
      <CircleX size={36} color="red" />
      <h1>Something went wrong, try again later.</h1>
    </div>
  );
};

export default ErrorPage;
