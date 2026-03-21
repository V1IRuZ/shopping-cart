import ProductCard from "../components/ProductCard.jsx";
import { useOutletContext } from "react-router";
import LoadingPage from "./LoadingPage.jsx";
import ErrorPage from "./ErrorPage.jsx";

const Shop = () => {
  const { data, loading, error } = useOutletContext();

  if (loading) {
    return <LoadingPage />;
  }

  if (error) {
    return <ErrorPage />;
  }

  return (
    <>
      <h1>Shop</h1>
      <div className="products">
        {data.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </>
  );
};

export default Shop;
