import App from "./App.jsx";
import Shop from "./pages/Shop.jsx";
import Cart from "./pages/Cart.jsx";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
];

export default routes;
