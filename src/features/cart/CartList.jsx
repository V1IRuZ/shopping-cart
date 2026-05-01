import CartItem from "./CartItem.jsx";

const CartList = ({ cart, setCart }) => {
  return (
    <ul>
      {cart.map((item) => (
        <CartItem key={item.id} product={item} setCart={setCart} />
      ))}
    </ul>
  );
};

export default CartList;
