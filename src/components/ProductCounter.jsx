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

  return (
    <div className="product-counter">
      <button>-</button>
      <label htmlFor="">
        <input
          type="text"
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
