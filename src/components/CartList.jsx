import CartItem from "./CartItem.jsx";

const CartList = ({ cart }) => {
  if (cart.length <= 0) {
    return <h1>Cart is empty...</h1>;
  }

  return (
    <ul>
      {cart.map((item) => (
        <CartItem key={item.id} product={item} />
      ))}
    </ul>
  );
};

export default CartList;
