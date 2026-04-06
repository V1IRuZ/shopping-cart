import ProductCard from "../features/shop/ProductCard.jsx";
import CategoryNavigation from "../features/shop/CategoryNavigation.jsx";
import { useOutletContext } from "react-router";

const Shop = () => {
  const { data, handleAddToCart } = useOutletContext();

  return (
    <>
      <CategoryNavigation />
      <div className="products">
        {data.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddtoCart={() => handleAddToCart(product)}
          />
        ))}
      </div>
    </>
  );
};

export default Shop;
