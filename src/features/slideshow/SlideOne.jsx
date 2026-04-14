import { Link } from "react-router";

const SlideOne = ({ data, active }) => {
  const bed = data?.find((item) => item.id === 11);

  if (!bed) return null;

  return (
    <div
      data-testid="slide1"
      className="slide first"
      inert={!active}
      aria-hidden={!active}
    >
      <div className="images">
        <img src={bed.images[0]} alt="" />
        <img src={bed.images[1]} alt="" />
        <img src={bed.images[2]} alt="" />
        <img src={bed.thumbnail} alt="" />
      </div>
      <div className="info">
        <h3>{bed.title}</h3>
        <p>{bed.description}</p>
        <div className="link">
          <Link
            tabIndex={active ? 0 : -1}
            to={`/shop/${bed.category}/${bed.id}`}
          >
            SEE MORE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SlideOne;
