import Button from "../../components/ui/Button.jsx";
import StarRating from "../../components/StarRating.jsx";
import PathNavigation from "./PathNavigation.jsx";
import CommentSection from "./CommentSection.jsx";
import AvailabilityStatus from "./AvailabilityStatus.jsx";

const Product = ({ product, handleOnAddToCart }) => {
  return (
    <>
      <PathNavigation product={product} />
      <div className="product">
        <div className="details">
          <div className="main-info">
            <div className="title">
              <h1>{product.title}</h1>
              <StarRating key={product.id} rating={product.rating} />
            </div>
            <div className="price">
              <h3>{product.price} $</h3>
            </div>
          </div>
          <div className="description">
            <h2>Product details</h2>
            <p>{product.description}</p>
          </div>
          <div className="add">
            <Button
              className="add-btn"
              label="ADD TO CART"
              onClick={() => handleOnAddToCart(product)}
            />
            <AvailabilityStatus availability={product.availabilityStatus} />
            <span>{product.shippingInformation}</span>
          </div>
        </div>
        <div className="image">
          <img src={product.thumbnail} alt="" />
        </div>
      </div>
      <CommentSection reviews={product.reviews} />
    </>
  );
};

export default Product;
