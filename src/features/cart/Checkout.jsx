import { formatDecimals, calulateCurrentPrice } from "../../utils/helpers.js";
import Button from "../../components/ui/Button.jsx";

const Checkout = ({ cart }) => {
  const totalPrice = cart.reduce(
    (total, item) => total + item.quantity * calulateCurrentPrice(item),
    0,
  );

  const fixedTotalPrice = formatDecimals(totalPrice);

  return (
    <div className="checkout">
      <div className="btn">
        <Button label="CHECKOUT" className="checkout-btn" />
      </div>
      <h1>Total: {fixedTotalPrice} $</h1>
    </div>
  );
};

export default Checkout;
