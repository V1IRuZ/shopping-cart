import ProductCounter from "./ProductCounter.jsx";
import { Link } from "react-router";
import { Trash2 } from "lucide-react";

const CartItem = ({ product, onRemove, handleChange }) => {
  const totalPrice = product.quantity * product.price;

  return (
    <li className="cart-item">
      <Link to={`/shop/product/${product.id}`}>
        <img src={product.image} alt="" />
        <h1 className="title">{product.title}</h1>
      </Link>
      <div className="item-total">
        <div className="product-options">
          <ProductCounter
            product={product}
            key={product.id}
            onChange={(e) => handleChange(e, product.id)}
            handleRemove={onRemove}
          />
          <button onClick={onRemove}>
            <Trash2 size={24} />
          </button>
        </div>
        <h2 className="price">Price: {totalPrice} $</h2>
      </div>
    </li>
  );
};

export default CartItem;
