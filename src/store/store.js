import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./producs_slice.js";
import cartCheckerReducer from "./cartChecker.js";

const store = configureStore({
  reducer: {
    products: productsReducer,
    cartChecker: cartCheckerReducer,
  },
});

export default store;
