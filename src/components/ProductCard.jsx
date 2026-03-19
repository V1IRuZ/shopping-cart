const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt="" />
      <h1>{product.title}</h1>
      <h1>{product.price}</h1>
    </div>
  );
};

export default ProductCard;
