import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slice.jsx";

const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

export default store;
