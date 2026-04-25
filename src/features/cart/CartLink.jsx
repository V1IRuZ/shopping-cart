import { ShoppingCart } from "lucide-react";
import { Link } from "react-router";
import Notification from "./Notification.jsx";

const CartLink = ({ cart, showNotification, currentProductId }) => {
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <li className="cart-link">
      <Link to="/cart" className="cart-svg">
        {totalItems > 0 && <span className="total-items">{totalItems}</span>}
        <ShoppingCart size={36} />
        <span className="cart-link-title">CART</span>
      </Link>
      {showNotification && (
        <Notification cart={cart} currentProductId={currentProductId} />
      )}
    </li>
  );
};

export default CartLink;
