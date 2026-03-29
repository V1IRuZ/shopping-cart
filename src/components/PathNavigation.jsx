import { Link } from "react-router";
import { ChevronRight } from "lucide-react";

const PathNavigation = ({ product }) => {
  const formattedCategory =
    product.category[0].toUpperCase() + product.category.slice(1);

  return (
    <nav className="path-nav">
      <Link to="/">Home</Link>
      <ChevronRight />
      <Link to="/shop">Shop</Link>
      <ChevronRight />
      <Link to={`/shop/${product.category}`}>{formattedCategory}</Link>
    </nav>
  );
};

export default PathNavigation;
