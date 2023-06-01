import { RouteObject, createBrowserRouter } from "react-router-dom";

import Layout from "../components/layout";
import HomePage from "../pages/home-page";
import ProductsPage from "../pages/products-page";
import ProductPage from "../pages/product-page";
import OrderPage from "../pages/order-page";

export enum Paths {
  HOME = "/",
  PRODUCTS = "/products",
  PRODUCT = "/products/:id",
  ORDER = "/order",
}

const routes: RouteObject[] = [
  {
    path: Paths.HOME,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: Paths.PRODUCTS,
        element: <ProductsPage />,
      },
      {
        path: Paths.PRODUCT,
        element: <ProductPage />,
      },
      {
        path: Paths.ORDER,
        element: <OrderPage />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
