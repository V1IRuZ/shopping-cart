import Product from "../features/product/Product.jsx";
import { useOutletContext, useParams } from "react-router";
import "../styles/ProductPage.css";

const ProductPage = () => {
  const { data, handleAddToCart } = useOutletContext();
  let { id } = useParams();

  const currentProduct = data.find((item) => item.id === Number(id));

  return (
    <Product product={currentProduct} handleOnAddToCart={handleAddToCart} />
  );
};

export default ProductPage;
