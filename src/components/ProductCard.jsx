const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt="" />
      <div className="product-info">
        <h1 className="product-title">{product.title}</h1>
        <h1 className="product-price">{product.price} $</h1>
      </div>
    </div>
  );
};

export default ProductCard;
