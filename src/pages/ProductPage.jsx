import Product from "../features/product/Product.jsx";
import { useOutletContext, useParams } from "react-router";
import "../styles/ProductPage.css";

const ProductPage = () => {
  const { data, cart, setCart } = useOutletContext();
  let { id } = useParams();

  const currentProduct = data.find((item) => item.id === Number(id));

  return <Product product={currentProduct} cart={cart} setCart={setCart} />;
};

export default ProductPage;
