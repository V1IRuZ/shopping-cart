import "./App.css";
import PageLayout from "./layout/PageLayout.jsx";
import { Outlet } from "react-router";
import { useProductData } from "./hooks/useProductsData.js";
import { ShopContext } from "./context/ShopContext.js";
import LoadingPage from "./pages/LoadingPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import { useCart } from "./hooks/useCart.js";

function App() {
  const { data, loading, error } = useProductData();
  const {
    cart,
    handleAddToCart,
    dispatchCart,
    showNotification,
    currentProductId,
  } = useCart();

  if (error) {
    return <ErrorPage />;
  }

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <ShopContext
      value={{
        cart,
        dispatchCart,
        handleAddToCart,
        data,
        showNotification,
        currentProductId,
      }}
    >
      <PageLayout
        data={data}
        cart={cart}
        showNotification={showNotification}
        currentProductId={currentProductId}
      >
        <Outlet />
      </PageLayout>
    </ShopContext>
  );
}

export default App;
