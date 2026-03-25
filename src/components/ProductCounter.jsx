const ProductCounter = ({ product, setCart, handleRemove }) => {
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

  const handleBlur = (e) => {
    const val = Number(e.target.value);
    if (val <= 0) {
      handleRemove(product.id);
    }
  };

  return (
    <div className="product-counter">
      <button>-</button>
      <label htmlFor="">
        <input
          type="number"
          maxLength={2}
          onChange={(e) => handleChange(e, product.id)}
          value={product.quantity}
          onBlur={(e) => handleBlur(e)}
        />
      </label>
      <button>+</button>
    </div>
  );
};

export default ProductCounter;
