import React from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
import Users from "./pages/Users";
import Products from "./pages/Products";
import CategoryGroupPage from "./pages/Products/CategoryGroups/List";
import BrandPage from "./pages/Products/Brands/List";

const IndexRoute = {
  path: "/",
  element: <Products></Products>,
};

function createUsersRoute() {
  return {
    path: "users",
    element: <Users />,
    children: [
      {
        path: "sub",
        element: <Users />,
      },
    ],
  };
}
function createProductRoute() {
  return {
    path: "products",
    element: <Products />,
    children: [
      {
        path: "subCate",
        element: <CategoryGroupPage />,
      },
      {
        path: "subCate/:id",
        element: <CategoryGroupPage />,
      },
      {
        path: "subBrand",
        element: <BrandPage />,
      },
    ],
  };
}
function Routes() {
  return useRoutes([IndexRoute, createUsersRoute(), createProductRoute()]);
}
function routes() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default routes;
