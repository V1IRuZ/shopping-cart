import { useOutletContext } from "react-router";
import CartList from "../features/cart/CartList.jsx";
import Checkout from "../features/cart/Checkout.jsx";
import EmptyCart from "../features/cart/EmptyCart.jsx";
import "../styles/Cart.css";

const Cart = () => {
  const { cart, setCart } = useOutletContext();

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const emptyCart = cart.length <= 0;

  if (emptyCart) {
    return <EmptyCart />;
  }

  return (
    <>
      <h2 className="cart-total">
        There are <span>{totalItems}</span> products in your cart
      </h2>
      <CartList cart={cart} setCart={setCart} />
      <Checkout cart={cart} />
    </>
  );
};

export default Cart;
