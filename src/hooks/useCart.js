import { useState } from "react";

const useCart = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart((prev) => {
      let found = false;

      const updated = prev.map((item) => {
        if (item.id === product.id) {
          found = true;
          return { ...item, quantity: item.quantity + 1 };
        }

        return item;
      });

      if (found) return updated;

      return [
        ...prev,
        {
          title: product.title,
          id: product.id,
          category: product.category,
          image: product.thumbnail,
          price: product.price,
          quantity: 1,
        },
      ];
    });
  };

  return { cart, handleAddToCart, setCart };
};

export { useCart };
