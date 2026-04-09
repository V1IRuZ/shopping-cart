import Carousel from "../features/slideshow/Carousel.jsx";
import { useOutletContext } from "react-router";

const Home = () => {
  const { data } = useOutletContext();

  return (
    <>
      <h1>This is Home page!</h1>
      <Carousel data={data} />
    </>
  );
};

export default Home;
