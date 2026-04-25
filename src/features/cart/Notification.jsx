import { X } from "lucide-react";
import styles from "../../styles/Notification.module.css";

const Notification = ({ cart, currentProductId }) => {
  const currentCartProduct = cart?.find((item) => item.id === currentProductId);

  if (!currentCartProduct) return null;

  return (
    <div className={styles.notification}>
      <img src={currentCartProduct.image} alt="" className={styles.image} />
      <span>{currentCartProduct.title}</span>
      <X />
      <span className={styles.quantity}>{currentCartProduct.quantity}</span>
    </div>
  );
};

export default Notification;
