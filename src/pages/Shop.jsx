import { useState, useEffect } from "react";
import PageLayout from "../components/PageLayout.jsx";
import ProductCard from "../components/ProductCard.jsx";

const Shop = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <PageLayout>
      <h1>Shop</h1>
      <div className="products">
        {data.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </PageLayout>
  );
};

export default Shop;
