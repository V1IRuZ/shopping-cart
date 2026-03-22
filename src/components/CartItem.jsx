const CartItem = ({ product }) => {
  const totalPrice = product.quantity * product.price;

  return (
    <li className="cart-item">
      <h1>{product.title}</h1>
      <h1>Quantity: {product.quantity}</h1>
      <h1>Price: {totalPrice}</h1>
    </li>
  );
};

export default CartItem;
