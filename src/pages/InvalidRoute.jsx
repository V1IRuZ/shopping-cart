import { Link } from "react-router";
import { Frown } from "lucide-react";
import Logo from "../components/Logo.jsx";

const InvalidRoute = () => {
  return (
    <div className="not-found">
      <Frown size={72} />
      <h2>Sorry the page is not found.</h2>
      <Link to="/">
        <p>You can go back to the home page by clicking here, though!</p>
        <Logo />
      </Link>
    </div>
  );
};

export default InvalidRoute;
