import ProductCard from "../components/ProductCard.jsx";
import { useOutletContext } from "react-router";
import LoadingPage from "./LoadingPage.jsx";
import ErrorPage from "./ErrorPage.jsx";

const Shop = () => {
  const { data, loading, error, cart, setCart } = useOutletContext();

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
        image: product.image,
        price: product.price,
        quantity: 1,
      },
    ]);
  };

  if (loading) {
    return <LoadingPage />;
  }

  if (error) {
    return <ErrorPage />;
  }

  return (
    <>
      <h1>Shop</h1>
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
