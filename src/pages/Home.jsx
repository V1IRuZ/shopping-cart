import Carousel from "../features/slideshow/Carousel.jsx";
import FreshGroceriesSection from "../features/home/FreshGroceriesSection.jsx";
import DiscountSection from  "../features/home/DiscountSection.jsx";
import FurnitureSection from "../features/home/FurnitureSection.jsx";
import DeliverySection from "../features/home/DeliverySection.jsx";
import { useOutletContext } from "react-router";
import "../styles/Home.css";

const Home = () => {
  const { data, handleAddToCart } = useOutletContext();

  return (
    <>
      <Carousel data={data} />
      <DiscountSection data={data} handleAddToCart={handleAddToCart} />
      <FreshGroceriesSection />
      <DeliverySection />
      <FurnitureSection />
    </>
  );
};

export default Home;
