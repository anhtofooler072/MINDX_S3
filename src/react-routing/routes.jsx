import { createBrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import About from "../page/about";
import Navbar from "../components/navigations/navbar";
import ConverseAll from "../page/ConverseAll";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Navbar />
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/converseall",
        element: <ConverseAll />
    }
]);

export default router;