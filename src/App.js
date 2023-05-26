import { createBrowserRouter } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import GuestLayout from "./layouts/GuestLayout";
import DefaultLayout from "./layouts/DefaultLayout";
import NotFound from "./screens/NotFound";
import LoginPlease from "./components/LoginPlease";
import ProductListScreen from "./screens/ProductListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";

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
        path: "/admin/productList",
        element: <ProductListScreen />,
      },
      {
        path: "/admin/product/:id/edit",
        element: <ProductEditScreen />,
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
