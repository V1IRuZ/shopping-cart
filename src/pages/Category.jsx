import CategoryCard from "../features/category/CategoryCard.jsx";
import ShopPath from "../features/category/ShopPath.jsx";
import { useParams, useOutletContext } from "react-router";

const Category = () => {
  const { data, handleAddToCart } = useOutletContext();
  const { category } = useParams();

  const selectedCategory = data.filter((item) => item.category === category);

  return (
    <>
      <ShopPath />
      <ul
        style={{
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        {selectedCategory.map((item) => (
          <CategoryCard
            key={item.id}
            product={item}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </ul>
    </>
  );
};

export default Category;
