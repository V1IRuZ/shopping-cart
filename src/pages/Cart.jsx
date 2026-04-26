import { useOutletContext } from "react-router";
import CartList from "../features/cart/CartList.jsx";
import Checkout from "../features/cart/Checkout.jsx";
import "../styles/Cart.css";

const Cart = () => {
  const { cart, setCart } = useOutletContext();

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <h1>There are {totalItems} products in your cart</h1>
      <CartList cart={cart} setCart={setCart} />
      <Checkout cart={cart} />
    </>
  );
};

export default Cart;
