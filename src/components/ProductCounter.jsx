import { Plus, Minus, Trash2 } from "lucide-react";
import styles from "../styles/ProductCounter.module.css";

const ProductCounter = ({ product, dispatchCart }) => {
  const handleChange = (e) => {
    const inputValue = e.target.value;
    const regex = /^\d{0,2}$/;

    if (!regex.test(inputValue)) {
      return;
    }

    if (inputValue === "0") {
      return;
    }

    dispatchCart({
      type: "add_quantity",
      id: product.id,
      quantity: Number(inputValue),
    });
  };

  const handleBlur = (e) => {
    const val = Number(e.target.value);
    if (val <= 0) {
      dispatchCart({
        type: "remove",
        id: product.id,
      });
    }
  };

  const handleIncrement = () => {
    if (product.quantity < 99) {
      dispatchCart({
        type: "increment",
        id: product.id,
      });
    }
  };

  const handleDecrement = () => {
    if (product.quantity > 1) {
      dispatchCart({
        type: "decrement",
        id: product.id,
      });
    }
  };

  return (
    <div className={styles.options}>
      <div className={styles.counter}>
        <button
          className={styles.decrement}
          aria-label="decrement"
          onClick={handleDecrement}
        >
          <Minus size={24} />
        </button>
        <label htmlFor="">
          <input
            className={styles.input}
            aria-label="quantity"
            type="text"
            onChange={(e) => handleChange(e)}
            value={product.quantity}
            onBlur={(e) => handleBlur(e)}
          />
        </label>
        <button
          className={styles.increment}
          aria-label="increment"
          onClick={handleIncrement}
        >
          <Plus size={24} />
        </button>
      </div>
      <button
        className={styles.delete}
        aria-label="remove"
        onClick={() =>
          dispatchCart({
            type: "remove",
            id: product.id,
          })
        }
      >
        <Trash2 size={24} />
      </button>
    </div>
  );
};

export default ProductCounter;
