import { Routes, Route } from "react-router-dom";
import frontRoutes from "./frontRoutes";
import Layout from "../Layout/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import PayMethods from "../pages/PayMethods";
import Contacts from "../pages/Contacts";
import PageNotFound from "../pages/PageNotFound";

import ProductCategories from "../pages/products/ProductCategories";
import ProductList from "../pages/products/ProductList";
import ProductDetails from "../pages/products/ProductDetails";

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path={frontRoutes.pages.home} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={frontRoutes.pages.pay} element={<PayMethods />} />
          <Route path={frontRoutes.pages.about} element={<About />} />
          <Route path={frontRoutes.pages.contacts} element={<Contacts />} />
          <Route path={frontRoutes.pages.products.index}>
            <Route index element={<ProductCategories />} />
            <Route
              path={frontRoutes.pages.products.category}
              element={<ProductList />}
            />
            <Route
              path={frontRoutes.pages.products.detail}
              element={<ProductDetails />}
            />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default AppRoutes;
