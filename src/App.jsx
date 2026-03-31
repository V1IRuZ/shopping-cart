import { useState } from "react";
import "./App.css";
import PageLayout from "./components/PageLayout.jsx";
import { Outlet } from "react-router";
import { useProductData } from "./hooks/useProductsData.js";
import LoadingPage from "./pages/LoadingPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

function App() {
  const { data, loading, error } = useProductData();
  const [cart, setCart] = useState([]);

  if (error) {
    return <ErrorPage />;
  }

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <PageLayout cart={cart}>
      <Outlet context={{ data, loading, error, cart, setCart }} />
    </PageLayout>
  );
}

export default App;
