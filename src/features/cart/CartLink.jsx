import { ShoppingCart } from "lucide-react";
import { Link } from "react-router";
import { ShopContext } from "../../context/ShopContext.js";
import { useContext } from "react";
import Notification from "./Notification.jsx";
import styles from "../../styles/CartLink.module.css";

const CartLink = () => {
  const { cart, showNotification, currentProductId } = useContext(ShopContext);
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <li className={styles.cart}>
      <Link to="/cart" className={styles.link}>
        {totalItems > 0 && (
          <span className={styles.quantity}>{totalItems}</span>
        )}
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
