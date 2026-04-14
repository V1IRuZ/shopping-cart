import { Link } from "react-router";

const SlideFour = ({ data, active }) => {
  const items = data?.filter((item) => item.category === "beauty");

  if (!items) return null;

  return (
    <div
      data-testid="slide4"
      className="slide four"
      inert={!active}
      aria-hidden={!active}
    >
      <Link tabIndex={active ? 0 : -1} to="/shop/beauty">
        <h3>Beauty products</h3>
        <div className="items">
          {items.map((item) => (
            <img src={item.thumbnail} key={item.id} />
          ))}
        </div>
      </Link>
    </div>
  );
};

export default SlideFour;
