import Product from "../features/product/Product.jsx";
import { useParams } from "react-router";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext.js";
import "../styles/ProductPage.css";

const ProductPage = () => {
  const { data, cart, dispatchCart } = useContext(ShopContext);
  let { id } = useParams();

  const currentProduct = data.find((item) => item.id === Number(id));

  return <Product product={currentProduct} cart={cart} dispatchCart={dispatchCart} />;
};

export default ProductPage;
