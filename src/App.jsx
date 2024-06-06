import "./App.css";
import router from "./react-routes/routes";
import { RouterProvider } from "react-router-dom";
import Layout from "./components/navigations/Layout";
import { getUserInfo } from "./store/isLoggedInSlice";
import { useEffect } from "react";  
import {Provider} from "react-redux";
import store from "./store/store"; 


function App() {
  // console.log(router);
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      store.dispatch(getUserInfo(token));
    }
  }, []);

  return (
    <Provider store={store}>
    <RouterProvider router={router}>
      <div>
        <Layout />
        <div id="root"></div>
      </div>
    </RouterProvider>
    </Provider>
  );
}

export default App;
