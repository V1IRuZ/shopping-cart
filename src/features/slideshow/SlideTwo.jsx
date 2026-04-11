import { Link } from "react-router";

const FragranceItem = ({ product }) => {
  return (
    <li className="fragrance-item">
      <img src={product.thumbnail} alt="" />
      <h4>{product.brand}</h4>
    </li>
  );
};

const SlideTwo = ({ data, active }) => {
  const fragrances = data?.filter((item) => item.category === "fragrances");

  if (!fragrances) return null;

  return (
    <div className="slide two" inert={!active} aria-hidden={!active}>
      <Link tabIndex={active ? 0 : -1} to="/shop/fragrances">
        <h3>SEE OUR SELECTION OF FRAGRANCES</h3>
        <ul className="fragrances">
          {fragrances.map((item) => (
            <FragranceItem product={item} key={item.id} />
          ))}
        </ul>
      </Link>
    </div>
  );
};

export default SlideTwo;
