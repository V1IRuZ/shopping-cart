import { formatDecimals } from "../utils/helpers.js";
import styles from "../styles/Price.module.css";

const Price = ({ product }) => {
  if (product.isDiscount) {
    const discountPercentage = 1 - (product.discountPercentage / 100);
    const disCountedPrice = product.price * discountPercentage;
    const fixedDiscountedPrice = formatDecimals(disCountedPrice)

    return (
      <h2 className={styles.price}>
        <span className={styles.discount} >{fixedDiscountedPrice}$</span>
        <span className={styles.regular}>{product.price}$</span>
      </h2>
    );
  }

  return <h2 className={styles.normal}>{product.price}$</h2>;
};

export default Price;