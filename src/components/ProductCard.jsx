import { Link } from "react-router";
import Button from "./ui/Button.jsx";

const ProductCard = ({ product, onAddtoCart }) => {

  return (
    <div className="product-card">
      <img src={product.image} alt="" />
      <div className="product-info">
        <Link to={`/shop/product/${product.id}`}>
          <h1 className="product-title">{product.title}</h1>
          <h1 className="product-price">{product.price} $</h1>
        </Link>
      </div>
      <Button label="ADD TO CART" className="add-btn" onClick={onAddtoCart} />
    </div>
  );
};

export default ProductCard;
