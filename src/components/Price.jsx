import { formatDecimals } from "../utils/helpers.js";

const Price = ({ product, className }) => {
  if (product.isDiscount) {
    const discountPercentage = 1 - (product.discountPercentage / 100);
    const disCountedPrice = product.price * discountPercentage;
    const fixedDiscountedPrice = formatDecimals(disCountedPrice)

    return (
      <h2 className={`${className} discount`}>
        <span className="new">{fixedDiscountedPrice}$</span>
        <span className="old">{product.price}$</span>
      </h2>
    );
  }

  return <h2>{product.price}$</h2>;
};

export default Price;