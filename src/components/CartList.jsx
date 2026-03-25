import CartItem from "./CartItem.jsx";

const CartList = ({ cart, setCart }) => {
  if (cart.length <= 0) {
    return <h1>Cart is empty...</h1>;
  }

  const handleChange = (e, id) => {
    const inputValue = Number(e.target.value);
    const regex = /^\d{0,2}$/;

    if (!regex.test(inputValue)) {
      return;
    }

    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: inputValue } : item,
      ),
    );
  };

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
          handleChange={handleChange}
        />
      ))}
    </ul>
  );
};

export default CartList;
