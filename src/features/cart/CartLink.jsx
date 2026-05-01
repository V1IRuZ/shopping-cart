import { ShoppingCart } from "lucide-react";
import { Link } from "react-router";
import Notification from "./Notification.jsx";
import styles from "../../styles/CartLink.module.css";

const CartLink = ({ cart, showNotification, currentProductId }) => {
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <li className={styles.cart}>
      <Link to="/cart" className={styles.link}>
        {totalItems > 0 && <span className={styles.quantity}>{totalItems}</span>}
        <ShoppingCart className={styles.icon} size={36} />
        <span>CART</span>
      </Link>
      {showNotification && (
        <Notification cart={cart} currentProductId={currentProductId} />
      )}
    </li>
  );
};

export default CartLink;
