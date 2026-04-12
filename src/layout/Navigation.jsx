import { Link } from "react-router";
import { ShoppingCart, Store, House } from "lucide-react";

const Navigation = ({ cart }) => {
  const totalItems = cart.reduce((total, item) => (total += item.quantity), 0);

  return (
    <nav>
      <ul className="main-links">
        <li className="home-link">
          <Link to="/">
            <House size={36} />
            <span>HOME</span>
          </Link>
        </li>
        <li className="shop-link">
          <Link to="/shop">
            <Store size={36} />
            <span>SHOP</span>
          </Link>
        </li>
        <li className="cart-link">
          <Link to="/cart" className="cart-svg">
            {totalItems > 0 && (
              <span className="total-items">{totalItems}</span>
            )}
            <ShoppingCart size={36} />
            <span className="cart-link-title">CART</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
