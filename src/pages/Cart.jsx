import { useOutletContext } from "react-router";
import CartList from "../components/CartList.jsx";

const Cart = () => {
  const { cart, setCart } = useOutletContext();

   return (
    <>
      <h1>Cart</h1>
      <CartList cart={cart} setCart={setCart} />
    </>
  );
};

export default Cart;
