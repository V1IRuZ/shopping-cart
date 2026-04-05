import { Link } from "react-router";
import Button from "../../components/ui/Button.jsx";
import StarRating from "../../components/StarRating.jsx";

const ProductCard = ({ product, onAddtoCart }) => {

  return (
    <div className="product-card">
      <img src={product.images[0]} alt="" />
      <div className="product-info">
        <Link to={`/shop/${product.category}/${product.id}`}>
          <h1 className="product-title">{product.title}</h1>
          <StarRating rating={5} count={100} />
          <h1 className="product-price">{product.price} $</h1>
        </Link>
      </div>
      <Button label="ADD TO CART" className="add-btn" onClick={onAddtoCart} />
    </div>
  );
};

export default ProductCard;
