import ProductCounter from "../../components/ProductCounter.jsx";
import { formatDecimals, calulateCurrentPrice } from "../../utils/helpers.js";
import { Link } from "react-router";

const CartItem = ({ product, setCart }) => {
  const currentPrice = calulateCurrentPrice(product);
  const totalPrice = product.quantity * currentPrice;
  const fixedTotalPrice = formatDecimals(totalPrice);

  return (
    <li className="cart-item">
      <Link to={`/shop/${product.category}/${product.id}`}>
        <img src={product.image} alt="" />
        <h1 className="title">{product.title}</h1>
      </Link>
      <div className="item-total">
        <ProductCounter product={product} setCart={setCart} />
        <h2 className="price">Price: {fixedTotalPrice} $</h2>
      </div>
    </li>
  );
};

export default CartItem;
