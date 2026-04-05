import Button from "../../components/ui/Button.jsx";
import StarRating from "../../components/StarRating.jsx";
import PathNavigation from "./PathNavigation.jsx";

const Product = ({ product }) => {
  return (
    <>
      <PathNavigation product={product} />
      <div className="product">
        <div className="details">
          <div className="title">
            <h1>{product.title}</h1>
            <StarRating
              rating={5}
              count={100}
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
          <img src={product.images[0]} alt="" />
        </div>
      </div>
    </>
  );
};

export default Product;
