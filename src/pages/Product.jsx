const Product = ({ product }) => {
  return (
    <div className="product">
      <div className="title">
        <h1>{product.title}</h1>
        <img src={product.image} alt="" />
      </div>
      <div className="description">
        <p>{product.description}</p>
      </div>
      <button>BUY</button>
    </div>
  );
};

export default Product;
