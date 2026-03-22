import Product from "./Product";
import { useOutletContext, useParams } from "react-router";

const ProductPage = () => {
  const { data } = useOutletContext();
  let { id } = useParams();

  const currentProduct = data.find((item) => item.id === Number(id))  

  return <Product product={currentProduct} />;
};

export default ProductPage;
