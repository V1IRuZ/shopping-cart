import ProductCounter from "../../components/ProductCounter.jsx";
import Button from "../../components/ui/Button.jsx";
import StarRating from "../../components/StarRating.jsx";
import ProductImage from "../../components/ProductImage.jsx";
import Price from "../../components/Price.jsx";
import PathNavigation from "./PathNavigation.jsx";
import CommentSection from "./CommentSection.jsx";
import AvailabilityStatus from "./AvailabilityStatus.jsx";
import ShippingInformation from "./ShippingInformation.jsx";

const Product = ({ product, cart, setCart }) => {
  const cartProduct = cart.find((item) => item.id === product.id);

  return (
    <>
      <PathNavigation product={product} />
      <div className="product">
        <ProductImage product={product} />
        <div className="details">
          <div className="main-info">
            <div className="title">
              <h1>{product.title}</h1>
              <StarRating key={product.id} rating={product.rating} />
            </div>
            <Price product={product} />
          </div>
          <div className="description">
            <h2>Product details</h2>
            <p>{product.description}</p>
          </div>
          <div className="add">
            {cartProduct ? (
              <ProductCounter product={cartProduct} setCart={setCart} />
            ) : (
              <Button
                className="add-btn"
                label="ADD TO CART"
                onClick={() =>
                  setCart((prev) => [
                    ...prev,
                    {
                      title: product.title,
                      id: product.id,
                      isDiscount: product.isDiscount,
                      discountPercentage: product.discountPercentage,
                      category: product.category,
                      image: product.thumbnail,
                      price: product.price,
                      quantity: 1,
                    },
                  ])
                }
              />
            )}
            <AvailabilityStatus availability={product.availabilityStatus} />
            <ShippingInformation shipping={product.shippingInformation} />
          </div>
        </div>
      </div>
      <CommentSection reviews={product.reviews} />
    </>
  );
};

export default Product;
