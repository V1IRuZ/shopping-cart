import { useState } from "react";

const useCart = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    const cartHasProduct = cart.find((item) => item.id === product.id);

    if (cartHasProduct) {
      setCart((prev) =>
        prev.map((item) =>
          item.id === product.id
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
        image: product.thumbnail,
        price: product.price,
        quantity: 1,
      },
    ]);
  };

  

  return { cart, handleAddToCart, setCart };
};

export { useCart };
