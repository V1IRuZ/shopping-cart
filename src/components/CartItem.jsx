import ProductCounter from "./ProductCounter.jsx";
import { formatDecimals } from "../utils/helpers.js";
import { Link } from "react-router";
import { Trash2 } from "lucide-react";

const CartItem = ({ product, cart, setCart }) => {
  const totalPrice = product.quantity * product.price;
  const fixedTotalPrice = formatDecimals(totalPrice);

  const handleRemove = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);

    setCart(updatedCart);
  };

  return (
    <li className="cart-item">
      <Link to={`/shop/${product.category}/${product.id}`}>
        <img src={product.image} alt="" />
        <h1 className="title">{product.title}</h1>
      </Link>
      <div className="item-total">
        <div className="product-options">
          <ProductCounter
            product={product}
            key={product.id}
            setCart={setCart}
            handleRemove={handleRemove}
          />
          <button onClick={() => handleRemove(product.id)}>
            <Trash2 size={24} />
          </button>
        </div>
        <h2 className="price">Price: {fixedTotalPrice} $</h2>
      </div>
    </li>
  );
};

export default CartItem;
