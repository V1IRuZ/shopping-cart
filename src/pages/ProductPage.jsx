import Product from "../features/product/Product.jsx";
import { useOutletContext, useParams } from "react-router";
import "../styles/ProductPage.css";

const ProductPage = () => {
  const { data } = useOutletContext();
  let { id } = useParams();

  const currentProduct = data.find((item) => item.id === Number(id));

  return <Product product={currentProduct} />;
};

export default ProductPage;
