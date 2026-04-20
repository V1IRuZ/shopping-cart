import { Link } from "react-router";
import Price from "../../components/Price.jsx";
import ProductImage from "../../components/ProductImage.jsx";
import Button from "../../components/ui/Button.jsx";
import StarRating from "../../components/StarRating.jsx";

const ProductCard = ({ product, onAddtoCart }) => {
  return (
    <li className="product-card">
      <Link to={`/shop/${product.category}/${product.id}`}>
      <ProductImage product={product} />
        <div className="product-info">
          <h1 className="product-title">{product.title}</h1>
          <StarRating key={product.id} rating={product.rating} />
          <Price product={product} />
        </div>
      </Link>
      <Button label="ADD TO CART" className="add-btn" onClick={onAddtoCart} />
    </li>
  );
};

export default ProductCard;
