import { Link } from "react-router";

const CategoryNavigation = () => {
  return (
    <nav className="category-nav">
      <ul className="category-list">
        <li>
          <Link to="/shop/beauty">Beauty</Link>
        </li>
        <li>
          <Link to="/shop/fragrances">Fragrances</Link>
        </li>
        <li>
          <Link to="/shop/furniture">Furniture</Link>
        </li>
        <li>
          <Link to="/shop/groceries">Groceries</Link>
        </li>
      </ul>
    </nav>
  );
};

export default CategoryNavigation;
