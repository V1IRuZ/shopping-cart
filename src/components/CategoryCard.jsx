import { Link } from "react-router";
import StarRating from "./StarRating.jsx";
import styles from "../styles/CategoryCard.module.css";
import Button from "./ui/Button.jsx";

const CategoryCard = ({ product }) => {
  return (
    <li className={styles.card}>
      <Link
        className={styles.link}
        to={`/shop/${product.category}/${product.id}`}
      >
        <div className={styles["image-wrapper"]}>
          <img src={product.images[0]} alt="" className={styles.image} />
        </div>
        <div className={styles.info}>
          <h1 className={styles.title}>{product.title}</h1>
          <StarRating
            rating={5}
            count={100}
          />
          <p className={styles.description}>{product.description}</p>
        </div>
      </Link>
      <div className={styles.order}>
        <h2 className={styles.price}>{product.price} $</h2>
        <div>
          <Button label="ADD TO CART" className="add-btn" />
        </div>
      </div>
    </li>
  );
};

export default CategoryCard;
