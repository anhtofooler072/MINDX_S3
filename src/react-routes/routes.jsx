import { createBrowserRouter } from "react-router-dom";
import About from "../page/About";
import ConverseAll from "../page/ConverseAll";
import Layout from "../components/navigations/Layout";
import Homepage from "../page/Homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Wrap routes with Layout for consistent structure
    children: [
      // Home route nested within Layout
      { path: "/", element: <Homepage /> },
      { path: "about", element: <About /> }, // About route nested within Layout
      { path: "converseall", element: <ConverseAll /> }, // ConverseAll route nested within Layout
    ],
  },
]);

export default router;
