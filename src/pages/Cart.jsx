import { useRef } from "react";
import { useOutletContext, useNavigate } from "react-router";
import CartList from "../features/cart/CartList.jsx";
import Checkout from "../features/cart/Checkout.jsx";
import EmptyCart from "../features/cart/EmptyCart.jsx";
import OrderModal from "../features/modal/OrderModal.jsx";
import ConfirmationModal from "../features/modal/ConfirmationModal.jsx";
import "../styles/Cart.css";

const Cart = () => {
  const { cart, setCart } = useOutletContext();
  const orderRef = useRef(null);
  const confirmationRef = useRef(null);
  const navigate = useNavigate();

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const emptyCart = cart.length <= 0;

  if (emptyCart) {
    return <EmptyCart />;
  }

  const handleOpenOrderModal = () => {
    orderRef.current?.showModal();
  };

  const handleCloseOrderModal = () => {
    orderRef.current?.close();
  };

  const handleOpenConfirmationModal = () => {
    confirmationRef.current?.showModal();
    orderRef.current?.close();
  };

  const handleCloseConfirmationModal = () => {
    setCart([]);
    confirmationRef.current?.close();
    navigate("/");
  };

  return (
    <>
      <OrderModal
        cart={cart}
        ref={orderRef}
        onCancel={handleCloseOrderModal}
        onConfirm={handleOpenConfirmationModal}
      />
      <ConfirmationModal
        ref={confirmationRef}
        onClose={handleCloseConfirmationModal}
      />
      <h2 className="cart-total">
        There are <span>{totalItems}</span> products in your cart
      </h2>
      <CartList cart={cart} setCart={setCart} />
      <Checkout cart={cart} onClick={handleOpenOrderModal} />
    </>
  );
};

export default Cart;
