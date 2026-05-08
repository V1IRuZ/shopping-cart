import ProductCard from "../shop/ProductCard.jsx";

const DiscountSection = ({ data, handleAddToCart }) => {
  const discountProducts = data?.filter((item) => item.isDiscount);

  if (!discountProducts) return null;

  return (
    <section className="weekly-discount">
      <h2 className="heading">THIS WEEKS DISCOUNTS</h2>
      <ul className="discounts">
        {discountProducts.map((item) => (
          <ProductCard
            key={item.id}
            product={item}
            onAddtoCart={() => handleAddToCart(item)}
          />
        ))}
      </ul>
    </section>
  );
};

export default DiscountSection;
