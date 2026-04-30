import { useRef } from "react";
import { useOutletContext } from "react-router";
import CartList from "../features/cart/CartList.jsx";
import Checkout from "../features/cart/Checkout.jsx";
import EmptyCart from "../features/cart/EmptyCart.jsx";
import OrderModal from "../features/modal/OrderModal.jsx";
import "../styles/Cart.css";

const Cart = () => {
  const { cart, setCart } = useOutletContext();
  const orderRef = useRef(null);

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const emptyCart = cart.length <= 0;

  if (emptyCart) {
    return <EmptyCart />;
  }

  const handleOpenModal = () => {
    orderRef.current?.showModal();
  };

  const handleCloseModal = () => {
    orderRef.current?.close();
  }

  return (
    <>
      <OrderModal cart={cart} ref={orderRef} onClose={handleCloseModal} />
      <h2 className="cart-total">
        There are <span>{totalItems}</span> products in your cart
      </h2>
      <CartList cart={cart} setCart={setCart} />
      <Checkout cart={cart} onClick={handleOpenModal} />
    </>
  );
};

export default Cart;
