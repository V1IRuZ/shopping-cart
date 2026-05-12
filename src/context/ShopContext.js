import { createContext } from "react";

export const ShopContext = createContext({
  cart: [],
  data: [],
  showNotification: false,
  currentProductId: null,
});
