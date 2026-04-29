import { formatDecimals, calulateCurrentPrice } from "../../utils/helpers.js";
import Button from "../../components/ui/Button.jsx";

const Checkout = ({ cart, onClick }) => {
  const totalPrice = cart.reduce(
    (total, item) => total + item.quantity * calulateCurrentPrice(item),
    0,
  );

  const fixedTotalPrice = formatDecimals(totalPrice);

  return (
    <>
      <div className="total-order">
        <h2>TOTAL</h2>
        <h2>{fixedTotalPrice} $</h2>
      </div>
      <div className="checkout">
        <Button
          label="PROCEED TO CHECKOUT"
          className="checkout-btn"
          onClick={onClick}
        />
      </div>
    </>
  );
};

export default Checkout;
