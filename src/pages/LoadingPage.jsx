import Spinner from "../components/ui/Spinner.jsx";
import Logo from "../components/Logo.jsx"

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
