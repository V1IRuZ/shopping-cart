import CategoryCard from "../components/CategoryCard.jsx";
import ShopPath from "../components/ShopPath.jsx";
import { useParams, useOutletContext } from "react-router";

const Category = () => {
  const { data } = useOutletContext();
  const { category } = useParams();

  const formatPath = decodeURIComponent(category);

  const selectedCategory = data.filter((item) => item.category === formatPath);

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
