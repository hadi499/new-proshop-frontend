import { createBrowserRouter } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import GuestLayout from "./layouts/GuestLayout";
import DefaultLayout from "./layouts/DefaultLayout";
import AdminScreen from "./screens/AdminScreen";
import NotFound from "./screens/NotFound";
import LoginPlease from "./components/LoginPlease";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
  },
  {
    path: "/product/:id",
    element: <ProductScreen />,
  },
  {
    path: "/please",
    element: <LoginPlease />,
  },
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/admin",
        element: <AdminScreen />,
      },
      {
        path: "/cart/:id?",
        element: <CartScreen />,
      },
    ],
  },
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/login",
        element: <LoginScreen />,
      },
      {
        path: "/register",
        element: <RegisterScreen />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
