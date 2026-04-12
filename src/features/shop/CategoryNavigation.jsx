import { Link } from "react-router";

const CategoryNavigation = () => {
  return (
    <nav className="category-nav">
      <ul className="category-list">
        <li>
          <Link to="/shop/beauty">BEAUTY</Link>
        </li>
        <li>
          <Link to="/shop/fragrances">FRAGRANCES</Link>
        </li>
        <li>
          <Link to="/shop/furniture">FURNITURE</Link>
        </li>
        <li>
          <Link to="/shop/groceries">GROCERIES</Link>
        </li>
      </ul>
    </nav>
  );
};

export default CategoryNavigation;
