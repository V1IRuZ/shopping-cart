import { formatDecimals, calulateCurrentPrice } from "../utils/helpers.js";

const TotalPrice = ({ cart, className }) => {
  const totalPrice = cart.reduce(
    (total, item) => total + item.quantity * calulateCurrentPrice(item),
    0,
  );

  const fixedTotalPrice = formatDecimals(totalPrice);

  return (
    <div className={className}>
      <h2>TOTAL</h2>
      <h2>{fixedTotalPrice} $</h2>
    </div>
  );
};

export default TotalPrice;
