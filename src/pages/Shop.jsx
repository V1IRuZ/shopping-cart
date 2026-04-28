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
        category={categories.sale}
        handleAddToCart={handleAddToCart}
        sectionClassName="sale"
        headerText="THIS WEEK'S DISCOUNTS!"
      />
      <CategorySection
        category={categories.beauty}
        handleAddToCart={handleAddToCart}
        sectionClassName="beauty"
        headerText="BEAUTY PRODUCTS"
      />
      <CategorySection
        category={categories.fragrances}
        handleAddToCart={handleAddToCart}
        sectionClassName="fragrances"
        headerText="FRAGRANCES"
      />
      <CategorySection
        category={categories.furniture}
        handleAddToCart={handleAddToCart}
        sectionClassName="furniture"
        headerText="FOR INTERIOR DESIGN"
      />
      <CategorySection
        category={categories.groceries}
        handleAddToCart={handleAddToCart}
        sectionClassName="groceries"
        headerText="GROCERIES"
      />
    </>
  );
};

export default Shop;
