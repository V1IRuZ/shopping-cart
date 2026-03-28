import Button from "../components/ui/Button.jsx";
import StarRating from "../components/StarRating.jsx";

const Product = ({ product }) => {
  return (
    <div className="product">
      <div className="details">
        <div className="title">
          <h1>{product.title}</h1>
          <StarRating
            rating={product.rating.rate}
            count={product.rating.count}
          />
        </div>
        <div className="description">
          <h2>Product details</h2>
          <p>{product.description}</p>
        </div>
        <div className="add">
          <Button className="add-btn" label="ADD TO CART" />
        </div>
      </div>
      <div className="image">
        <img src={product.image} alt="" />
      </div>
    </div>
  );
};

export default Product;
