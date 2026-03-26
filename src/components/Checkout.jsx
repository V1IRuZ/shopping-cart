import { formatDecimals } from "../utils/helpers";
import Button from "./ui/Button";

const Checkout = ({ cart }) => {
  const totalPrice = cart.reduce(
    (total, item) => (total += item.quantity * item.price),
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
