import CategorySection from "../features/shop/CategorySection.jsx";
import CategoryNavigation from "../features/shop/CategoryNavigation.jsx";
import { useCategories } from "../hooks/useCategories.js";
import { useOutletContext } from "react-router";
import "../styles/Shop.css";

const Shop = () => {
  const { data, handleAddToCart } = useOutletContext();
  const categories = useCategories(data);

  if (!categories) return null;

  return (
    <>
      <CategoryNavigation />
      <CategorySection
        category={categories.beauty}
        handleAddToCart={handleAddToCart}
        sectionClassName="beauty"
        headerText="Our beauty products"
      />
      <CategorySection
        category={categories.fragrances}
        handleAddToCart={handleAddToCart}
        sectionClassName="fragrances"
        headerText="Find our fragrances here"
      />
      <CategorySection
        category={categories.furniture}
        handleAddToCart={handleAddToCart}
        sectionClassName="furniture"
        headerText="Our stylish furniture"
      />
      <CategorySection
        category={categories.groceries}
        handleAddToCart={handleAddToCart}
        sectionClassName="groceries"
        headerText="Daily grocery shopping"
      />
    </>
  );
};

export default Shop;
