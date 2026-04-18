import { Link } from "react-router";
import vegetables from "../../assets/images/randy-fath-5aJVJvJ9rG8-unsplash.jpg";

const FreshGroceriesSection = () => {
  return (
    <section className="groceries-banner">
      <Link to="/shop/groceries">
        <div className="text">
          <p>WE OFFER ONLY FRESH AND TASTY VEGETABLES </p>
          <span>SEE MORE</span>
        </div>
        <img src={vegetables} alt="vegetables" />
      </Link>
    </section>
  );
};

export default FreshGroceriesSection;
