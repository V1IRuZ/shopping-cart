import styles from "../styles/ProductImage.module.css";

const ProductImage = ({ product }) => {
  if (product.isDiscount) {
    const roundedDiscount = Math.round(product.discountPercentage);
    return (
      <div className={styles.wrapper}>
        <span className={styles.discount}>-{roundedDiscount}%</span>
        <img className={styles.image} src={product.thumbnail} alt="" />
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <img className={styles.image} src={product.thumbnail} alt="" />
    </div>
  );
};

export default ProductImage;
