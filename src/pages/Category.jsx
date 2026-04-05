import CategoryCard from "../features/category/CategoryCard.jsx";
import ShopPath from "../features/category/ShopPath.jsx";
import { useParams, useOutletContext } from "react-router";

const Category = () => {
  const { data } = useOutletContext();
  const { category } = useParams();

  const selectedCategory = data.filter((item) => item.category === category);

  return (
    <>
      <ShopPath />
      <ul className="category">
        {selectedCategory.map((item) => (
          <CategoryCard key={item.id} product={item} />
        ))}
      </ul>
    </>
  );
};

export default Category;
