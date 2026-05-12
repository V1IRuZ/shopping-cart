import { useState, useReducer, useRef, useEffect } from "react";

function cartReducer(cart, action) {
  switch (action.type) {
    case "add_once": {
      return [
        ...cart,
        {
          title: action.title,
          id: action.id,
          isDiscount: action.isDiscount,
          discountPercentage: action.discountPercentage,
          category: action.category,
          image: action.image,
          price: action.price,
          quantity: 1,
        },
      ];
    }
    case "add_quantity": {
      return cart.map((product) => {
        if (product.id === action.id) {
          return { ...product, quantity: action.quantity };
        }

        return product;
      });
    }
    case "increment": {
      return cart.map((product) => {
        if (product.id === action.id) {
          return { ...product, quantity: product.quantity + 1 };
        }

        return product;
      });
    }
    case "decrement": {
      return cart.map((product) => {
        if (product.id === action.id) {
          return { ...product, quantity: product.quantity - 1 };
        }

        return product;
      });
    }
    case "remove": {
      return cart.filter((product) => product.id !== action.id);
    }
    case "clear_all": {
      return [];
    }
    default: {
      throw Error("Unknown action " + action.type);
    }
  }
}

const useCart = () => {
  const [cart, dispatchCart] = useReducer(cartReducer, []);
  const [showNotification, setShowNotification] = useState(false);
  const [currentProductId, setCurrentProductId] = useState(null);
  const timerRef = useRef(null);

  const handleAddToCart = (addedItem) => {
    setShowNotification(true);
    setCurrentProductId(addedItem.id);

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    const foundProduct = cart.find((product) => product.id === addedItem.id);

    if (foundProduct) {
      if (foundProduct.quantity < 99) {
        dispatchCart({
          type: "increment",
          id: addedItem.id,
        });
      }
    } else {
      dispatchCart({
        type: "add_once",
        title: addedItem.title,
        id: addedItem.id,
        isDiscount: addedItem.isDiscount,
        discountPercentage: addedItem.discountPercentage,
        category: addedItem.category,
        image: addedItem.thumbnail,
        price: addedItem.price,
      });
    }

    timerRef.current = setTimeout(() => {
      setShowNotification(false);
    }, 2000);
  };

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  return {
    cart,
    handleAddToCart,
    dispatchCart,
    showNotification,
    currentProductId,
  };
};

export { useCart };
