import { Link } from "react-router";

const SlideThree = ({ data, active }) => {
  const dogfood = data.find((item) => item.id === 22);

  return (
    <div className="slide three" inert={!active} aria-hidden={!active}>
      <Link
        tabIndex={active ? 0 : -1}
        to={`/shop/${dogfood.category}/${dogfood.id}`}
      >
        <div className="info">
          <h3>{dogfood.title} for your pet</h3>
          <p>{dogfood.description}</p>
          <div>
            <span>BUY NOW</span>
          </div>
        </div>
        <img src={dogfood.thumbnail} alt="" />
      </Link>
    </div>
  );
};

export default SlideThree;
