import { createBrowserRouter } from "react-router-dom";
import About from "../page/About";
import ConverseAll from "../page/ConverseAll";
import Layout from "../components/navigations/Layout";
import Homepage from "../page/Homepage";
import Product_detail from "../page/Product_detail";
import Notfound from "../page/Notfound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Wrap routes with Layout for consistent structure
    children: [
      // Home route nested within Layout
      { path: "/", element: <Homepage /> },
      { path: "about", element: <About /> }, // About route nested within Layout
      { path: "converseall", element: <ConverseAll /> }, // ConverseAll route nested within Layout
      { path: "converseall/product/:id", element: <Product_detail /> }, // Product Detail route nested within Layout
      { path: "*", element: <Notfound />}
    ],
  },
]);

export default router;
