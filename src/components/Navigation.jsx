import { Link } from "react-router";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/car">Cart</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
