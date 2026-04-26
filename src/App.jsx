import "./App.css";
import PageLayout from "./layout/PageLayout.jsx";
import { Outlet } from "react-router";
import { useProductData } from "./hooks/useProductsData.js";
import LoadingPage from "./components/LoadingPage.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import { useCart } from "./hooks/useCart.js";

function App() {
  const { data, loading, error } = useProductData();
  const { cart, handleAddToCart, setCart, showNotification, currentProductId } =
    useCart();

  if (error) {
    return <ErrorPage />;
  }

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <PageLayout
      data={data}
      cart={cart}
      showNotification={showNotification}
      currentProductId={currentProductId}
    >
      <Outlet context={{ data, cart, handleAddToCart, setCart }} />
    </PageLayout>
  );
}

export default App;
