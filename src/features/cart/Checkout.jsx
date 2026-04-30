import Button from "../../components/ui/Button.jsx";
import TotalPrice from "../../components/TotalPrice.jsx";

const Checkout = ({ cart, onClick }) => {
  return (
    <>
      <TotalPrice cart={cart} className="total-order" />
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
