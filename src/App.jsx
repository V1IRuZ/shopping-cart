import "./App.css";
import PageLayout from "./components/PageLayout.jsx";
import { Outlet } from "react-router";

function App() {
  return (
    <PageLayout>
      <Outlet />
    </PageLayout>
  );
}

export default App;
