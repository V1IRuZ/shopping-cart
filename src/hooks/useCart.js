import { useState, useRef, useEffect } from "react";

const useCart = () => {
  const [cart, setCart] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [currentProductId, setCurrentProductId] = useState(null);
  const timerRef = useRef(null);

  const handleAddToCart = (product) => {
    setShowNotification(true);
    setCurrentProductId(product.id);

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    setCart((prev) => {
      let found = false;

      const updated = prev.map((item) => {
        if (item.id === product.id) {
          found = true;
          if (item.quantity < 99) {
            return { ...item, quantity: item.quantity + 1 };
          }
        }

        return item;
      });

      if (found) return updated;

      return [
        ...prev,
        {
          title: product.title,
          id: product.id,
          isDiscount: product.isDiscount,
          discountPercentage: product.discountPercentage,
          category: product.category,
          image: product.thumbnail,
          price: product.price,
          quantity: 1,
        },
      ];
    });

    timerRef.current = setTimeout(() => {
      setShowNotification(false);
    }, 2000);
  };

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  return { cart, handleAddToCart, setCart, showNotification, currentProductId };
};

export { useCart };
