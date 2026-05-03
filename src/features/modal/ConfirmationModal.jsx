import Button from "../../components/ui/Button";
import { Link } from "react-router";
import { CheckCircle, CircleX } from "lucide-react";
import styles from "../../styles/ConfirmationModal.module.css";

const ConfirmationModal = ({ ref, onClose }) => {
  return (
    <dialog
      ref={ref}
      onCancel={onClose}
      className={styles.modal}
      data-testid="confirmation"
    >
      <div className={styles.header}>
        <button aria-label="Close" onClick={onClose} className={styles.close}>
          <CircleX size={32} />
        </button>
      </div>
      <div className={styles.content}>
        <CheckCircle size={64} className={styles.icon} />
        <h2 className={styles.text}>THANK YOU FOR YOUR ORDER!</h2>
        <Button
          onClick={onClose}
          label="RETURN TO SHOPPING"
          className={styles.return}
        />
      </div>
    </dialog>
  );
};

export default ConfirmationModal;
