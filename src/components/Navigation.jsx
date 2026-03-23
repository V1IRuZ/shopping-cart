import { Link } from "react-router";
import { ShoppingCart } from "lucide-react";

const Navigation = ({ cart }) => {
  const totalItems = cart.reduce((total, item) => (total += item.quantity), 0);

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li className="cart-link">
          <Link to="/cart">
            {totalItems > 0 && <span>{totalItems}</span>}
            <ShoppingCart size={48} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
