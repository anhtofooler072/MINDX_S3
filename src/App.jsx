import "./App.css";
import router from "./react-routes/routes";
import { RouterProvider } from "react-router-dom";
import Layout from "./components/navigations/Layout";

function App() {
  // console.log(router);
  return (
    <RouterProvider router={router}>
      <div>
        <Layout />
        <div id="root"></div>
      </div>
    </RouterProvider>
  );
}

export default App;
