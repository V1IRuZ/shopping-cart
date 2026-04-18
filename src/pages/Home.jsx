import Carousel from "../features/slideshow/Carousel.jsx";
import FreshGroceriesSection from "../features/home/FreshGroceriesSection.jsx";
import { useOutletContext } from "react-router";
import "../styles/Home.css";

const Home = () => {
  const { data } = useOutletContext();

  return (
    <>
      <Carousel data={data} />
      <FreshGroceriesSection />
    </>
  );
};

export default Home;
