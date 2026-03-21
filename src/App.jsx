import "./App.css";
import PageLayout from "./components/PageLayout.jsx";
import { Outlet } from "react-router";
import { useProductData } from "./hooks/useProductsData.js";

function App() {
  const { data, loading, error } = useProductData();

  return (
    <PageLayout>
      <Outlet context={{ data, loading, error }} />
    </PageLayout>
  );
}

export default App;
