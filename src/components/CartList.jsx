import CartItem from "./CartItem.jsx";

const CartList = ({ cart, setCart }) => {
  if (cart.length <= 0) {
    return <h1>Cart is empty...</h1>;
  }

  const handleRemove = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);

    setCart(updatedCart);
  };

  return (
    <ul>
      {cart.map((item) => (
        <CartItem
          key={item.id}
          product={item}
          onRemove={() => handleRemove(item.id)}
        />
      ))}
    </ul>
  );
};

export default CartList;
