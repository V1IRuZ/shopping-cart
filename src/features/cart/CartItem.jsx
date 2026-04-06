import ProductCounter from "../../components/ProductCounter.jsx";
import { formatDecimals } from "../../utils/helpers.js";
import { Link } from "react-router";
import { Trash2 } from "lucide-react";

const CartItem = ({ product, setCart }) => {
  const totalPrice = product.quantity * product.price;
  const fixedTotalPrice = formatDecimals(totalPrice);

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
          />
          <button
            onClick={() =>
              setCart((prev) => prev.filter((item) => item.id !== product.id))
            }
          >
            <Trash2 size={24} />
          </button>
        </div>
        <h2 className="price">Price: {fixedTotalPrice} $</h2>
      </div>
    </li>
  );
};

export default CartItem;
