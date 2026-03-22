import { useState } from "react";
import "./App.css";
import PageLayout from "./components/PageLayout.jsx";
import { Outlet } from "react-router";
import { useProductData } from "./hooks/useProductsData.js";

function App() {
  const { data, loading, error } = useProductData();
  const [cart, setCart] = useState([]);

  return (
    <PageLayout>
      <Outlet context={{ data, loading, error, cart, setCart }} />
    </PageLayout>
  );
}

export default App;
