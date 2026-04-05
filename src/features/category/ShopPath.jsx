import { Link } from "react-router";
import { ChevronRight } from "lucide-react";

const ShopPath = () => {
  return (
    <nav className="shop-path">
      <Link to="/">Home</Link>
      <ChevronRight />
      <Link to="/shop">Shop</Link>
    </nav>
  );
};

export default ShopPath;
