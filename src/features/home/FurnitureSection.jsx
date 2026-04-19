import image from "../../assets/images/xie-yujie-nick-0lyt_Ye8e-s-unsplash.jpg";
import { Link } from "react-router";

const FurnitureSection = () => {
  return (
    <section className="furniture-banner">
      <Link to="/shop/furniture">
        <img src={image} alt="furniture" />
        <div className="text">
          <p>
            DO YOU NEED INSPIRATION FOR YOUR INTERIOR DESIGN? CHECK OUT OUR
            FURNITURE SECTION FOR HIGH-QUALITY AND AFFORDABLE PRODUCTS!
          </p>
          <span>SEE MORE</span>
        </div>
      </Link>
    </section>
  );
};

export default FurnitureSection;
