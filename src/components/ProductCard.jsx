import { Link } from "react-router";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt="" />
      <div className="product-info">
        <Link to={`/shop/product/${product.id}`}>
          <h1 className="product-title">{product.title}</h1>
          <h1 className="product-price">{product.price} $</h1>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
