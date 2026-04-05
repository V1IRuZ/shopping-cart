import ProductCard from "../features/shop/ProductCard.jsx";
import CategoryNavigation from "../features/shop/CategoryNavigation.jsx";
import { useOutletContext } from "react-router";

const Shop = () => {
  const { data, cart, setCart } = useOutletContext();

  const handleAddtoCart = (product, productId) => {
    const cartHasProduct = cart.some((item) => item.id === productId);

    if (cartHasProduct) {
      setCart((prev) =>
        prev.map((item) =>
          item.id === productId
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item,
        ),
      );

      return;
    }

    setCart((prev) => [
      ...prev,
      {
        title: product.title,
        id: product.id,
        category: product.category,
        image: product.images[0],
        price: product.price,
        quantity: 1,
      },
    ]);
  };

  return (
    <>
      <CategoryNavigation />
      <div className="products">
        {data.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddtoCart={() => handleAddtoCart(product, product.id)}
          />
        ))}
      </div>
    </>
  );
};

export default Shop;
