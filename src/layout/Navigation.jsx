import Logo from "../components/Logo.jsx";
import { Link } from "react-router";
import { Car, Store } from "lucide-react";
import CartLink from "../features/cart/CartLink.jsx";

const Navigation = ({ cart, showNotification, currentProductId }) => {
  return (
    <nav>
      <ul className="main-links">
        <li className="home-link">
          <Link to="/">
            <Logo />
          </Link>
        </li>
        <li className="shop-link">
          <Link to="/shop">
            <Store size={36} />
            <span>SHOP</span>
          </Link>
        </li>
        <CartLink
          cart={cart}
          showNotification={showNotification}
          currentProductId={currentProductId}
        />
      </ul>
    </nav>
  );
};

export default Navigation;
