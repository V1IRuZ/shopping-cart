import { Link } from "react-router";
import Logo from "../../components/Logo.jsx";

const SlideFour = ({ active }) => {
  return (
    <div
      data-testid="slide4"
      className="slide four"
      inert={!active}
      aria-hidden={!active}
    >
      <Link tabIndex={active ? 0 : -1} to="/shop">
        <Logo />
        <h4>
          <span className="cheap">CHEAP PRICES.</span>
          <span className="allways">ALLWAYS.</span>
        </h4>
      </Link>
    </div>
  );
};

export default SlideFour;
