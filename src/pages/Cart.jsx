import { useOutletContext } from "react-router";
import CartList from "../components/CartList.jsx";
import Checkout from "../components/Checkout.jsx";

const Cart = () => {
  const { cart, setCart } = useOutletContext();

  const totalItems = cart.reduce((total, item) => (total += item.quantity), 0);

  return (
    <>
      <h1>There are {totalItems} products in your cart</h1>
      <CartList cart={cart} setCart={setCart} />
      <Checkout cart={cart} />
    </>
  );
};

export default Cart;
