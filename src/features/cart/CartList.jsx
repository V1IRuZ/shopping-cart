import CartItem from "./CartItem.jsx";

const CartList = ({ cart, dispatchCart }) => {
  return (
    <ul>
      {cart.map((item) => (
        <CartItem key={item.id} product={item} dispatchCart={dispatchCart} />
      ))}
    </ul>
  );
};

export default CartList;
