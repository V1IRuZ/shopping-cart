import ProductCard from "./ProductCard.jsx";

const CategorySection = ({
  category,
  handleAddToCart,
  sectionClassName,
  headerText,
}) => {
  
  if (!category) return null;

  return (
    <section className={sectionClassName}>
      <h2>{headerText}</h2>
      <ul className="products">
        {category.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddtoCart={() => handleAddToCart(product)}
          />
        ))}
      </ul>
    </section>
  );
};

export default CategorySection;
