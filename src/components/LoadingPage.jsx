import Spinner from "./ui/Spinner.jsx";
import Logo from "./Logo.jsx";

const LoadingPage = () => {
  return (
    <div className="loading">
      <Logo />
      <Spinner />
      <h2>Loading...</h2>
    </div>
  );
};

export default LoadingPage;
