const ProductCounter = ({ product, onChange, handleRemove }) => {
  return (
    <div className="product-counter">
      <button>-</button>
      <label htmlFor="">
        <input
          type="number"
          maxLength={2}
          onChange={onChange}
          value={product.quantity}
          onBlur={(e) => {
            if (e.target.value <= 0) {
              handleRemove(product.id);
            }
          }}
        />
      </label>
      <button>+</button>
    </div>
  );
};

export default ProductCounter;
