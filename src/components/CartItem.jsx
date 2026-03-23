import { Link } from "react-router";
import { Trash } from "lucide-react";

const CartItem = ({ product, onRemove }) => {
  const totalPrice = product.quantity * product.price;

  return (
    <li className="cart-item">
      <Link to={`/shop/product/${product.id}`}>
        <img src={product.image} alt="" />
        <h1 className="title">{product.title}</h1>
      </Link>
      <div className="item-total">
        <div className="product-options">
          <h2 className="quantity">Quantity: {product.quantity}</h2>
          <button onClick={onRemove}>
            <Trash size={24} />
          </button>
        </div>
        <h2 className="price">Price: {totalPrice} $</h2>
      </div>
    </li>
  );
};

export default CartItem;
