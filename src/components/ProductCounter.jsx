const ProductCounter = ({ product, setCart, handleRemove }) => {
  const handleChange = (e, id) => {
    const inputValue = e.target.value;
    const regex = /^\d{0,2}$/;

    if (!regex.test(inputValue)) {
      return;
    }

    if (inputValue === "0") {
      return;
    }

    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Number(inputValue) } : item,
      ),
    );
  };

  const handleBlur = (e) => {
    const val = Number(e.target.value);
    if (val <= 0) {
      handleRemove(product.id);
    }
  };

  const handleIncrement = (id) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.id === id && item.quantity < 99) {
          return { ...item, quantity: item.quantity + 1 };
        }

        return item;
      }),
    );
  };

  const handleDecrement = (id) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.id === id && item.quantity > 1) {
          
          return { ...item, quantity: item.quantity - 1 };
        }

        return item;
      }),
    );
  };

  return (
    <div className="product-counter">
      <button onClick={() => handleDecrement(product.id)}>-</button>
      <label htmlFor="">
        <input
          type="text"
          onChange={(e) => handleChange(e, product.id)}
          value={product.quantity}
          onBlur={(e) => handleBlur(e)}
        />
      </label>
      <button onClick={() => handleIncrement(product.id)}>+</button>
    </div>
  );
};

export default ProductCounter;
