import Logo from "../components/Logo.jsx";
import { Link } from "react-router";
import { Car, Store } from "lucide-react";
import CartLink from "../features/cart/CartLink.jsx";
import SearchInput from "../features/search-bar/SearchInput.jsx";

const Navigation = ({ cart, data, showNotification, currentProductId }) => {
  return (
    <nav>
      <ul className="main-links">
        <li className="home-link">
          <Link className="link" to="/">
            <Logo />
          </Link>
        </li>
        <li className="shop-link">
          <Link className="link" to="/shop">
            <Store size={36} />
            <span>SHOP</span>
          </Link>
        </li>
        <SearchInput data={data} />
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
