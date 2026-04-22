import { Link } from "react-router";
import StarRating from "../../components/StarRating.jsx";
import styles from "../../styles/CategoryCard.module.css";
import Button from "../../components/ui/Button.jsx";
import ProductImage from "../../components/ProductImage.jsx";
import Price from "../../components/Price.jsx";

const CategoryCard = ({ product, handleAddToCart }) => {
  return (
    <li className={styles.card}>
      <Link
        className={styles.link}
        to={`/shop/${product.category}/${product.id}`}
      >
        <ProductImage product={product} />
        <div className={styles.info}>
          <h1 className={styles.title}>{product.title}</h1>
          <StarRating key={product.id} rating={product.rating} />
          <p className={styles.description}>{product.description}</p>
        </div>
      </Link>
      <div className={styles.order}>
        <Price product={product} />
        <div>
          <Button
            label="ADD TO CART"
            className="add-btn"
            onClick={() => handleAddToCart(product)}
          />
        </div>
      </div>
    </li>
  );
};

export default CategoryCard;
