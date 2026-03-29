import { Link } from "react-router";

const CategoryNavigation = () => {
  return (
    <nav className="category-nav">
      <ul className="category-list">
        <li>
          <Link to="/shop">All</Link>
        </li>
        <li>
          <Link to="/shop/men's%20clothing">Men's Clothing</Link>
        </li>
        <li>
          <Link to="/shop/women's%20clothing">Women's Clothing</Link>
        </li>
        <li>
          <Link to="/shop/electronics">Electronics</Link>
        </li>
        <li>
          <Link to="/shop/jewelery">Jewelery</Link>
        </li>
      </ul>
    </nav>
  );
};

export default CategoryNavigation;
