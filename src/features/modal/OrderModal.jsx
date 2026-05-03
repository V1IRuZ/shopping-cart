import Button from "../../components/ui/Button.jsx";
import TotalPrice from "../../components/TotalPrice.jsx";
import styles from "../../styles/OrderModal.module.css";
import { X, CircleX } from "lucide-react";

const OrderItem = ({ product }) => {
  return (
    <li className={styles.product}>
      <div className={styles.details}>
        <img src={product.image} alt="" className={styles.image} />
        <h2 className={styles.title}>{product.title}</h2>
      </div>
      <div className={styles.amount}>
        <X />
        <span className={styles.quantity}>{product.quantity}</span>
      </div>
    </li>
  );
};

const OrderModal = ({ cart, ref, onCancel, onConfirm }) => {
  return (
    <dialog data-testid="order" ref={ref} className={styles.modal}>
      <div className={styles.header}>
        <h3 className={styles.text}>YOUR ORDER</h3>
        <button
          aria-label="Cancel order"
          className={styles.close}
          onClick={onCancel}
        >
          <CircleX size={32} />
        </button>
      </div>
      <div className={styles.summary}>
        <h3 className={styles.heading}>SUMMARY</h3>
      </div>
      <ul className={styles.list}>
        {cart.map((item) => (
          <OrderItem key={item.id} product={item} />
        ))}
      </ul>
      <TotalPrice cart={cart} className={styles.total} />
      <div className={styles.buttons}>
        <Button
          className={styles.confirm}
          label="CONFIRM"
          onClick={onConfirm}
        />
        <Button className={styles.cancel} label="CANCEL" onClick={onCancel} />
      </div>
    </dialog>
  );
};

export default OrderModal;
