import { Link } from "react-router";
import { ShoppingCart } from "lucide-react";

const EmptyCart = () => {
  return (
    <div className="empty">
      <ShoppingCart size={56} color="#231f20" />
      <h3>Your shopping cart is empty.</h3>
      <Link to="/shop">Click here to go shopping</Link>
    </div>
  );
};

export default EmptyCart;
