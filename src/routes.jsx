import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import Cart from "./pages/Cart.jsx";
import Category from "./pages/Category.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import InvalidRoute from "./pages/InvalidRoute.jsx";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <InvalidRoute />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/shop/:category",
        element: <Category />,
      },
      {
        path: "/shop/:category/:id",
        element: <ProductPage />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
];

export default routes;
